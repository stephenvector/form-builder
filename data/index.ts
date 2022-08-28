type TransformFunction<T> = (...args: any[]) => T;

type DataCallback<T> = (newValue: T) => void;

function getNewValue<T>(
  dataNodes: DataNode<any>[],
  transformFunction: TransformFunction<T>
) {
  return transformFunction(...dataNodes.map((m) => m.value));
}

export class DataNode<T> {
  private _value: T;
  private _callbacks: DataCallback<T>[];

  constructor(initialValue: T) {
    this._callbacks = [];
    this._value = initialValue;
  }

  get value() {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;

    this._callbacks.forEach((cb) => {
      cb(this._value);
    });
  }

  subscribe(callback: (value: T) => void) {
    this._callbacks.push(callback);
  }
}

export class DerivedDataNode<T> extends DataNode<T> {
  private _dependencies: DataNode<any>[];
  private _transformFunction: TransformFunction<T>;

  constructor(
    dependencies: DataNode<any>[],
    transformFunction: TransformFunction<T>
  ) {
    super(getNewValue(dependencies, transformFunction));
    this.onDependencyChange = this.onDependencyChange.bind(this);
    this._transformFunction = transformFunction;
    this._dependencies = dependencies;
    this._dependencies.forEach((dependencyNode) => {
      dependencyNode.subscribe(this.onDependencyChange);
    });
  }

  private onDependencyChange() {
    const newValue = getNewValue(this._dependencies, this._transformFunction);
    this.value = newValue;
  }
}
