// アロー関数ではジェネリクスはカッコの前に書く
export const foo = <T extends string | number>(arg: T) => {
  if (typeof arg === "string") {
    // type guard で型を絞り込む
    // string のメソッドが使える
    return { value: arg.toUpperCase() };
  }
  // stringを取り除いたので、number
  return { value: arg.toFixed() };
};

export const foo1 = foo<string>("hello"); // output: { value: "HELLO" }

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
getJapaneseUserName<JapanUser>(shota);
