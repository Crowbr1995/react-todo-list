import React, { useState } from "react";

export function Todo({ task, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task.task);
  
    const handleDelete = () => {
      deleteTodo(task.id);
    };
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      editTodo(task.id, newTask);
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      setIsEditing(false);
      setNewTask(task.task);
    };
  
    const handleChange = e => {
      setNewTask(e.target.value);
    };
  
    return (
      <div className="Todo">
        {isEditing ? (
          <>
            <input value={newTask} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <p>{task.task}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    );
  }