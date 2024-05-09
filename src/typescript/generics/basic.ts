// Genericsジェネリクスは、型を後から指定できる仕組みです。
// 汎用的な型を作成する際に使用します。
// ジェネリクスの型パラメータは、T,U,Kなど任意の文字列を使用できます。

type A<T> = T;

export const a: A<string> = "string";
export const b: A<number> = 42;
