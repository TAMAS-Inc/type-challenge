/*
  1130 - ReplaceKeys
  -------
  by 贱贱 (@lullabyjune) #medium #object-keys
  
  ### 문제
  
  Union 타입의 키를 교체하는 타입 ReplaceKeys를 구현합니다. 일부 타입에 이 키가 없으면 교체를 건너뛰고,
  타입은 세 개의 인수를 사용합니다.
  
  예시:
  
  ```ts
  type NodeA = {
    type: 'A'
    name: string
    flag: number
  }
  
  type NodeB = {
    type: 'B'
    id: number
    flag: number
  }
  
  type NodeC = {
    type: 'C'
    name: string
    flag: number
  }
  
  
  type Nodes = NodeA | NodeB | NodeC
  
  type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', {name: number, flag: string}> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.
  
  type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', {aa: number}> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
  ```
  
  > View on GitHub: https://tsch.js.org/1130
*/

/* _____________ Your Code Here _____________ */

type ReplaceKeys<U, T, Y> = {
  [P in keyof U]: P extends T ? (P extends keyof Y ? Y[P] : never) : U[P];
};

// P라는 타입을 선언해주었다. P는 U(객체)의 key 타입이다.
// P(key)에 대한 값으로 P가 T라면 다음 삼항 연산자를 실행한다.
// P가 교체하려는 객체의 key라면, P(key)의 값은 교체하려는 객체 Y에 P(key)를 사용한다.
// 그렇지 않으면, 원래 객체의 값을 사용한다.

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type ReplacedNodeA = {
  type: "A";
  name: number;
  flag: string;
};

type ReplacedNodeB = {
  type: "B";
  id: number;
  flag: string;
};

type ReplacedNodeC = {
  type: "C";
  name: number;
  flag: string;
};

type NoNameNodeA = {
  type: "A";
  flag: number;
  name: never;
};

type NoNameNodeC = {
  type: "C";
  flag: number;
  name: never;
};

type Nodes = NodeA | NodeB | NodeC;
type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;
type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB;

type cases = [
  Expect<
    Equal<
      ReplaceKeys<Nodes, "name" | "flag", { name: number; flag: string }>,
      ReplacedNodes
    >
  >,
  Expect<Equal<ReplaceKeys<Nodes, "name", { aa: number }>, NodesNoName>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1130/answer
  > View solutions: https://tsch.js.org/1130/solutions
  > More Challenges: https://tsch.js.org
*/
