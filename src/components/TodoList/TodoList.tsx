import React from "react";
import "./TodoList.css";
import { todoListProps } from "../../typescript-helper-files/model";
import { SingleTodo } from "../SingleTodo/SingleTodo";

export const TodoList: React.FC<todoListProps> = ({
  todos,
  setTodos,
}: todoListProps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};
