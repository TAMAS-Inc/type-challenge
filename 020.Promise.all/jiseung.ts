/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #medium #array #promise
  
  ###문제
  
  PromiseLike 객체의 배열을 허용하는 함수 `PromiseAll`을 입력하십시오. 반환 값은 `Promise<T>`여야 합니다. 여기서 `T`는 해결된 결과 배열입니다.
  
  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)
  ```
  
  > View on GitHub: https://tsch.js.org/20
*/

/* _____________ Your Code Here _____________ */

type Awaited<T> = T extends null | undefined
  ? T
  : T extends object & {
      then(onfulfilled: infer F): any;
    }
  ? F extends (value: infer V, ...args: any) => any
    ? Awaited<V>
    : never
  : T;

type UnPromise<T1 extends readonly unknown[]> = T1['length'] extends 0
  ? []
  : T1 extends readonly [infer First, ...infer Rest]
  ? [Awaited<First>, ...UnPromise<Rest>]
  : T1 extends (infer U | Promise<infer P>)[]
  ? (U | P)[]
  : T1;

declare function PromiseAll<T extends unknown[]>(
  args: readonly [...T]
): Promise<UnPromise<T>>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/20/answer
  > View solutions: https://tsch.js.org/20/solutions
  > More Challenges: https://tsch.js.org
*/
