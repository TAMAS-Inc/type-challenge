/*
  5153 - IndexOf
  -------
  by Pineapple (@Pineapple0919) #medium #array

  ### 문제

  Array.indexOf의 타입 버전을 구현한 indexOf<T, U>는 배열 T, 임의의 U를 취하고 배열 T에서 첫 번째 U의 인덱스를 반환합니다.
  
  ```ts
  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
  ```

  > View on GitHub: https://tsch.js.org/5153
*/

/* _____________ Your Code Here _____________ */

// type IndexOf<
//   T extends unknown[],
//   U extends number,
//   A extends unknown[] = []
// > = T[A["length"]] extends U ? A["length"] : IndexOf<T, U, [...A, " "]>;

type IndexOf<T extends unknown[], U, Temp extends unknown[] = []> = T extends [
  infer A,
  ...infer Rest
]
  ? (U extends A ? (A extends U ? true : false) : false) extends true
    ? [...Temp]["length"]
    : IndexOf<Rest, U, [...Temp, 0]>
  : -1;

  


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>,
  Expect<Equal<IndexOf<[string, "a"], "a">, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5153/answer
  > View solutions: https://tsch.js.org/5153/solutions
  > More Challenges: https://tsch.js.org
*/
