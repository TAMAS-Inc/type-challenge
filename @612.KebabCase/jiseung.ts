/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal
  
  ### Question
  
  Replace the `camelCase` or `PascalCase` string with `kebab-case`.
  
  `FooBarBaz` -> `foo-bar-baz`
  
  For example
  
  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">;
  const foobarbaz: FooBarBaz = "foo-bar-baz";
  
  type DoNothing = KebabCase<"do-nothing">;
  const doNothing: DoNothing = "do-nothing";
  ```
  
  > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Your Code Here _____________ */

// type KebabCase<S> = S extends `${infer A}${infer B}`
//   ? `${Lowercase<A>}${Uppercase<B>}` extends S
//     ? `${Lowercase<A>}-${KebabCase<B>}`
//     : `${Uppercase<A>}${B}` extends S
//     ? `${Lowercase<A>}${KebabCase<B>}`
//     : S
//   : S;

type KebabCase<S extends string> = S extends `${infer A}${infer B}`
  ? B extends Uncapitalize<B>
    ? `${Lowercase<A>}${KebabCase<B>}`
    : `${Lowercase<A>}-${KebabCase<B>}`
  : S;

// type KebabCase<S extends string> = S extends `${infer A}${infer B}`
//   ? B extends Uncapitalize<B>
//     ? `${Uncapitalize<A>}${KebabCase<B>}`
//     : `${Uncapitalize<A>}-${KebabCase<B>}`
//   : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
