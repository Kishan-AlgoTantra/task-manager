import React from 'react';

function Task({ task, deleteTask, toggleComplete, selectTaskToEdit }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <div className="task-buttons">
        <button className="edit-btn" onClick={() => selectTaskToEdit(task)}>Edit</button>
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
