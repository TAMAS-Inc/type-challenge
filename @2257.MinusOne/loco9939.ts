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
// 你的答案
type Dict = {
  "0": [];
  "1": [0];
  "2": [0, 0];
  "3": [0, 0, 0];
  "4": [0, 0, 0, 0];
  "5": [0, 0, 0, 0, 0];
  "6": [0, 0, 0, 0, 0, 0];
  "7": [0, 0, 0, 0, 0, 0, 0];
  "8": [0, 0, 0, 0, 0, 0, 0, 0];
  "9": [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

// 乘以 10 倍
type TenTimes<A extends 0[]> = [
  ...A,
  ...A,
  ...A,
  ...A,
  ...A,
  ...A,
  ...A,
  ...A,
  ...A,
  ...A
];

// 将数字转化为用 0 填充的数组，数字值对应数组长度
// 例如：
// 3 -> [0, 0, 0]
// 11 -> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
type ToArray<
  N extends string,
  Result extends 0[] = []
> = N extends `${infer F extends keyof Dict}${infer R}`
  ? ToArray<R, [...TenTimes<Result>, ...Dict[F]]>
  : Result;

type MinusOne<T extends number> = ToArray<`${T}`> extends [infer F, ...infer R]
  ? R["length"]
  : T extends 0
  ? -1
  : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

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
