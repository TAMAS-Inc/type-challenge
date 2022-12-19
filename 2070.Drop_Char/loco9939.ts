/*
  2070 - Drop Char
  -------
  by CaptainOfPhB (@CaptainOfPhB) #medium #template-literal #infer
  
  ### 문제
  
  문자열에서 지정된 문자를 삭제합니다.
  
  예시:
  
  ```ts
  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
  ```
  
  > View on GitHub: https://tsch.js.org/2070
*/

/* _____________ Your Code Here _____________ */

type DropChar<
  S extends string,
  C extends string
> = S extends `${infer A}${C}${infer R}` ? `${A}${DropChar<R, C>}` : S;

// 추론 A+" "+추론 R 형식에 맞다면, 추론 A+재귀(추론 R+" ")
// 맞지 않다면, 원래 문자열 반환

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2070/answer
  > View solutions: https://tsch.js.org/2070/solutions
  > More Challenges: https://tsch.js.org
*/
