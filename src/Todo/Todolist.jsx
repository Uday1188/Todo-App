import React from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";

const Todolist = ({ task, setTask }) => {
  const handledeleteTask = (indexToDelete) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmDelete) return;

    const upDatedTask = task.filter((_, index) => index !== indexToDelete);
    setTask(upDatedTask);
  };

  const handleClear = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all tasks?"
    );
    if (!confirmClear) return;

    setTask([]);
  };

  return (
    <>
      <section>
        <ul className="task-list">
          {task.length === 0 ? (
            <p className="empty-state">No tasks yet. Add one above!</p>
          ) : (
            task.map((curtItem, index) => (
              <li key={index}>
                <span className="task-text">{curtItem}</span>
                <div className="task-actions">
                  <MdCheck size={26} className="complete-button" />
                  <MdDeleteForever
                    size={26}
                    className="delete-button"
                    style={{ marginLeft: 50 }}
                    onClick={() => handledeleteTask(index)}
                  />
                </div>
              </li>
            ))
          )}
        </ul>
      </section>

      <section className="Clear">
        <button className="btn btn-danger" onClick={handleClear}>
          Clear-All
        </button>
      </section>
    </>
  );
};

export default Todolist;
