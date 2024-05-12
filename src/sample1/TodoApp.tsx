import React from "react";

import { Form } from "./components/Form";
import { Todo } from "./types";

export const TodoApp = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <Form setTodos={setTodos} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
