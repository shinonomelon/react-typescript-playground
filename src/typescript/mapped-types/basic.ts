// Mapped Types
// Mapped Typesは、オブジェクトのプロパティを変換するための型です。

export type CountryCode = "JP" | "US" | "CN";

export type CountryNames = {
  [key in CountryCode]: string;
};

export const countryNames: CountryNames = {
  JP: "Japan",
  US: "United States",
  CN: "China",
};

export type Obj<K extends string | number, T> = {
  [P in K]: T;
};

export const obj1: Obj<"name" | "age", string> = {
  name: "Taro",
  age: "20",
};

type Foo = {
  id: number;
  name: string;
};

// FlagsはFooのプロパティを全てOptionalにする
export type Flags = { [K in keyof Foo]?: Foo[K] };

// Utility TypesのPartialを作る
export type Partial<T> = {
  [K in keyof T]?: T[K];
};

export type PartialFoo = Partial<Foo>;
