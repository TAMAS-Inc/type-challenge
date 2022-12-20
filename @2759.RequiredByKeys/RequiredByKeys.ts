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

type RequiredByKeys<T, K> = any;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

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
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
  // @ts-expect-error
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2759/answer
  > View solutions: https://tsch.js.org/2759/solutions
  > More Challenges: https://tsch.js.org
*/
