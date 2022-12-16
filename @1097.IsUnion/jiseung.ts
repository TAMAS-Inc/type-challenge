/*
  1097 - IsUnion
  -------
  by null (@bencor) #medium #union
  
  ### 문제
  
  입력 타입 'T'를 사용하고 'T'가 Union 타입으로 확인되는지 여부를 반환하는 타입 'IsUnion'을 구현합니다.

  예시:
    
    ```ts
    type case1 = IsUnion<string>  // false
    type case2 = IsUnion<string|number>  // true
    type case3 = IsUnion<[string|number]>  // false
    ```
  
  > View on GitHub: https://tsch.js.org/1097
*/

/* _____________ Your Code Here _____________ */

// Naked<A | B | C, A> = T extends U ? true : false;
// (A extends A ? true : false) | (B extends A ? true : false) | (C extends A ? true : false)

// IsUnion<T1 | T2 | T3, U = T>
// (T1 extends U ? true : false) | (T2 extends U ? true : false) | (T3 extends A ? true : false)
// ((T1 extends U ? true : false) | (T2 extends U ? true : false) | (T3 extends A ? true : false)) extends true?
// =>

// IsUnion<T, U = T>
// (T extends U ? true : false)

// type IsUnion<T, U = T> = (
//   T extends U ? (U extends T ? true : '의미 없는 값') : 'T랑 U랑 같으면 extends true에 걸리도록'
// ) extends true
//   ? false
//   : true;

type IsUnion<T, K = T> = [T] extends [never]
  ? false
  : T extends never
  ? false
  : [K] extends [T]
  ? false
  : true;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1097/answer
  > View solutions: https://tsch.js.org/1097/solutions
  > More Challenges: https://tsch.js.org
*/
