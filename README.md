# TS-Challenge By TAMAS

![ts-challenge](https://raw.githubusercontent.com/type-challenges/type-challenges/454767ce6ebb197f29fdbfa04e385042fd15aaf3/screenshots/logo.svg)

> [Type Challenge](https://github.com/type-challenges/type-challenges) 문제를 함께 푸는 레포지토리입니다. 꾸준히 문제를 풀고 학습한 내용을 정리합니다

## 작성 가이드

1. 오늘 날짜에 배운 내용을 정리한다
2. 정리한 내용을 유형에 맞게 분류하고, 관련 문제를 적는다.

## TOC

<!-- > 영어와 `.` 이외의 문자가 들어가면 링크가 정상적으로 작동하지 않습니다. -->

- [Types](#types)

  - [1. List vs Array vs Tuple](#1-list-vs-array-vs-tuple)
  - [2. T[number]](#2-tnumber)
  - [3. Distributive conditional types](#3-distributive-conditional-types)
  - [4. PromiseLike](#4-promiselike)
  - [5. infer](#5-infer)
  - [6. Spread Syntax](#6-spread-syntax)
  - [7. readonly](#7-readonly)
  - [8. Equal](#8-equal)
  - [9. TypeScript v.4.2](#9-typescript-v42)
  - [10. Template literal types](#10-template-literal-types)
  - [11. Distributive Conditional Types](#11-distributive-conditional-types)
  - [12. PropertyKey Type](#12-propertykey-type)
  - [13. Useful Generics](#13-useful-generics)
  - [14. Mapping Modifiers](#14-mapping-modifiers)
  - [15. Function vs (...arg: any) => any](#15-function-vs-arg-any--any)
  - [16. object vs Object](#16-object-vs-object)
  - [17. Counted Loop](#17-counted-loop)
  - [18. Array and Tuple](#18-array-and-tuple)

- [Dates](#dates)

  - [DAY 1 22.11.29](#day-1-221129)
    - [List vs Array vs Tuple](#1-list-vs-array-vs-tuple)
    - [`T[number]`](#2-tnumber)
  - [DAY 2 221130](#day-2-221130)
    - [Distributive conditional types](#11-distributive-conditional-types)
  - [DAY 3 221201](#day-3-221201)
    - [PromiseLike](#4-promiselike)
    - [infer](#5-infer)
  - [DAY 4 221202](#day-4-221202)
    - [infer](#5-infer)
    - [Spread Syntax](#6-spread-syntax)
    - [readonly](#7-readonly)
    - [Equal](#8-equal)
  - [DAY 5 221205](#day-5-221205)
    - [infer](#5-infer)
  - [DAY 6 221206](#day-6-221206)
  - [DAY 7 221207](#day-7-221207)
    - [TypeScript v.4.2](#9-typescript-v42)
  - [DAY 8 221208](#day-8-221208)
  - [DAY 9 221209](#day-9-221209)
    - [Template literal types](#10-template-literal-types)
  - [DAY 10 221212](#day-10-221212)
  - [DAY 11 221213](#day-11-221213)
    - [Distributive Conditional Types](#11-distributive-conditional-types)
  - [DAY 12 221214](#day-12-221214)
  - [PropertyKey Type](#12-propertykey-type)
  - [DAY 13 221215](#day-13-221215)
    - [Useful Generics](#13-useful-generics)
  - [DAY 14 221216](#day-14-221216)
  - [DAY 15 221217](#day-15-221217)
  - [DAY 16 221219](#day-16-221219)
  - [DAY 17 221220](#day-17-221220)
  - [DAY 18 221221](#day-18-221221)
    - [Mapping Modifiers](#14-mapping-modifiers)
  - [DAY 19 230109](#day-19-230109)
  - [DAY 20 230111](#day-20-230111)
    - [`Function` vs `(...arg: any) => any`](#15-function-vs-arg-any--any)
    - [`object` vs `Object`](#16-object-vs-object)
    - [Counted Loop](#17-counted-loop)
  - [DAY 21 230113](#day-21-230113)
  - [DAY 22 230116](#day-22-230116)
  - [DAY 23 230118](#day-23-230118)
    - [Array and Tuple](#18-array-and-tuple)
  - [DAY 24 230120](#day-24-230120)
  - [DAY 25 230125](#day-25-230125)

  ## Types

  ### 1. List vs Array vs Tuple

  **📚 관련 문제**: 004.Pick, 007.Readonly, 011.Tuple_to_Object

  1.  List

  - mutable
  - ordered
  - can be changed or replaced
  - more than one data type

  2.  Array

  - mutable
  - ordered
  - can be changed or replaced
  - only similar data types

  3.  Tuple

  - immutable
  - ordered
  - cannot be changed or replaced
  - more than one data type

  ### 2. T[number]

  **📚 관련 문제**: 004.Pick, 007.Readonly, 011.Tuple_to_Object

  - 타입스크립트에서 Array는 index signature를 이용해 이런 식으로 선언되어 있다.

    ```ts
    interface ArrayMaybe<Element> {
      [index: number]: Element;
    }
    ```

  1.  **인덱스 시그니처**는 특정 타입의 key나 특정 타입의 value를 가진 프로퍼티를 가리킨다.

  2.  `T[___]` T의 프로퍼티를 추론한다. 즉, `T[___]`를 사용하면 인덱스 시그니처의 타입을 참조할 수 있다.

  - Array에 대해서 `T[number]` 또는 `T['length']`를 사용할 수 있다. Array는 number타입의 index를 가지고 있으며, 'length'라는 속성을 가지고 있기 때문이다.

  - 만약 `T[string]`을 사용한다면 참조할 자료타입은 다음 예시와 같을 것이다.

    ```ts
    interface Dictionary<Value> {
      [key: string]: Value;
    }
    ```

  🔗 **참고링크**

  - [whats-the-tnumber-mean-in-typescript-code](https://stackoverflow.com/questions/59187941/whats-the-tnumber-mean-in-typescript-code)

  ### 3. Distributive conditional types

  **📚 관련 문제**: 014.First_of_Array, 018.Length_of_Tuple

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

  🔗 **참고링크**

  - [distributive-conditional-types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types)

  ### 4. PromiseLike

  **📚 관련 문제**: 189.Awaited, 268.If, 533.Concat

  - ArrayLike 타입과 비슷하게, Promise와 유사한 프로퍼티(then: onfulfilled)를 가진 객체를 PromiseLike 타입으로 추론할 수 있다.

  ### 5. infer

  **📚 관련 문제**: 189.Awaited, 268.If, 533.Concat

  - 아직 선언되지 않은 변수를 지정할 때 사용할 수 있는 키워드
  - infer 키워드와 함께 선언되면 외부 식별자와의 관계가 끊어지고 오직 해당 문에서만 유지되는 변수를 생성한다.
  - infer 키워드와 선언한 변수는 삼항 연산자, 즉 조건부 타입 맥락 안에서만 사용할 수 있고 '참'인 경우에 대한 타입을 추론한다.

  **📚 관련 문제**: 898.Includes, 3057.Push, 3060.Unshift

  - infer 키워드를 사용해 재귀적인 타입 추론이 가능하다.

  **📚 관련 문제**: 3312.Parameters, 002.Return_Type

  - infer 키워드는 제네릭 `<>` 안에서 사용할 수 없으며 우변에서 조건부 맥락과 함께 사용해야 한다.

  ### 6. Spread Syntax

  **📚 관련 문제**: 898.Includes, 3057.Push, 3060.Unshift

  타입스크립트에서도 자바스크립트와 동일한 전개 구문을 사용할 수 있다.

  ### 7. readonly

  **📚 관련 문제**: 898.Includes, 3057.Push, 3060.Unshift

  as const로 단언된 값의 타입을 추론할 때는 반드시 readonly를 사용해야 한다.

  ### 8. Equal

  **📚 관련 문제**: 898.Includes, 3057.Push, 3060.Unshift

  타입이 정확히 같은지 비교하기 위해서는 다음과 같은 구문이 필요하다.

  ### 9. TypeScript v.4.2

  **📚 관련 문제**: 010.Tuple_to_Union, 012.Chainable_Options, 015.Last_of_Array

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

  ### 10. Template literal types

  **📚 관련 문제**: 106.Trim_Left, 108.Trim, 110.Capitalize

  - [Template literal types](https://toss.tech/article/template-literal-types)

  ### 11. Distributive Conditional Types

  **📚 관련 문제**: 296.Permutation, 298.Length_of_String, 459.Flatten, 3376.InorderTraversal

  1. 유니온이 extends 구문에 사용되면, 분배되어 동작한다.
  2. 단, 유니온이 대괄호(`[]`) 에 감싸지면 분배되지 않는다.

  아래의 예시를 보면 never와 any 가 유니온임을 알 수 있다.

  ```ts
  type P<T> = T extends never ? true : false;
  type A1 = P<never>; //never
  type A2 = P<any>; //boolean

  type Q<T> = [T] extends [never] ? true : false;
  type B1 = Q<never>; //true
  type B2 = Q<any>; //false
  ```

  또다른 예시

  ```ts
  type DCT<Type> = Type extends any ? Type[] : never;
  type Result1 = DCT<string | number>;
  // => string[] | number[]

  type NotDCT<Type> = [Type] extends [any] ? Type[] : never;
  type Result2 = NotDCT<string | number>;
  // => (string|number)[]
  ```

  🔗 **참고링크**

  - [never는 빈 유니온 처럼 동작한다.](https://github.com/microsoft/TypeScript/issues/23182#issuecomment-379094672)
  - [distributive-conditional-types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html?msclkid=c7e18040c87b11ec98204fd236267031#distributive-conditional-types)

  ### 12. PropertyKey Type

  **📚 관련 문제**: 527.Append_to_Object, 529.Absolute, 531.String_to_Union

  ```ts
  type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };
  ```

  ### 13. Useful Generics

  **📚 관련 문제**: 599.Merge, 612.KebabCase, 645.Diff

  - Record<PropertyKey, unknown> : T의 프로퍼티 K로 구성
  - Uncapitalize : 문자열 리터럴 타입의 첫 번째 문자를 소문자로 변환
  - Lowercase : 문자열 리터럴 타입 전체를 소문자로 변환
  - Omit : K 타입의 프로퍼티를 제외하고 T의 프로퍼티로 타입을 생성

  ### 14. Mapping Modifiers

  **📚 관련 문제**: 2759.RequiredByKeys, 2793.Mutable, 2852.OmitByType

  매핑된 타입은 읽기 전용 또는 ? 추가를 지원한다.
  이것은 기본적으로 기본 타입의 수정자를 유지하는 동형 매핑 타입에서 중요하다.

  TypeScript 2.8은 특정 수정자를 추가하거나 제거하기 위해 매핑된 타입에 대한 기능을 추가했다다.
  특히 매핑된 타입의 속성 수정자에 readonly 또는 ?에 + 또는 -를 접두사로 추가하여 수정자를 추가하거나 제거해야 함을 나타낼 수 있다.

  ```ts
  -readonly [P in keyof T]-?: T[P] }; // Remove readonly and ?
  type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] }; // Add readonly and ?
  ```

  🔗 **참고링크**

  - [14-](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#14-)

  ### 15. Function vs (...arg: any) => any

  📚 관련 문제: 3196.Flip_Arguments

  - 전역 타입 `Function`은 JavaScript의 모든 함수 값에 존재하는 bind, call, apply 및 기타 속성과 같은 속성을 설명한다.

  - `Function` 타입의 값을 항상 호출할 수 있는 특수 속성도 있다. 이러한 호출은 다음을 반환한다.

  ```ts
  function doSomething(f: Function) {
    return f(1, 2, 3);
  }
  ```

  - 위는 일반적으로 반환 타입이 안전하지 않기 때문에 피하는 것이 좋다.

  - 임의의 함수에 대해 호출 의도가 없다면 일반적으로 `() => void` 형식이 더 안전하다.

  🔗 **참고링크**

  - [Function](https://www.typescriptlang.org/docs/handbook/2/functions.html#function)

  - [The original intention of Function is to not be callable](https://github.com/Microsoft/TypeScript/issues/20007)

  ### 16. object vs Object

  - `object` 타입은 원시값이 아닌 모든 값을 나타낸다. `{}`와 `[]`를 할당할 수 있지만 원시값은 할당할 수 없다.

  ```ts
  let object: object;
  object = { prop: 0 };
  object = [];

  // object = 42; // Error
  // object = "string"; // Error
  // object = false; // Error
  // object = null; // Error
  // object = undefined; // Error
  ```

  - `Object` 타입은 모든 `Object`의 **기능**을 설명한다. null을 제외한 모든 형식을 할당할 수 있다.

    - 예를 들어 `Object` 타입에는 모든 `Object`에서 액세스할 수 있는 `toString()` 및 `valueOf()` 메서드가 있다.
    - `{}` : 빈 유형으로 속성이 없는 객체. 속성에 접근할 수 없다. 하지만 `Object` 메서드를 호출할 수 있다.

      ```ts
      let object: {};
      // let object: Object;

      object = { prop: 0 };
      object = [];
      object = 42;
      object = 'string';
      object = false;

      // object = null; // error
      // object = undefined; // error
      ```

  - 객체 내부 프로퍼티 타입

    - `"noImplicitAny": true`인 경우, `object`나 `{}`로 타입을 선언하고 내부 프로퍼티를 참조하고자 할 때 string 형태의 key 참조가 되지 않는 경우가 있다.
      객체 내부 프로퍼티 타입을 정확히 명시하거나, 아래 코드와 같이 명시해주면 해결된다.
    - `object`는 string 혹은 number만을 key 값으로 가질 수 있으며 더 유연한 형태로는 `Map()`을 사용할 수 있다.

      ```ts
      // string 타입의 key. 모든 타입의 value를 삽입 가능한 객체
      const obj1: { [key: string]: any } = {};
      obj1['name'] = 'hi';
      obj1[1] = 'hi';

      // 타입이 지정된 객체. 이외의 프로퍼티 삽입 불가능
      const obj2: { name: string; num: number } = { name: '', num: 0 };
      obj2['name'] = 'hi';
      // obj2["something"] = "hi"; // error

      // string 타입의 key, 모든 타입의 value를 삽입 가능. 기본적으로 명시된 속성은 초기화 되어야 한다.
      const obj3: { [key: string]: any; name: string } = {
        name: 'should_be_initialized',
      };
      // const obj4: { [key: string]: any; name: string } = {}; // error
      obj3['something'] = 'hi';
      ```

  🔗 **참고링크**

  - [TypeScript Object 다루기](https://muhly.tistory.com/139)

  - [TypeScript object Type](https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type/)

  ### 17. Counted Loop

  📚 관련 문제: 2257.MinusOne, 3243.FlattenDepth, 4182.Fibonacci

  ```ts
  type Statement<T> = any;

  type Iteration<
    T extends any[],
    Termination extends number = 1,
    Increment extends any[] = [],
  > = Termination extends Increment['length']
    ? T
    : Iteration<Statement<T>, Termination, [unknown, ...Increment]>;
  ```

  ### 18. Array and Tuple

  📚 관련 문제: 4484.IsTuple

  - `Array<T>`

    - `Array<number>` // `number[]`
    - `Array<string>` // `string[]`

    ```ts
    interface Array<Type> {
      /**
       * 배열의 길이를 가져오거나 설정합니다.
       */
      length: number;

      /**
       * 배열에서 마지막 요소를 제거하고 반환합니다.
       */
      pop(): Type | undefined;

      /**
       * 배열에 새 요소를 추가하고 배열의 새 길이를 반환합니다.
       */
      push(...items: Type[]): number;

      // ...
    }
    ```

  - `ReadonlyArray<T>`

    - `ReadonlyArray<Type>` // `readonly Type[]`

  - Tuple
    - `[string, number, ...]`
    - Array의 요소 수와 특정 위치의 타입을 정확히 알고 있는 타입
      - 요소 수를 초과할 수 없다.
      - 선택적 속성(?)이 가능하다.
      - 길이가 지정되지 않은 나머지 요소를 가질 수 있다.
      - 매개변수와 일치시킬 수 있다.
      ```ts
      function readButtonInput(...args: [string, number, ...boolean[]]) {
        const [name, version, ...input] = args;
        // ...
      }
      ```
  - Readonly Tuple
    - `readonly [string, number, ...]`
    - 튜플은 immutable함을 특징으로 하므로 readonly로 선언하는 것이 좋다.
    - `as const` 단언을 하는 경우 배열 리터럴이 readonly Tuple로 추론되는데, 이런 경우 변경할 수 없는 튜플이 된다.

  🔗 **참고링크**

  - [Array](https://www.typescriptlang.org/docs/handbook/2/objects.html#the-array-type)
  - [Tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

## Dates

### DAY 1 22.11.29

1.  Pick
2.  Readonly
3.  Tuple to Object

<details>
<summary>학습한 내용</summary>
    
#### List vs Array vs Tuple
1.  List

- mutable
- ordered
- can be changed or replaced
- more than one data type

2.  Array

- mutable
- ordered
- can be changed or replaced
- only similar data types

3.  Tuple

- immutable
- ordered
- cannot be changed or replaced
- more than one data type

#### `T[number]`

- 타입스크립트에서 Array는 index signature를 이용해 이런 식으로 선언되어 있다.

```ts
interface ArrayMaybe<Element> {
  [index: number]: Element;
}
```

1.  **인덱스 시그니처**는 특정 타입의 key나 특정 타입의 value를 가진 프로퍼티를 가리킨다.

2.  `T[___]` T의 프로퍼티를 추론한다. 즉, `T[___]`를 사용하면 인덱스 시그니처의 타입을 참조할 수 있다.

- Array에 대해서 `T[number]` 또는 `T['length']`를 사용할 수 있다. Array는 number타입의 index를 가지고 있으며, 'length'라는 속성을 가지고 있기 때문이다.

- 만약 `T[string]`을 사용한다면 참조할 자료타입은 다음 예시와 같을 것이다.

```ts
interface Dictionary<Value> {
  [key: string]: Value;
}
```

[참고링크](https://stackoverflow.com/questions/59187941/whats-the-tnumber-mean-in-typescript-code)

  </details>

### DAY 2 221130

1.  First of Array
2.  Length of Tuple
3.  Exclude

   <details>
   <summary>학습한 내용</summary>

#### Distributive conditional types

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

### DAY 3 221201

1.  Awaited
2.  If
3.  Concat

   <details>
   <summary>학습한 내용</summary>

#### PromiseLike

- ArrayLike 타입과 비슷하게, Promise와 유사한 프로퍼티(then: onfulfilled)를 가진 객체를 PromiseLike 타입으로 추론할 수 있다.

#### infer

- 아직 선언되지 않은 변수를 지정할 때 사용할 수 있는 키워드
- infer 키워드와 함께 선언되면 외부 식별자와의 관계가 끊어지고 오직 해당 문에서만 유지되는 변수를 생성한다.
- infer 키워드와 선언한 변수는 삼항 연산자, 즉 조건부 타입 맥락 안에서만 사용할 수 있고 '참'인 경우에 대한 타입을 추론한다.

   </details>

### DAY 4 221202

1.  Includes
2.  Push
3.  Unshift

   <details>
   <summary>학습한 내용</summary>

#### infer

infer 키워드를 사용해 재귀적인 타입 추론이 가능하다.

#### Spread Syntax

타입스크립트에서도 자바스크립트와 동일한 전개 구문을 사용할 수 있다.

#### readonly

as const로 단언된 값의 타입을 추론할 때는 반드시 readonly를 사용해야 한다.

#### Equal

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

### DAY 5 221205

1.  Parameters
2.  Get_Return_Type

   <details>
   <summary>학습한 내용</summary>

#### infer

- infer 키워드는 제네릭 `<>` 안에서 사용할 수 없으며 우변에서 조건부 맥락과 함께 사용해야 한다.
- </details>

### DAY 6 221206

1.  002.Omit
2.  008.Readonly2
3.  009.Deep Readonly

### DAY 7 221207

1.  010.Tuple to Union
2.  012.Chainable Options
3.  015.Last of Array

<details>
<summary>학습한 내용</summary>

#### TypeScript v.4.2

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

### DAY 8 221208

1.  062.Type Lookup
2.  020.Promise.all
3.  016.Pop

### DAY 9 221209

1.  106.Trim Left
2.  108.Trim
3.  110.Capitalize

   <details>
   <summary>학습한 내용</summary>

#### Template literal types

- [Template literal types](https://toss.tech/article/template-literal-types)

   </details>

  ### DAY 10 221212

  1.  116.Replace
  2.  119.ReplaceAll
  3.  191.Append Argument

  ### DAY 11 221213

  1.  296.Permutation
  2.  298.Length of String
  3.  459.Flatten

   <details>
   <summary>학습한 내용</summary>

#### Distributive Conditional Types

```ts
type P<T> = T extends never ? true : false;
type A1 = P<never>; //never
type A2 = P<any>; //boolean

type Q<T> = [T] extends [never] ? true : false;
type B1 = Q<never>; //true
type B2 = Q<any>; //false
```

   </details>

### DAY 12 221214

1.  527.Append to Object
2.  529.Absolute
3.  531.String to Union

   <details>
   <summary>학습한 내용</summary>

### PropertyKey Type

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

   </details>

### DAY 13 221215

1.  599.Merge
2.  612.KebabCase
3.  645.Diff

   <details>
   <summary>학습한 내용</summary>

#### Useful Generics

- Record<PropertyKey, unknown> : T의 프로퍼티 K로 구성
- Uncapitalize : 문자열 리터럴 타입의 첫 번째 문자를 소문자로 변환
- Lowercase : 문자열 리터럴 타입 전체를 소문자로 변환
- Omit : K 타입의 프로퍼티를 제외하고 T의 프로퍼티로 타입을 생성

   </details>

### DAY 14 221216

1.  949.AnyOf
2.  1042.IsNever
3.  1097.IsUnion

### DAY 15 221217

1.  1130.ReplaceKeys
2.  1367.Remove Index Signature
3.  1978.Percentage Parser

### DAY 16 221219

1.  2070.Drop Char
2.  2257.MinusOne
3.  2595.PickByType

### DAY 17 221220

1.  2688.StartsWith
2.  2693.EndsWith
3.  2757.PartialByKeys

### DAY 18 221221

1.  2759.RequiredByKeys
2.  2793.Mutable
3.  2852.OmitByType

   <details>
   <summary>학습한 내용</summary>

#### Mapping Modifiers

매핑된 타입은 읽기 전용 또는 ? 추가를 지원한다.
이것은 기본적으로 기본 타입의 수정자를 유지하는 동형 매핑 타입에서 중요하다.

TypeScript 2.8은 특정 수정자를 추가하거나 제거하기 위해 매핑된 타입에 대한 기능을 추가했다다.
특히 매핑된 타입의 속성 수정자에 readonly 또는 ?에 + 또는 -를 접두사로 추가하여 수정자를 추가하거나 제거해야 함을 나타낼 수 있다.

```ts
-readonly [P in keyof T]-?: T[P] }; // Remove readonly and ?
type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] }; // Add readonly and ?
```

   </details>

### DAY 19 230109

1.  2946.ObjectEntries
2.  3062.Shift
3.  3188.Tuple to Nested Object

### DAY 20 230111

1.  3192.Reverse
2.  3196.Flip Arguments
3.  3243.FlattenDepth

   <details>
   <summary>학습한 내용</summary>

#### `Function` vs `(...arg: any) => any`

- 전역 타입 `Function`은 JavaScript의 모든 함수 값에 존재하는 bind, call, apply 및 기타 속성과 같은 속성을 설명한다.
- `Function` 타입의 값을 항상 호출할 수 있는 특수 속성도 있다. 이러한 호출은 다음을 반환한다.

  ```ts
  function doSomething(f: Function) {
    return f(1, 2, 3);
  }
  ```

- 위는 일반적으로 반환 타입이 안전하지 않기 때문에 피하는 것이 좋다.
- 임의의 함수에 대해 호출 의도가 없다면 일반적으로 `() => void` 형식이 더 안전하다.

#### `object` vs `Object`

- `object` 타입은 원시값이 아닌 모든 값을 나타낸다. `{}`와 `[]`를 할당할 수 있지만 원시값은 할당할 수 없다.

  ```ts
  let object: object;
  object = { prop: 0 };
  object = [];

  // object = 42; // Error
  // object = "string"; // Error
  // object = false; // Error
  // object = null; // Error
  // object = undefined; // Error
  ```

- `Object` 타입은 모든 `Object`의 **기능**을 설명한다. null을 제외한 모든 형식을 할당할 수 있다.

  - 예를 들어 `Object` 타입에는 모든 `Object`에서 액세스할 수 있는 `toString()` 및 `valueOf()` 메서드가 있다.
  - `{}` : 빈 유형으로 속성이 없는 객체. 속성에 접근할 수 없다. 하지만 `Object` 메서드를 호출할 수 있다.

    ```ts
    let object: {};
    // let object: Object;

    object = { prop: 0 };
    object = [];
    object = 42;
    object = 'string';
    object = false;

    // object = null; // error
    // object = undefined; // error
    ```

- 객체 내부 프로퍼티 타입

  - `"noImplicitAny": true`인 경우, `object`나 `{}`로 타입을 선언하고 내부 프로퍼티를 참조하고자 할 때 string 형태의 key 참조가 되지 않는 경우가 있다.
    객체 내부 프로퍼티 타입을 정확히 명시하거나, 아래 코드와 같이 명시해주면 해결된다.
  - `object`는 string 혹은 number만을 key 값으로 가질 수 있으며 더 유연한 형태로는 `Map()`을 사용할 수 있다.

    ```ts
    // string 타입의 key. 모든 타입의 value를 삽입 가능한 객체
    const obj1: { [key: string]: any } = {};
    obj1['name'] = 'hi';
    obj1[1] = 'hi';

    // 타입이 지정된 객체. 이외의 프로퍼티 삽입 불가능
    const obj2: { name: string; num: number } = { name: '', num: 0 };
    obj2['name'] = 'hi';
    // obj2["something"] = "hi"; // error

    // string 타입의 key, 모든 타입의 value를 삽입 가능. 기본적으로 명시된 속성은 초기화 되어야 한다.
    const obj3: { [key: string]: any; name: string } = {
      name: 'should_be_initialized',
    };
    // const obj4: { [key: string]: any; name: string } = {}; // error
    obj3['something'] = 'hi';
    ```

#### Counted Loop

```ts
type Statement<T> = any;

type Iteration<
  T extends any[],
  Termination extends number = 1,
  Increment extends any[] = [],
> = Termination extends Increment['length']
  ? T
  : Iteration<Statement<T>, Termination, [unknown, ...Increment]>;
```

- 참고한 링크

  [Function](https://www.typescriptlang.org/docs/handbook/2/functions.html#function)

  [The original intention of Function is to not be callable](https://github.com/Microsoft/TypeScript/issues/20007)

  [TypeScript Object 다루기](https://muhly.tistory.com/139)

  [TypeScript object Type](https://www.typescripttutorial.net/typescript-tutorial/typescript-object-type/)

   </details>

### DAY 21 230113

1.  3326.BEM style string
2.  3376.InorderTraversal
3.  4179.Flip

   <details>
   <summary>학습한 내용</summary>
   
#### Distributive Conditional Types

Distributive Conditional Types 에서 대괄호`[]`는 분배를 막는다.

```ts
type DCT<Type> = Type extends any ? Type[] : never;
type Result1 = DCT<string | number>;
// => string[] | number[]

type NotDCT<Type> = [Type] extends [any] ? Type[] : never;
type Result2 = NotDCT<string | number>;
// => (string|number)[]
```

</details>

### DAY 22 230116

1.  4182.Fibonacci Sequence
2.  4260.AllCombinations
3.  4425.Greater Than

   <details>
   <summary>학습한 내용</summary>

#### 숫자를 다룰 때는 배열의 길이로(Counted Loop)

```ts
type GreaterThan<
  T extends number,
  U extends number,
  C extends any[] = [],
> = T extends C['length']
  ? false
  : U extends C['length']
  ? true
  : GreaterThan<T, U, [...C, '']>;
```

#### string -> union 쪼개기 및 Distributive Conditional Types

```ts
type StringToUnion<S extends string> = S extends `${infer A}${infer Rest}`
  ? A | StringToUnion<Rest>
  : '';

type Combinations<T extends string, U = T> = U extends T
  ? U | `${U}${Combinations<Exclude<T, U>>}`
  : never;

type AllCombinations<S extends string> = Combinations<StringToUnion<S>>;
```

</details>

### DAY 23 230118

1.  4471.Zip
2.  4484.IsTuple
3.  4499.Chunk

<details>
<summary>학습한 내용</summary>

1. `any[]`의 길이는 number로 평가된다.

```ts
type b = any[]['length'];
// ^? b = number 로 추론
```

2. Tuple은 readonly이다.
3. `never`는 모든 타입의 부분 집합이다.

```ts
type a = never extends any ? true : false;
// ^? a = true 로 추론
```

</details>

### DAY 24 230120

1.  4518.Fill
2.  4803.Trim Right
3.  5117.Without

### DAY 25 230125

1.  5140.Trunc
2.  5153.IndexOf
3.  5310.Join
