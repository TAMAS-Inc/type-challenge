/*
  529 - Absolute
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #math #template-literal
  
  ### 질문
  
  `Absolute` 유형을 구현합니다. 문자열, 숫자 또는 bigint를 사용하는 유형입니다. 출력은 양수 문자열이어야 합니다.  
  
  예시:
  
  ```ts
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
  ```
  
  > View on GitHub: https://tsch.js.org/529
*/

/* _____________ Your Code Here _____________ */

type Absolute<T extends number | string | bigint> = any;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>,
  Expect<Equal<Absolute<-1_000_000n>, '1000000'>>,
  Expect<Equal<Absolute<9_999n>, '9999'>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/529/answer
  > View solutions: https://tsch.js.org/529/solutions
  > More Challenges: https://tsch.js.org
*/
