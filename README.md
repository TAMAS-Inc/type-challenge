<img src="https://raw.githubusercontent.com/type-challenges/type-challenges/454767ce6ebb197f29fdbfa04e385042fd15aaf3/screenshots/logo.svg" />

[Type Challenge](https://github.com/type-challenges/type-challenges) 문제를 함께 푸는 레포지토리입니다.

### 1일차 (2022/11/29)

[Pick](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ko.md)

[Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.ko.md)

[Tuple to Object](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ko.md)

<details>
<summary>학습한 내용</summary>

### List vs Array vs Tuple

1. List

- mutable
- ordered
- can be changed or replaced
- more than one data type

2. Array

- mutable
- ordered
- can be changed or replaced
- only similar data types

3. Tuple

- immutable
- ordered
- cannot be changed or replaced
- more than one data type

### `T[number]`

- 타입스크립트에서 Array는 index signature를 이용해 이런 식으로 선언되어 있다.

```ts
interface ArrayMaybe<Element> {
  [index: number]: Element;
}
```

1. **인덱스 시그니처**는 특정 타입의 key나 특정 타입의 value를 가진 프로퍼티를 가리킨다.

2. `T[___]` T의 프로퍼티를 추론한다. 즉, `T[___]`를 사용하면 인덱스 시그니처의 타입을 참조할 수 있다.

- Array에 대해서 `T[number]` 또는 `T['length']`를 사용할 수 있다. Array는 number타입의 index를 가지고 있으며, 'length'라는 속성을 가지고 있기 때문이다.

- 만약 `T[string]`을 사용한다면 참조할 자료유형은 다음 예시와 같을 것이다.

```ts
interface Dictionary<Value> {
  [key: string]: Value;
}
```

[참고링크](https://stackoverflow.com/questions/59187941/whats-the-tnumber-mean-in-typescript-code)

</details>

### 2일차 (2022/11/30)

[First of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.ko.md)

[Length of Tuple](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.ko.md)

[Exclude](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.ko.md)

<details>
<summary>학습한 내용</summary>

### Distributive conditional types

타입이 naked 타입 매개변수인 조건 타입을 `distributive conditional types`라고 한다.
`distributive conditional types`은 인스턴스화 중에 union 타입에 자동으로 분산된다.

```ts
type Excludes<T, U> = T extends U ? X : Y;

Excludes<A | B | C, A>;
```

위 코드는 아래와 같이 추론된다.

```ts
// Excludes<A | B | C, A>;
(A extends A ? X : Y) | (B extends A ? X : Y) | (C extends A ? X : Y)
```

[참고링크](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types)

</details>

### 3일차 (2022/12/01)

[Awaited](https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.ko.md)

[If](https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.ko.md)

[Concat](https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md)

<details>
<summary>학습한 내용</summary>

</details>

### 4일차 (2022/12/02)

[Includes](https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ko.md)

[Push](https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.ko.md)

[Unshift](https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.ko.md)

<details>
<summary>학습한 내용</summary>

</details>

### 5일차 (2022/12/05)

[Parameters](https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.ko.md)

[Get_Return_Type](https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ko.md)

<details>
<summary>학습한 내용</summary>

</details>
