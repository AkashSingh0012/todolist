import React, { useState } from "react";
import ToDo from "./Todo"; 

import "../App.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("medium"); 

  const addTask = () => {

    if (newTask.trim() !== "") {
      const task = {
        id: Date.now(),
        text: newTask,
        priority: priority,
        completed: false,
      };
      setTasks([...tasks, task]);
      setNewTask(""); 
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const sortTasks = () => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (a.priority === b.priority) {
        return a.text.localeCompare(b.text);
      }
      return a.priority.localeCompare(b.priority);
    });
    setTasks(sortedTasks);
  };

  return ( 

    <div className="todo-container">
      <div className="input-section styled-input">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
        {}

      </div>
      <ul className="task-list styled-task-list">

        {tasks.map((task) => (
        <ToDo 

            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
