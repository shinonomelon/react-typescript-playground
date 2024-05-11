// ここに思いついたり、試したいコードを書いていく

////////////////////////////////////////
import { CamelCase } from "type-fest";

// ある型のプロパティのキーを取得し、そのキーを使って型を作成する方法
type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; error: Error };

// Utility Type の Pick を使って、status プロパティのみを抽出
export type Status = Pick<RequestState, "status">;
// export type Status = RequestState["status"];  // これでもOK

//
export const someVariable: CamelCase<"foo_bar"> = "fooBar";
export const someVariable2: CamelCase<"foo-bar"> = "fooBar";

////////////////////////////////////////

////////////////////////////////////////
// null と undefined

export const foo: null = null;
export const bar: undefined = undefined;

////////////////////////////////////////
