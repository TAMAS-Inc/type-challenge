/*
  9 - Deep Readonly
  -------
  by Anthony Fu (@antfu) #보통 #readonly #object-keys #deep
  
  ### 질문
  
  객체의 프로퍼티와 모든 하위 객체를 재귀적으로 읽기 전용으로 설정하는 제네릭 `DeepReadonly<T>`를 구현하세요.
  
  이 챌린지에서는 타입 파라미터 `T`를 객체 타입으로 제한하고 있습니다. 객체뿐만 아니라 배열, 함수, 클래스 등 가능한 다양한 형태의 타입 파라미터를 사용하도록 도전해 보세요.
  
  예시:
  
  ```ts
  type X = { 
    x: { 
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }
  
  type Expected = { 
    readonly x: { 
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey' 
  }
  
  type Todo = DeepReadonly<X> // should be same as `Expected`
  ```
  
  > GitHub에서 보기: https://tsch.js.org/9/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

// type Includes<T extends readonly any[], U> = T extends [
//   infer First,
//   ...infer Rest
// ]
//   ? Equal<First, U> extends true
//     ? true
//     : Includes<Rest, U>
//   : false;

// type DeepReadonly<T> = {
//   readonly [k in keyof T]: T[k] extends object ? DeepReadonly<T[k]> : T[k];
// };

// type DeepReadonly<T> = T extends Function
//   ? T
//   : { readonly [key in keyof T]: DeepReadonly<T[key]> };

// type DeepReadonly<T> = T extends {}
//   ? {
//       readonly [K in keyof T]: T[K] extends infer U
//         ? U extends (...arg: any) => any
//           ? U
//           : DeepReadonly<U>
//         : never;
//     }
//   : never;

type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never
    ? T[key]
    : DeepReadonly<T[key]>;
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        }
      ];
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        }
      ];
    };
  };
};

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/9/answer/ko
  > 정답 보기: https://tsch.js.org/9/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/