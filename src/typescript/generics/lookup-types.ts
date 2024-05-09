// Lookup Types
// オブジェクトのキーを指定して値を取得する方法

const user1 = {
  id: "1",
  name: "John",
  email: "john@sample.com",
};

// typeof演算子を使ってオブジェクトの型を取得
export type User = typeof user1;
// equals to
// type User = {
//   id: string;
//   name: string;
// }

export type UserKey = keyof User;
// equals to
// export type UserKey = keyof typeof user1;

// オブジェクトのキーを指定して値を取得する関数
// 第一引数のオブジェクトのキーを第二引数で指定して値を取得する
export const getUserProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

export const user = getUserProperty(user1, "id"); // output: "1"

// オブジェクトのキーを指定して値を設定する関数
export const setProperty = <T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
) => {
  obj[key] = value;
};

// オブジェクトuser1のnameプロパティを"Mike"に変更
setProperty(user1, "name", "Mike");
