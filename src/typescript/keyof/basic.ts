// keyof演算子

type User = {
  id: number;
  name: string;
  age: number;
  isAdmin: boolean;
};

export type UserKeys1 = keyof User; // "id" | "name" | "age" | "isAdmin"

// Userのプロパティのキーを取得
export const userKey: UserKeys1 = "age"; // OK

type MapLike = { [K in "x" | "y" | "z"]: string };
export type MapKeys = keyof MapLike;

//
// typeofと組み合わせる

const user = {
  id: 1,
  name: "hoge",
  age: 20,
  isAdmin: false,
};

export type UserKeys2 = keyof typeof user; // "id" | "name" | "age" | "isAdmin"
