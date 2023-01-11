/*
  2946 - ObjectEntries
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement the type version of ```Object.entries```

  For example

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```

  > View on GitHub: https://tsch.js.org/2946
*/

/* _____________ Your Code Here _____________ */

type ObjectEntries<T, K extends keyof T = keyof T> = K extends K
  ? [K, T[K] extends undefined | infer Type ? Type : undefined]
  : never;

// type ObjectEntries<T, R = Required<T>> = {
//   [Key in keyof R]: [Key, R[Key] extends never ? undefined : R[Key]];
// }[keyof R];

// Distributive Conditional Types에 따라 삼항연산자를 사용하여 유니온 타입으로 만들어주었다.
// Partial제네릭 타입에서 undefined가 유니온 타입으로 추가 되었기 때문에 이를 고려해줘야한다.

// Require제네릭으로 partial된 타입이 들어가면서 undefined을 걸러주었다.

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2946/answer
  > View solutions: https://tsch.js.org/2946/solutions
  > More Challenges: https://tsch.js.org
*/
