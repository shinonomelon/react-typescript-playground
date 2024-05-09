// あとでcountryの型を指定することができる
// また、extendsを使って、指定した型のみを受け付けるようにすることができる

export type User<T extends string> = {
  name: string;
  country: T;
};

type JapanUser = User<"東京" | "大阪">;
type USUser = User<"NY" | "LA">;

export const shota: JapanUser = { name: "shota", country: "東京" };
export const john: USUser = { name: "john", country: "NY" };

export function getJapaneseUserName<T extends JapanUser>(arg: T): string {
  return arg.name;
}

// 日本人の名前を取得する関数
getJapaneseUserName(shota); // output: shota
