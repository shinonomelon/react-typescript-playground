// Conditional Types
// 条件付き型

type A<T> = T extends string ? string : number;

export type Foo = A<string>; // string
export type Bar = A<number>; // number

type User = {
  id: string;
  name: string;
  age: number;
  isAdmin: boolean;
};

// T extends U ? X : Y
type FilterString<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type UserStringKeys = FilterString<User>;

type FilterNumber<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export type UserNumberKeys = FilterNumber<User>;

type FilterType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// 第二引数で指定した型のプロパティのみを取得
export type StringKeys2 = FilterType<User, string>;

// Userの各プロパティの型を文字列に変換
export type StringifiedUser = {
  // Mappped Types
  [K in keyof User]: string;
};
