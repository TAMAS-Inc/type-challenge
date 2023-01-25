/*
  5310 - Join
  -------
  by Pineapple (@Pineapple0919) #medium #array

  ### 문제

  Array.join의 타입 버전을 구현한 Join<T, U>은 배열 T, 문자열 또는 숫자 U를 취하여 U가 스티칭된 배열 T를 반환합니다.


  ```ts
  type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
  type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
  type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
  type Res3 = Join<["o"], "u">; // expected to be 'o'
  ```

  > View on GitHub: https://tsch.js.org/5310
*/

/* _____________ Your Code Here _____________ */

// type Join<
//   T extends unknown[],
//   U extends string | number,
//   R extends string = '',
// > = T extends [infer A extends string | number, ...infer B]
//   ? R extends ''
//     ? Join<B, U, `${A}`>
//     : Join<B, U, `${R}${U}${A}`>
//   : R;

// type Join<
//   T extends unknown[],
//   U extends string | number,
//   R extends string = '',
// > = T extends [infer A extends string, ...infer B]
//   ? Join<B, U, R extends '' ? A : `${R}${U}${A}`>
//   : R;

// type sn = string | number;

// type Join<T extends sn[], U extends sn> = T extends [
//   infer A extends sn,
//   ...infer B extends sn[],
// ]
//   ? B extends []
//     ? `${A}`
//     : `${A}${U}${Join<B, U>}`
//   : '';

type Join<
  T extends unknown[],
  U extends string | number
> = T extends [infer A extends string | number, ...infer B]
  ? B extends []
    ? `${A}`
    : `${A}${U}${Join<B, U>}`
  : '';

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5310/answer
  > View solutions: https://tsch.js.org/5310/solutions
  > More Challenges: https://tsch.js.org
*/
