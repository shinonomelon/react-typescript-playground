import React from "react";

import { useInputText } from "../hooks";
import { Button } from "./Button";
import { Todo } from "../types";

type FormProps = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

type Props = React.ComponentProps<"form"> & FormProps;

export function Form(props: Props) {
  const { inputText, handleChange, handleSubmit } = useInputText(
    props.setTodos
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type your todo:
        <input type="text" value={inputText} onChange={handleChange} />
      </label>
      <Button type="submit">
        <span>submit</span>
      </Button>
    </form>
  );
}
