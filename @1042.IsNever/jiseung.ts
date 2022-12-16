/*
  1042 - IsNever
  -------
  by hiroya iizuka (@hiroyaiizuka) #medium #union #utils
  
  ### 문제
  
  입력 타입 'T'를 사용하는 타입 IsNever를 구현하십시오.
  의 타입이 `never`로 확인되면 `true`를 반환하고 그렇지 않으면 `false`를 반환합니다.
  
  예시:
  
  ```ts
  type A = IsNever<never>  // expected to be true
  type B = IsNever<undefined> // expected to be false
  type C = IsNever<null> // expected to be false
  type D = IsNever<[]> // expected to be false
  type E = IsNever<number> // expected to be false
  ```
  
  > View on GitHub: https://tsch.js.org/1042
*/

/* _____________ Your Code Here _____________ */

type IsNever<T> = [T] extends [never] ? true : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1042/answer
  > View solutions: https://tsch.js.org/1042/solutions
  > More Challenges: https://tsch.js.org
*/
