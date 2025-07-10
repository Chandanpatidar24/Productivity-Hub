import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

export default function Task() {
  // Task input
  const [taskInput, setTaskInput] = useState('');

  // All task objects
  const [taskList, setTaskList] = useState([]);

  // Edit task state
  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState('');

  // Time and Day for task
  const [taskDay, setTaskDay] = useState('Today');
  const [taskTime, setTaskTime] = useState('');

  // ➕ Add new task
  const handleAddTask = () => {
    if (taskInput.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
      day: taskDay,
      time: taskTime,
    };

    setTaskList([...taskList, newTask]);
    setTaskInput('');
    setTaskTime('');
  };

  // ✅ Toggle task completion
  const handleToggleComplete = (id) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  // 🗑 Delete a task
  const handleDeleteTask = (id) => {
    const filteredTasks = taskList.filter((task) => task.id !== id);
    setTaskList(filteredTasks);
  };

  // ✏️ Start editing
  const handleEditStart = (task) => {
    setEditId(task.id);
    setEditInput(task.text);
  };

  // 💾 Save edited task
  const handleEditSave = () => {
    const updated = taskList.map((task) =>
      task.id === editId ? { ...task, text: editInput.trim() } : task
    );
    setTaskList(updated);
    setEditId(null);
    setEditInput('');
  };

  // ❌ Cancel editing
  const handleEditCancel = () => {
    setEditId(null);
    setEditInput('');
  };

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#2c2c2c] p-6">
      <h2 className="text-4xl text-center py-2 rounded-xl font-bold mb-4 bg-violet-200">
        🗂️ Your Tasks
      </h2>

      {/* Input Form */}
      <TaskForm
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        taskDay={taskDay}
        setTaskDay={setTaskDay}
        taskTime={taskTime}
        setTaskTime={setTaskTime}
        onAddTask={handleAddTask}
      />

      {/* Task List */}
      <TaskList
        taskList={taskList}
        editId={editId}
        editInput={editInput}
        setEditInput={setEditInput}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
        onEditStart={handleEditStart}
        onEditSave={handleEditSave}
        onEditCancel={handleEditCancel}
      />
    </div>
  );
}
