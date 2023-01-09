/*
  2759 - RequiredByKeys
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### 문제
  
  두 가지 타입 인수 `T` 및 `K`를 사용하는 제네릭 `RequiredByKeys<T, K>`를 구현합니다.
  'K'는 필수로 설정해야 하는 'T'의 속성 집합을 지정합니다. `K`가 제공되지 않으면 제네릭 `Required<T>`처럼 모든 속성을 필수로 만들어야 합니다.

  예시
  
  ```typescript
  interface User {
    name?: string
    age?: number
    address?: string
  }
  
  type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
  
  ```
  
  > View on GitHub: https://tsch.js.org/2759
*/

/* _____________ Your Code Here _____________ */
type Flatten<T> = {
  [P in keyof T]: T[P];
};

type RequiredByKeys<T, K extends keyof T = keyof T> = Flatten<
  Omit<T, K> & {
    [P in K]-?: T[P];
  }
>;

// Omit을 사용하여 K 프로퍼티만 제거한 객체 타입을 생성
// 이후 K 프로퍼티는 Optional 하지 않은 프로퍼티로 생성하여 intersection

// Flatten<T 같은 경우는 객체 타입을 선언을 해주는데 인수로 들어오는 타입을 그대로 객체 타입으로 바꿔준다.
// Optional 한 것은 Optional, Required 한 것은 Required

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

interface User {
  name?: string;
  age?: number;
  address?: string;
}

interface UserRequiredName {
  name: string;
  age?: number;
  address?: string;
}

interface UserRequiredNameAndAge {
  name: string;
  age: number;
  address?: string;
}

type cases = [
  Expect<Equal<RequiredByKeys<User, "name">, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, "name" | "age">, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, "name" | "unknown">, UserRequiredName>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2759/answer
  > View solutions: https://tsch.js.org/2759/solutions
  > More Challenges: https://tsch.js.org
*/
