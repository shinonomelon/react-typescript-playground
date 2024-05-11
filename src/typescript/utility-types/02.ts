// コードジャンプして、Extractの型定義を確認する
// type Extract<T, U> = T extends U ? T : never;

// string型とnumber型の共通部分を抽出
export type Foo = Extract<string | number, number>; // number

// type Exclude<T, U> = T extends U ? never : T;
// string,number,booleanからstring,numberを除外
export type Bar = Exclude<string | number | boolean, string | number>; // boolean

// "hello" | 0 | booleanからstring,numberを除外
// "hello" はstringリテラルtypes
export type Bar2 = Exclude<"hello" | 0 | boolean, string | number>;

export type Baz = NonNullable<string | null | undefined | 0 | never>;

// Record<K, T>は、Kのプロパティを持つオブジェクトを作成し、そのプロパティの型をT型に設定します。
export type Qux1 = Record<"hoge" | "huga", number>;
export type Qux2 = {
  hoge: number;
  huga: number;
};

export const obj: Qux1 = {
  hoge: 1,
  huga: 2,
  // baz: 3, // エラー: 'baz'は型 'Qux' に存在しません
};

function hoge(a: string, b: number, c: "foo" | "bar") {
  return `${a} ${b} ${c}`;
}

// Parameters<T>は、関数のパラメータの型を取得します。
export type Hoge = Parameters<typeof hoge>;

// String Literal Types のUtility Types
export type Hoge2 = Uppercase<"hello">;
export type Hoge3 = Lowercase<"HeLlO">; // 全ての文字を小文字に変換
export type Hoge4 = Capitalize<"hello">; // 先頭の文字を大文字に変換
export type Hoge5 = Uncapitalize<"Hello">; // 先頭の文字を小文字に変換
