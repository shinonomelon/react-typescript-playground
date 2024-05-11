// https://zenn.dev/luvmini511/articles/6c6f69481c2d17
// を読んで、Type Alias と Interface の違いを理解する

// Type Alias と Interface の違い

// 1. 宣言と代入

// interfaceは型の宣言ですので、型に名前をつけることができます。
export interface Book1 {
  title: string;
  pages: number;
}

// typeはどちらかというと無名で作られた型に参照のため別名をを与えるということをやってます。
export type Book2 = {
  title: string;
  pages: number;
};

//

// 2. 宣言できる型の種類

// interfaceではオブジェクトとクラスの型だけ定義できますが、typeでは他の型も参照できます。
interface Member {
  nickName: string;
  isHuman: boolean;
  level: number;
}

const apple: Member = {
  nickName: "りんご",
  isHuman: true,
  level: 0,
};

apple.isHuman = false; //Type 'string' is not assignable to type 'boolean'

type Color = "白" | "黒" | "赤" | "緑";

let color: Color = "白";
color = "青"; //Type '"青"' is not assignable to type 'Color'.

//

// 3. 型の拡張

// interfaceは拡張ができる
interface Foo {
  name: string;
}

interface Foo {
  level: number;
}

export const obj: Foo = {
  name: "apple",
  level: 0,
};

// あとで、新しいプロパティ level を追加しているので、levelがないとエラーになる
// export const obj2: Foo = {
//   name: "banana",
// }; //プロパティ 'level' は型 '{ name: string; }' にありませんが、型 'Foo' では必須です。

// typeは intersection types で拡張できる

type ErrorHandling = {
  success: boolean;
  error?: { message: string };
};

type ArtistsData = {
  artists: { name: string }[];
};

type ArtistsResponse = ArtistsData & ErrorHandling;

export const dummyData: ArtistsResponse = {
  artists: [{ name: "apple" }, { name: "banana" }],
  success: true,
};
