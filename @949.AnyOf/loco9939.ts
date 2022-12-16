/*
  949 - AnyOf
  -------
  by null (@kynefuk) #medium #array
  
  ### 문제
  
  타입 시스템에서 Python like `any` 함수를 구현합니다. 타입은 배열을 사용하고 배열의 요소가 참이면 '참'을 반환합니다. 배열이 비어 있으면 `false`를 반환합니다.
  예시:
  
  ```ts
  type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
  type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
  ```
  
  > View on GitHub: https://tsch.js.org/949
*/

/* _____________ Your Code Here _____________ */

type Falsy =
  | 0
  | ""
  | []
  | false
  | undefined
  | null
  | Record<PropertyKey, never>;

type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true;

/* _____________ Test Cases _____________ */
import type { Equal, Expect, IsTrue } from "@type-challenges/utils";

type cases = [
  Expect<
    Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
  Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
  Expect<
    Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>
  >,
  Expect<Equal<AnyOf<[0, "", false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/949/answer
  > View solutions: https://tsch.js.org/949/solutions
  > More Challenges: https://tsch.js.org
*/
