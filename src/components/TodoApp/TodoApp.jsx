import React, { useState } from "react";
import "./TodoApp.css";
import TodoForm from "./TodoForm/TodoForm.jsx";
import TodoList from "./TodoList/TodoList.jsx";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { title: "Пройти Grasshoper" },
    { title: "Учить JS в W3Schools" }
  ]);

  const addTodo = todo => setTodos([...todos, todo]);
  const deleteTodo = todoTitle =>
    setTodos(todos.filter(todo => todo.title != todoTitle));

  return (
    <div className="todo-app">
      <TodoForm addTodo={addTodo} />
      <br />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
