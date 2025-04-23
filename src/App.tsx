import React, { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField/InputField";
import { TodoList } from "./components/TodoList/TodoList";
import { Todo } from "./typescript-helper-files/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    } else {
      alert("enter a todo");
    }
  };

  return (
    <div className="App">
      <div className="header">TASKIFY</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
