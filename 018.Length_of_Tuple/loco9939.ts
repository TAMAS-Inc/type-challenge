/*
  18 - Length of Tuple
  -------
  by sinoon (@sinoon) #쉬움 #tuple
  
  ### 질문
  
  배열(튜플)을 받아 길이를 반환하는 제네릭 `Length<T>`를 구현하세요.
  
  예시:
  
  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
  
  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```
  
  > GitHub에서 보기: https://tsch.js.org/18/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Length<T extends readonly any[]> = T["length"];

// loco9939

// T 타입은 튜플인데, 튜플은 객체로 보았을 때, length 프로퍼티를 갖는다. 그러므로 튜플 타입의 length 프로퍼티를 참조하였다.
// 제네릭 안에 T에 대해 오류 처리를 위해서 배열 중에서 readonly인 요소 즉, 배열 길이를 수정할 수 없는 배열 = 튜플로만 한정지었다.

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/18/answer/ko
  > 정답 보기: https://tsch.js.org/18/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
