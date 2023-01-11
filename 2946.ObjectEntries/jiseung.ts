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

type ObjectEntries<T, K extends keyof T = keyof T> =
  K extends unknown ? [K, T[K] extends undefined | infer Type ? Type : undefined] : any;

// type ObjectEntries<T extends object> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T];

// type ObjectEntries<T, K extends keyof T = keyof T> = [
//   K,
//   T[K] extends undefined | infer Type ? Type : undefined
// ];

// type ObjectEntries<T> = {
//   [Key in keyof T]: [
//     Key,
//     T[Key] extends infer Required | undefined ? Required : undefined
//   ];
// }[keyof T] extends infer Result | undefined
//   ? Result
//   : undefined;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2946/answer
  > View solutions: https://tsch.js.org/2946/solutions
  > More Challenges: https://tsch.js.org
*/
