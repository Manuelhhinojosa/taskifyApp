import React, { useRef } from "react";
import "./InputField.css";
import { inputFieldProps } from "../../typescript-helper-files/model";

export const InputField: React.FC<inputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}: inputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className="inputBox"
        type="input"
        placeholder="Enter a task "
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className="inputButton" type="submit">
        Add task
      </button>
    </form>
  );
};
