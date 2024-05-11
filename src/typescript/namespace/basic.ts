/* eslint-disable @typescript-eslint/no-namespace */
export type User = {
  name: string;
};

export namespace MyNamespace {
  export interface User {
    name: string;
    age: number;
  }
}

export namespace MyNamespace {
  export interface User {
    role: "admin" | "user";
  }
}

export type Foo = MyNamespace.User["role"];
