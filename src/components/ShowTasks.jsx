import React, { useState, useEffect } from "react";
import AddTasks from "./AddTasks";
import Task from "./Task";
import "./style.css";

const ShowTasks = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([]);

  // Updating number of Tasks here
  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  // Adding new Task here
  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  // Adding Done option here
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  // Removing tasks one by one
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };


  return (
    <div className="showTasks">
      <h1>To Do List</h1>
      <div className="header">Pending tasks ({tasksRemaining})</div>

      {/* ************When there is no task left ************* */}
      
      {tasksRemaining == 0 ? (
        <>
          <h1 id="nothing">Nothing to do </h1>
          <br />
          <p id="chill">Just have fun bro!</p>
        </>
      ) : (
        ``
      )}

      {/* **************************************** */}

      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}

      </div>
      <div className="create-task">
        <AddTasks addTask={addTask} />
      </div>
    </div>
  );
};

export default ShowTasks;
