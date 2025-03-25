import React from "react";
import "../App.css"
function ToDo({ task, toggleComplete, deleteTask }) {
  return (
    <li className={`task-item ${task.priority}`}>
      <span
        onClick={() => toggleComplete(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>🗑</button>
    </li>
  );
}

export default ToDo;
