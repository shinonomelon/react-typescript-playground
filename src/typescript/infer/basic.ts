// infer は条件型の中で使われる
// infer は型変数を使って、型を抽出する

type UserA = {
  name: string;
  role: "admin" | "user"; // ここの型を抽出してます。
};

type UserB = {
  name: string;
  age: number;
};

type A<T> = T extends { role: infer U } ? U : null;

export type B = A<UserA>; // "admin" | "user" →抽出できた
export type C = A<UserB>; // null

type ReturnType<T> = T extends () => infer R ? R : never;

const foo = () => "foo";
const bar = () => 1;

export type Foo = ReturnType<typeof foo>; // string
export type Bar = ReturnType<typeof bar>; // number

//
// infer は条件型の中で使われる
export const hoge = (a: string | number): string => {
  if (typeof a === "number") {
    return a.toString();
  }
  return a;
};
type HogeReturn<T> = T extends (id: infer U) => string ? U : never;
export type Hoge = HogeReturn<typeof hoge>; // string
