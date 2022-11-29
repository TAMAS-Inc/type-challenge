<img src="https://raw.githubusercontent.com/type-challenges/type-challenges/454767ce6ebb197f29fdbfa04e385042fd15aaf3/screenshots/logo.svg" />

[Type Challenge](https://github.com/type-challenges/type-challenges) 문제를 함께 푸는 레포지토리입니다.

## 1일차 (2022/11/29)

[Pick](https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md)<br>
[Readonly](https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md)<br>
[Tuple to Object](https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md)

<details>
<summary>학습한 내용</summary>

## List vs Array vs Tuple

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

## `T[number]`

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

[First of Array](https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md)

[Length of Tuple](https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md)

[Exclude](https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md)
