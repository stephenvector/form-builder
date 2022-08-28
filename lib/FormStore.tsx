import _ from "lodash";

export const SUBSCRIBE_TO_ALL_KEY = "*";

export type FormStoreCallback = (newValue: unknown) => void;

export default class FormStore {
  value: Record<string, unknown>;
  subscriptionCallbacks: Record<string, FormStoreCallback>;
  subscribedToAllCallbacks: Record<string, FormStoreCallback>;
  subscriptionKey: Record<string, string>;
  subscriptionIndex: number;

  constructor() {
    this.subscriptionIndex = 0;
    this.value = {};
    this.subscriptionCallbacks = {};
    this.subscribedToAllCallbacks = {};
    this.subscriptionKey = {};

    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }

  subscribe(key: string, callback: FormStoreCallback) {
    const subscriptionId = `sub${this.subscriptionIndex}`;
    this.subscriptionIndex++;

    if (key === SUBSCRIBE_TO_ALL_KEY) {
      this.subscribedToAllCallbacks[subscriptionId] = callback;
    } else {
      this.subscriptionKey[subscriptionId] = key;
      this.subscriptionCallbacks[subscriptionId] = callback;
    }
    return subscriptionId;
  }

  unsubscribe(subscriptionId: string) {
    if (subscriptionId in this.subscribedToAllCallbacks) {
      delete this.subscribedToAllCallbacks[subscriptionId];
    }

    if (subscriptionId in this.subscriptionKey) {
      delete this.subscriptionKey[subscriptionId];
    }

    if (subscriptionId in this.subscriptionCallbacks) {
      delete this.subscriptionCallbacks[subscriptionId];
    }
  }

  set(key: string, value: unknown) {
    this.value = _.set({ ...this.value }, key, value);

    Object.entries(this.subscribedToAllCallbacks).forEach(([, callback]) => {
      console.log("update all");
      callback(this.value);
    });

    const subscriptionIdsToCall = Object.entries(this.subscriptionKey).filter(
      ([, dataKey]) => {
        return key === dataKey;
      }
    );

    subscriptionIdsToCall.forEach(([subscriptionId]) => {
      if (subscriptionId in this.subscriptionCallbacks) {
        this.subscriptionCallbacks[subscriptionId](_.get(this.value, key));
      }
    });
  }

  get(key: string) {
    return _.get(this.value, key);
  }
}
