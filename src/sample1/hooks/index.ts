import React from "react";
import { Todo } from "../types";

export const useInputText = (
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {
  const [inputText, setInputText] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!inputText.trim()) {
      return;
    }

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: inputText },
    ]);

    setInputText("");
  };

  return { inputText, handleChange, handleSubmit };
};
