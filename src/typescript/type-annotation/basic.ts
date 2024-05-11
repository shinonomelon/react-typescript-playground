// type アノーテーションの基本
export let level: number = 15;

level = 10;
// level = "hello"; // 型 'string' を型 'number' に割り当てることはできません。

export const apple: { nickName: string; isHuman: boolean; level: number } = {
  nickName: "りんご",
  isHuman: true,
  level: 0,
};
