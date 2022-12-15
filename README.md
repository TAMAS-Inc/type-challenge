<img src="https://raw.githubusercontent.com/type-challenges/type-challenges/454767ce6ebb197f29fdbfa04e385042fd15aaf3/screenshots/logo.svg" />

[Type Challenge](https://github.com/type-challenges/type-challenges) 문제를 함께 푸는 레포지토리입니다.

### 1일차 (2022/11/29)

1. Pick
2. Readonly
3. Tuple to Object]

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

1. First of Array
2. Length of Tuple

3. Exclude

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

1. Awaited
2. If
3. Concat
<details>
<summary>학습한 내용</summary>

### PromiseLike

- ArrayLike 타입과 비슷하게, Promise와 유사한 프로퍼티(then: onfulfilled)를 가진 객체를 PromiseLike 타입으로 추론할 수 있다.

### infer

- 아직 선언되지 않은 변수를 지정할 때 사용할 수 있는 키워드
- infer 키워드와 함께 선언되면 외부 식별자와의 관계가 끊어지고 오직 해당 문에서만 유지되는 변수를 생성한다.
- infer 키워드와 선언한 변수는 삼항 연산자, 즉 조건부 타입 맥락 안에서만 사용할 수 있고 '참'인 경우에 대한 타입을 추론한다.
</details>

### 4일차 (2022/12/02)

1. Includes
2. Push
3. Unshift

<details>
<summary>학습한 내용</summary>
### infer
infer 키워드를 사용해 재귀적인 타입 추론이 가능하다.

### 스프레드 문법

타입스크립트에서도 자바스크립트와 동일한 전개 구문을 사용할 수 있다.

### readonly

as const로 단언된 값의 타입을 추론할 때는 반드시 readonly를 사용해야 한다.

### Equal

타입이 정확히 같은지 비교하기 위해서는 다음과 같은 구문이 필요하다.

```ts
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <B>() => B extends Y
  ? 1
  : 2
  ? true
  : false;
```

위처럼 제네릭을 사용한 함수의 형태가 동일한지 비교해서 타입이 정확히 같은지 알 수 있다.

</details>

### 5일차 (2022/12/05)

1. Parameters
2. Get_Return_Type

<details>
<summary>학습한 내용</summary>
### infer
- infer 키워드는 제네릭 `<>` 안에서 사용할 수 없으며 우변에서 조건부 맥락과 함께 사용해야 한다.
</details>

### 6일차 (2022/12/06)

1. 002.Omit
2. 008.Readonly2
3. 009.Deep Readonly

<details>
<summary>학습한 내용</summary>

</details>

### 7일차 (2022/12/07)

1. 010.Tuple to Union
2. 012.Chainable Options
3. 015.Last of Array

<details>
<summary>학습한 내용</summary>

## TypeScript v.4.2

- Smarter type alias preservation
  - 올바른 타입으로 별칭 추론
- Leading/middle rest elements in tuple types
  - 스프레드 연산자를 처음, 중간 위치에서 쓸 수 있음
- Stricter checks for the in operator
  - in 연산자를 엄격하게 검사하고 오류를 명확하게 표시
- --noPropertyAccessFromIndexSignature
  - 점 연산자로 속성을 찾을 수 있음
- Template literal expressions have template literal types
  - 템플릿 리터럴 표현식의 결과를 추론
- Improved uncalled function checks in logical expressions
  - 호출되지 않은 함수 에러
- Better understanding of the compile process
  - `tsc --explainFiles`
- Support for Abstract Constructor Types
  - `abstract` 타입 지원

</details>

## 8일차 (2022/12/08)

1. 062.Type Lookup
2. 020.Promise.all
3. 016.Pop

<details>
<summary>학습한 내용</summary>

</details>

## 9일차 (2022/12/09)

1. 106.Trim Left
2. 108.Trim
3. 110.Capitalize

<details>
<summary>학습한 내용</summary>

[Template literal types](https://toss.tech/article/template-literal-types)

</details>

## 10일차 (2022/12/12)

1. 116.Replace
2. 119.ReplaceAll
3. 191.Append Argument

<details>
<summary>학습한 내용</summary>

</details>

## 11일차 (2022/12/13)

1. 296.Permutation
2. 298.Length of String
3. 459.Flatten

<details>
<summary>학습한 내용</summary>

Distributive Conditional Types

```ts
type P<T> = T extends never ? true : false;
type A1 = P<never>; //never
type A2 = P<any>; //boolean

type Q<T> = [T] extends [never] ? true : false;
type B1 = Q<never>; //true
type B2 = Q<any>; //false
```

</details>

## 12일차 (2022/12/14)

1. 527.Append to Object
2. 529.Absolute
3. 531.String to Union

<details>
<summary>학습한 내용</summary>

- PropertyKey 타입

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

</details>

## 13일차 (2022/12/15)

1. 599.Merge
2. 612.KebabCase
3. 645.Diff

<details>
<summary>학습한 내용</summary>

- Record<PropertyKey, unknown> : T의 프로퍼티 K로 구성
- Uncapitalize : 문자열 리터럴 타입의 첫 번째 문자를 소문자로 변환
- Lowercase : 문자열 리터럴 타입 전체를 소문자로 변환
- Omit : K 타입의 프로퍼티를 제외하고 T의 프로퍼티로 타입을 생성

</details>

## 14일차 (2022/12/16)

1. 949.AnyOf
2. 1042.IsNever
3. 1097.IsUnion

<details>
<summary>학습한 내용</summary>

</details>
