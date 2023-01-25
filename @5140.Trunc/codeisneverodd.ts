/*
  5140 - Trunc
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal

  ### 문제

  문자열 또는 숫자를 취하고 소수를 제거하여 숫자의 정수 부분을 반환하는 ```Math.trunc```의 타입 버전을 구현합니다.
  
  For example:

  ```typescript
  type A = Trunc<12.34> // 12
  ```

  > View on GitHub: https://tsch.js.org/5140
*/

/* _____________ Your Code Here _____________ */

type Trunc<N extends number | string> = `${N}` extends `${infer A}.${infer B}`
  ? A
  : `${N}`;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Trunc<0.1>, "0">>,
  Expect<Equal<Trunc<1.234>, "1">>,
  Expect<Equal<Trunc<12.345>, "12">>,
  Expect<Equal<Trunc<-5.1>, "-5">>,
  Expect<Equal<Trunc<"1.234">, "1">>,
  Expect<Equal<Trunc<"-10.234">, "-10">>,
  Expect<Equal<Trunc<10>, "10">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5140/answer
  > View solutions: https://tsch.js.org/5140/solutions
  > More Challenges: https://tsch.js.org
*/
