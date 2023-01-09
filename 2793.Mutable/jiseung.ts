/*
  2793 - Mutable
  -------
  by jiangshan (@jiangshanmeta) #medium #readonly #object-keys
  
  ### 문제
  
  ```T```의 모든 속성을 변경 가능(읽기 전용 아님)으로 만드는 일반 ```Mutable<T>```을 구현합니다.

  예시
  
  ```typescript
  interface Todo {
    readonly title: string
    readonly description: string
    readonly completed: boolean
  }
  
  type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
  
  ```
  
  > View on GitHub: https://tsch.js.org/2793
*/

/* _____________ Your Code Here _____________ */

type Mutable<T extends object> = { -readonly [k in keyof T]: T[k] };

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List = [1, 2, 3];

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>
];

type errors = [
  // @ts-expect-error
  Mutable<'string'>,
  // @ts-expect-error
  Mutable<0>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2793/answer
  > View solutions: https://tsch.js.org/2793/solutions
  > More Challenges: https://tsch.js.org
*/
