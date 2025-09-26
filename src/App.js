import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text: text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
    setTaskToEdit(null);
  };
  
  const selectTaskToEdit = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task Manager</h1>
        <TaskForm 
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
        />
        <div className="task-list">
          {tasks.map(task => (
            <Task 
              key={task.id} 
              task={task} 
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              selectTaskToEdit={selectTaskToEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
