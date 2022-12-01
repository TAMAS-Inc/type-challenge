type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer B>
  ? B extends PromiseLike<any>
    ? MyAwaited<B>
    : B
  : never;
