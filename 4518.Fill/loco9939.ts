/*
  4518 - Fill
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple

  ### 문제

  일반적인 JavaScript 함수인 `Fill`을 Type으로 구협해보자.
    `Fill<T, N, Start?, End?>`는 `Fill`은 4가지 타입의 매개변수를 허용한다.
    `T`와 `N`은 필수 매개변수이고 `Start`와 `End`는 선택적 매개변수다.
    매개변수에 대한 요구 사항은 다음과 같다. 
    - `T`는 `튜플`이어야 하고 `N`은 모든 유형의 값일 수 있으며 `Start` 및 `End`는 0보다 크거나 같은 정수여야 한다.

    ```ts
  type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
  ```
  In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)

  > View on GitHub: https://tsch.js.org/4518
*/

/* _____________ Your Code Here _____________ */

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  R extends any[] = []
> = R["length"] extends End
  ? [...R, ...T]
  : T extends [infer A, ...infer B]
  ? Start extends 0 | R["length"]
    ? Fill<B, N, 0, End, [...R, N]>
    : Fill<B, N, Start, End, [...R, A]>
  : R;

// 1. 결과 배열의 길이가 End와 같으면 결과 결과배열 뒤에 대상 배열을 붙혀준다.
// 2. 그렇지 않을 때, Start가 0 또는 결과 배열의 길이라면 Start를 0으로 두고 결과 배열에는 N을 추가해준다.
// 3. Start가 조건에 만족하지 않는다면, Start 부터 시작하고 결과 배열에 대상 배열의 첫번째 요소를 붙혀준다.
// 4. 만약 T가 배열이 아니라면 결과 배열을 반환한다.

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4518/answer
  > View solutions: https://tsch.js.org/4518/solutions
  > More Challenges: https://tsch.js.org
*/
