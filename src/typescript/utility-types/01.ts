// Utility Types

type User = {
  name: string;
  age: number | null;
  country?: "US" | "JP";
};

// Partial は全てのプロパティを省略可能にする
type PartialUser = Partial<User>;

export const partialUser: PartialUser = {
  name: "Taro",
};

// Required は全てのプロパティを必須にする
type RequiredUser = Required<User>;

export const requiredUser: RequiredUser = {
  name: "Taro",
  age: 20,
  country: "JP", // countryプロパティが必須になる
};

// Readonly は全てのプロパティをreadonlyにする
type ReadonlyUser = Readonly<User>;

export const readonlyUser: ReadonlyUser = {
  name: "Taro",
  age: 20,
  country: "JP",
};

// プロパティ'name'は読み取り専用で、書き換え用とするとエラーが発生する
// readonlyUser.name = "Jiro";  // エラー: Cannot assign to 'name' because it is a read-only property

// Pick は指定したプロパティのみを抽出する
type PickUser = Pick<User, "name" | "age">;

export const pickUser: PickUser = {
  name: "Taro",
  age: 20,
};

// Omit は指定したプロパティを除外する
type OmitUser = Omit<User, "name" | "age">;

// Omit<User, "name" | "age">はUser型からnameとageプロパティを除外する
export const omitUser: OmitUser = {
  country: "JP",
};
