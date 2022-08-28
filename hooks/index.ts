import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext, FormStoreContext } from "@/contexts";
import { SUBSCRIBE_TO_ALL_KEY } from "@/lib/FormStore";

export function useAuth() {
  return useContext(AuthContext);
}

export function useFormValues() {
  const formStore = useContext(FormStoreContext);

  const [value, setValue] = useState(() => {
    return formStore.value;
  });

  useEffect(() => {
    const subscriptionId = formStore.subscribe(
      SUBSCRIBE_TO_ALL_KEY,
      (newValue) => {
        console.log("new value");
        setValue(newValue as Record<string, any>);
      }
    );

    return () => {
      formStore.unsubscribe(subscriptionId);
    };
  }, [formStore]);

  console.log("useFormValuess");

  return value;
}

export function useFormValue(key: string, initialValue: unknown) {
  const formStore = useContext(FormStoreContext);

  const [value, setValue] = useState(() => {
    return formStore.get(key) ?? initialValue;
  });

  useEffect(() => {
    if (!formStore.get(key)) {
      formStore.set(key, initialValue);
    }
    const subscriptionId = formStore.subscribe(key, (newValue) => {
      setValue(newValue);
    });

    return () => {
      formStore.unsubscribe(subscriptionId);
    };
  }, [formStore, key, initialValue]);

  return value;
}

export function useField(name: string, initialValue: any) {
  const value = useFormValue(name, initialValue);
  const formStore = useContext(FormStoreContext);

  const setValue = useCallback(
    (newValue: unknown) => {
      formStore.set(name, newValue);
    },
    [formStore, name]
  );

  return {
    value,
    setValue,
  };
}
