/*
  4499 - Chunk
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple

  ### Question

  Do you know `lodash`? `Chunk` is a very useful function in it, now let's implement it.
  `Chunk<T, N>` accepts two required type parameters, the `T` must be a `tuple`, and the `N` must be an `integer >=1`

  ```ts
  type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
  type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
  type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
  ```

  > View on GitHub: https://tsch.js.org/4499
*/

/* _____________ Your Code Here _____________ */

// type Chunk<
//   T extends any[],
//   N extends number,
//   R extends any[] = [],
//   > = T extends [...infer A, ...infer B] ?
//   A['length'] extends N ? [...R, A, ...Chunk<B, N, R>] : [...R, ...A, ...B] : [];

// type Chunk<
//   T extends any[],
//   N extends number,
//   C extends any[] = [],
// > = C['length'] extends N
//   ? [C, ...Chunk<T, N>]
//   : T extends [infer A, ...infer B]
//   ? B extends []
//     ? [[...C, A]]
//     : Chunk<B, N, [...C, A]>
//   : [];

type Chunk<
  T extends unknown[],
  N,
  R extends unknown[] = [],
> = R['length'] extends N
  ? [R, ...Chunk<T, N, []>]
  : T extends [infer A, ...infer B]
  ? B extends []
    ? [[...R, A]]
    : Chunk<B, N, [...R, A]>
  : [];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4499/answer
  > View solutions: https://tsch.js.org/4499/solutions
  > More Challenges: https://tsch.js.org
*/
