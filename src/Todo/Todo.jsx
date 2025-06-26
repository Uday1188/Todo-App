import React, { useState } from "react";
import "./Todo.css";
import TodoForm from "./TodoForm";
import Todolist from "./Todolist";
import TodoDateTime from "./TodoDateTime";

const Todo = () => {
  const todoKey = "MyTask";
  function getLocalData() {
    const taskList = localStorage.getItem(todoKey);
    return taskList ? JSON.parse(taskList) : [];
  }

  const [task, setTask] = useState(getLocalData);

  localStorage.setItem(todoKey, JSON.stringify(task));
  
  return (
    <div className="todo-app">
      <header className="app-header">
        <h1>Todo List</h1>
      </header>
      <TodoDateTime />

      <TodoForm task={task} setTask={setTask} />

      <Todolist task={task} setTask={setTask} />
    </div>
  );
};

export default Todo;
