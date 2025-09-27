import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editTask, taskToEdit, setTaskToEdit }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setText(taskToEdit.text);
    } else {
      setText('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (taskToEdit) {
      editTask(taskToEdit.id, text);
    } else {
      addTask(text);
    }
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={taskToEdit ? "Update task..." : "Add a new task..."} 
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
      {taskToEdit && <button type="button" onClick={() => { setTaskToEdit(null); setText(''); }}>Cancel</button>}
    </form>
  );
}

export default TaskForm;
