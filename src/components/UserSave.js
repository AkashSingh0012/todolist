import React, { useEffect } from 'react';

import "../App.css";


const UserSave = () => {

    const [tasks, setTasks] = React.useState([]);
    useEffect(()=>{
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (savedTasks){
            setTasks(savedTasks);
        }
    },[]);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);
    
      const addTask = (task) => {
        if (task.trim() === "") return;
        const newTask = { id: Date.now(), text: task };
        setTasks([...tasks, newTask]);
      };
    
      const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
      };
    
    return ( 

        <div className="todo-container">
          
         
          <input

            type="text"
            id="taskInput"
            placeholder="Enter a task..."
            onKeyDown={(e) => {
              if (e.key === "Enter") addTask(e.target.value);
            }}
          />
          <button onClick={() => addTask(document.getElementById("taskInput").value)} className="add-task-button">

            Add Task
          </button>
    
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.text}
                <button onClick={() => deleteTask(task.id)}>❌</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
export default UserSave;
