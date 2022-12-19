/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #medium #math
  
  ### 문제
  
  타입으로 숫자(항상 양수)가 주어집니다. 타입은 1 감소된 숫자를 반환해야 합니다.

  For example:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > View on GitHub: https://tsch.js.org/2257
*/

/* _____________ Your Code Here _____________ */

// type Pop<T extends any[]> = T extends [...infer head, any] ? head : never;

// type MinusOne<T extends number, A extends any[] = []> = T extends 0 ? -1 : A['length'] extends T
//   ? Pop<A>['length']
//   : MinusOne<T, [...A, 0]>;

type ParseInt<T extends string> = T extends `${infer Digit extends number}`
  ? Digit
  : never;
type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : '';
type RemoveLeadingZeros<S extends string> = S extends '0'
  ? S
  : S extends `${'0'}${infer R}`
  ? RemoveLeadingZeros<R>
  : S;
type InternalMinusOne<S extends string> =
  S extends `${infer Digit extends number}${infer Rest}`
    ? Digit extends 0
      ? `9${InternalMinusOne<Rest>}`
      : `${[9, 0, 1, 2, 3, 4, 5, 6, 7, 8][Digit]}${Rest}`
    : never;
type MinusOne<T extends number> = T extends 0
  ? -1
  : ParseInt<
      RemoveLeadingZeros<ReverseString<InternalMinusOne<ReverseString<`${T}`>>>>
    >;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2257/answer
  > View solutions: https://tsch.js.org/2257/solutions
  > More Challenges: https://tsch.js.org
*/
