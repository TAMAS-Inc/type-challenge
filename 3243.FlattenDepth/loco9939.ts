/*
  3243 - FlattenDepth
  -------
  by jiangshan (@jiangshanmeta) #medium #array

  ### Question

  Recursively flatten array up to depth times.

  For example:

  ```typescript
  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  ```

  If the depth is provided, it's guaranteed to be positive integer.

  > View on GitHub: https://tsch.js.org/3243
*/

/* _____________ Your Code Here _____________ */

type Flatten<T extends any[]> = T extends [infer F, ...infer O]
  ? F extends any[]
    ? [...F, ...Flatten<O>]
    : [F, ...Flatten<O>]
  : T;

type FlattenDepth<
  T extends any[],
  C extends number = 1,
  R extends any[] = []
> = T extends Flatten<T>
  ? T
  : C extends R["length"]
  ? T
  : FlattenDepth<Flatten<T>, C, [unknown, ...R]>;

// TypeScript에서 for loop을 돌기 위해 위와 같이 사용한다.
// 1. Flatten<T>에 확장 가능하다면 그대로 반환해주고 그렇지 않다면,
// 2. R 길이와 비교해주는데, 현재 R 길이는 0인데 C는 1이므로, FlattenDepth<Flatten<T>, C, [unknown, ...R]>로 재귀를 돈다.

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<
    Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3243/answer
  > View solutions: https://tsch.js.org/3243/solutions
  > More Challenges: https://tsch.js.org
*/
