import { PartialDeep } from "type-fest";

type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer R>
    ? Array<NestedPartial<R>>
    : NestedPartial<T[K]>;
};

type Foo = {
  foo: string;
  bar: string;
  baz: {
    hoge: string;
    piyo: string;
    fuga: number;
  };
};

type optionalFoo = NestedPartial<Foo>;

const optionalFoo: optionalFoo = {
  foo: "foo",
  baz: {},
};

type NestedOptionalFoo = PartialDeep<Foo>;
