import React, { useState } from "react";
import "./TodoList.css";

const TodoList = ({ todos, deleteTodo }) => {
  return todos.map(({ title }, i) => (
    <div className="todo-item" key={i}>
      {title}{" "}
      <a className="delete-action-link" onClick={() => deleteTodo(title)}>
        x
      </a>
    </div>
  ));
};

export default TodoList;
