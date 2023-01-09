/*
  2852 - OmitByType
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### 문제
  
  ```T```에서 ```U```에 할당할 수 없는 타입의 속성 집합을 선택합니다.

  예시
  
  ```typescript
  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
  ```
  
  > View on GitHub: https://tsch.js.org/2852
*/

/* _____________ Your Code Here _____________ */

type OmitByType<T extends { [k in keyof T]: any }, U> = {
  [P in keyof T as T[P] extends U ? never : P]: T[P];
};

// Omit 문제와 비슷하다.
// T의 임의의 key 값 P가 U로 확장가능하다면, never 그렇지 않으면 P로 추론

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<
    Equal<
      OmitByType<Model, string>,
      { count: number; isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<
    Equal<
      OmitByType<Model, number>,
      { name: string; isReadonly: boolean; isEnable: boolean }
    >
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2852/answer
  > View solutions: https://tsch.js.org/2852/solutions
  > More Challenges: https://tsch.js.org
*/
