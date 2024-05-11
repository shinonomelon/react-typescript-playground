type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

export const todo2: MyReadonly<Todo> = {
  title: "Clean room",
  description: "description",
  completed: false,
};
