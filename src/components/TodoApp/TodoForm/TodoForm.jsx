import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onAdd = todo => {
    addTodo(todo);
    setTitle("");
  };
  return (
    <div className="todo-form">
      <div>
        <input
          value={title}
          placeholder="Введите текст задачи"
          onChange={e => setTitle(e.target.value)}
          type="text"
        />
        <button
          disabled={!title}
          onClick={e => {
            onAdd({ title });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
