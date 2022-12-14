/*
  16 - Pop
  -------
  by Anthony Fu (@antfu) #medium #array
  
  ### 의문
  
  > 이 챌린지에서는 TypeScript 4.0을 권장합니다.
  
  배열 `T`를 취하고 마지막 요소 없이 배열을 반환하는 일반 `Pop<T>`를 구현합니다.
  
  예를 들어
  
  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]
  
  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```
  
  **Extra**: Similarly, can you implement `Shift`, `Push` and `Unshift` as well?
  
  > View on GitHub: https://tsch.js.org/16
*/

/* _____________ Your Code Here _____________ */

type Pop<T extends any[]> = T extends [...infer U, infer _] ? U : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/16/answer
  > View solutions: https://tsch.js.org/16/solutions
  > More Challenges: https://tsch.js.org
*/
