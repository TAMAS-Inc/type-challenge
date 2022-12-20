/*
  2688 - StartsWith
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal
  
  ### 문제
  
  두 개의 정확한 문자열 타입을 취하고 `T`가 `U`로 시작하는지 여부를 반환하는 `StartsWith<T, U>`를 구현합니다.
  
  예시
  
  ```typescript
  type a = StartsWith<'abc', 'ac'> // expected to be false
  type b = StartsWith<'abc', 'ab'> // expected to be true
  type c = StartsWith<'abc', 'abcd'> // expected to be false
  ```
  
  > View on GitHub: https://tsch.js.org/2688
*/

/* _____________ Your Code Here _____________ */

type StartsWith<T extends string, U extends string> = T extends `${U}${infer R}`
  ? true
  : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2688/answer
  > View solutions: https://tsch.js.org/2688/solutions
  > More Challenges: https://tsch.js.org
*/
