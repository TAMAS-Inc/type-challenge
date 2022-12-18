/*
  1367 - Remove Index Signature
  -------
  by hiroya iizuka (@hiroyaiizuka) #medium #object-keys
  
  ### 문제
  
  `RemoveIndexSignature<T>`를 구현하고 개체 타입에서 인덱스 시그니처를 제외합니다.
  
  예시:
  
  ```
  
  type Foo = {
    [key: string]: any;
    foo(): void;
  }
  
  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
  
  ```
  
  > View on GitHub: https://tsch.js.org/1367
*/

/* _____________ Your Code Here _____________ */

// type Signature<T> = string extends T
//   ? never
//   : number extends T
//   ? never
//   : symbol extends T
//   ? never
//   : T;

// type RemoveIndexSignature<T> = {
//   [K in keyof T as Signature<K>]: T[K];
// };
type RemoveIndexSignature<T> = {
  [K in keyof T as PropertyKey extends keyof T[K] ? never : K]: T[K];
};

// Signature 를 통해서 T는 key에 올 수 없는 타입으로 지정하였다.
// ex) 프로퍼티 키로 bar라고 온 것은 그냥 bar라는 타입을 지정해준 것이고 [bar:string]이라는 key로 온 것은 bar라는 string 타입으로 키가 온 것이므로 이를 구분해주었다.

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type Foo = {
  [key: string]: any;
  foo(): void;
};

type Bar = {
  [key: number]: any;
  bar(): void;
  0: string;
};

const foobar = Symbol("foobar");
type FooBar = {
  [key: symbol]: any;
  [foobar](): void;
};

type Baz = {
  bar(): void;
  baz: string;
};

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1367/answer
  > View solutions: https://tsch.js.org/1367/solutions
  > More Challenges: https://tsch.js.org
*/
