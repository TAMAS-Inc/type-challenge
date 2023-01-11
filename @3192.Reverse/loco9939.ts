/*
  3192 - Reverse
  -------
  by jiangshan (@jiangshanmeta) #medium #tuple

  ### Question

  Implement the type version of ```Array.reverse```

  For example:

  ```typescript
  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
  ```

  > View on GitHub: https://tsch.js.org/3192
*/

/* _____________ Your Code Here _____________ */

type Reverse<T extends unknown[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : [];

// 먼저 T가 [infer F, ...infer R]로 확장가능하다면, T는 [...Reverse<R>, F]로 추론된다.
// R을 다시 Reverse<>제네릭의 인수로 넘겨줘서 R이 [infer F, infer R']로 확장가능 한지 판단하여 거짓이라면 Reverse<R>은 []이 들어간다.

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
  Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>
];

type errors = [
  // @ts-expect-error
  Reverse<"string">,
  // @ts-expect-error
  Reverse<{ key: "value" }>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3192/answer
  > View solutions: https://tsch.js.org/3192/solutions
  > More Challenges: https://tsch.js.org
*/
