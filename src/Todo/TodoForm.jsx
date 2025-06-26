import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const TodoForm = ({ task, setTask }) => {
  const [inputValue, setinputValue] = useState("");

  function handleInputChange(value) {
    setinputValue(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!inputValue) return;
   
    if (task.includes(inputValue)) {
      alert("Already Present");
      setinputValue("");
      return;
    }
    setTask([...task, inputValue]);
    setinputValue("");
  }

  return (
    <section>
      <form onSubmit={handleFormSubmit} className="task-form">
        <input
          type="text"
          placeholder="Enter A Task"
          value={inputValue}
          className="task-input"
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <button type="submit" className="add-button">
          <MdAdd /> Add Task
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
