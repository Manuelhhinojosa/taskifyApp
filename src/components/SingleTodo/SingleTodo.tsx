import React from "react";
import "./SingleTodo.css";
import { SingleTodoProps } from "../../typescript-helper-files/model";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState, useRef, useEffect } from "react";

export const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodoText, setEditTodoText] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((t) => (t.id === id ? { ...todo, todo: editTodoText } : t))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="editInput"
          value={editTodoText}
          onChange={(e) => setEditTodoText(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todoText">{todo.todo}</s>
      ) : (
        <div className="todoText">{todo.todo}</div>
      )}

      <div className="iconsContainer">
        {todo.isDone ? (
          ""
        ) : (
          <span
            className="icons"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          >
            <AiOutlineEdit />
          </span>
        )}

        <span className="icons" onClick={() => handleDelete(todo.id)}>
          <AiOutlineDelete />
        </span>
        <span className="icons" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};
