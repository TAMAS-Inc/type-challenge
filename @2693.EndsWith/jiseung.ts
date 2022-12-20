/*
  2693 - EndsWith
  -------
  by jiangshan (@jiangshanmeta) #medium #template-literal
  
  ### 문제
  
  두 개의 정확한 문자열 타입을 취하고 `T`가 `U`로 끝나는지 여부를 반환하는 `EndsWith<T, U>`를 구현합니다.
  
  예시:
  
  ```typescript
  type a = EndsWith<'abc', 'bc'> // expected to be true
  type b = EndsWith<'abc', 'abc'> // expected to be true
  type c = EndsWith<'abc', 'd'> // expected to be false
  ```
  
  > View on GitHub: https://tsch.js.org/2693
*/

/* _____________ Your Code Here _____________ */

type EndsWith<T extends string, U extends string> = T extends `${infer A}${U}`
  ? true
  : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2693/answer
  > View solutions: https://tsch.js.org/2693/solutions
  > More Challenges: https://tsch.js.org
*/
