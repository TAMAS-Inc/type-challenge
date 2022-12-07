/*
  15 - Last of Array
  -------
  by Anthony Fu (@antfu) #medium #array
  
  ### 문제
  
  > 이 도전에는 TypeScript 4.0이 권장됩니다
  
  배열 `T`를 사용하고 마지막 요소를 반환하는 제네릭 `Last<T>`를 구현합니다.

  예시
  
  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]
  
  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```
  
  > View on GitHub: https://tsch.js.org/15
*/

/* _____________ Your Code Here _____________ */

type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never;

// TypeScript 4.2버전부터 rest 문법을 앞, 중간에서도 사용 가능하게 되었다.

// 타입 관점으로만 생각하기
// 자바스크립트에서는 ... rest 문법은 가장 뒤에 와야만한다.

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/15/answer
  > View solutions: https://tsch.js.org/15/solutions
  > More Challenges: https://tsch.js.org
*/
