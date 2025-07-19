

import React, { useState } from "react";
import TaskForm from "../features/tasks/TaskForm";
import TaskList from "../features/tasks/TaskList";

// Main Task Page
export default function Task() {
  // Input values for task creation
  const [taskInput, setTaskInput] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskDay, setTaskDay] = useState("Today");

  // Task list state
  const [taskList, setTaskList] = useState([]);

  //Add Lable/Priority 
  const[taskLabel, setTaskLabel] = useState("");
  const[taskPriority, setTaskPriority] = useState("");

  // Modal controls
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // true when editing
  const [editId, setEditId] = useState(null);        // task id being edited

  // Filters
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [showPendingOnly, setShowPendingOnly] = useState(false);

  // ✅ Add new task
  const handleAddTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      desc: taskDesc.trim(),
      time: taskTime,
      day: taskDay,
      label: taskLabel,
      Priority: taskPriority,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    resetForm();
  };

  // ✏️ Start editing a task
  const handleEditStart = (task) => {
    setTaskInput(task.text);
    setTaskDesc(task.desc);
    setTaskTime(task.time);
    setTaskDay(task.day);
    setEditId(task.id);
    setIsEditing(true);
    setShowModal(true);
    setTaskLabel(task.label || "");
    setTaskPriority(task.Priority || "");
  };

  // 💾 Save the edited task
  const handleEditSave = () => {
    const updatedTasks = taskList.map((task) =>
      task.id === editId
        ? {
          ...task,
          text: taskInput.trim(),
          desc: taskDesc.trim(),
          time: taskTime,
          day: taskDay,
          label: taskLabel,
          Priority: taskPriority,
        }
        : task
    );

    setTaskList(updatedTasks);
    resetForm();
  };

  // ❌ Reset form & modal
  const resetForm = () => {
    setTaskInput("");
    setTaskDesc("");
    setTaskTime("");
    setTaskDay("Today");
    setEditId(null);
    setIsEditing(false);
    setShowModal(false);
    setTaskLabel("");
    setTaskPriority("");
  };

  // ✅ Toggle completion
  const handleToggleComplete = (id) => {
    const updated = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updated);
  };

  // 🗑 Delete a task
  const handleDeleteTask = (id) => {
    const filtered = taskList.filter((task) => task.id !== id);
    setTaskList(filtered);
  };

  // 📌 Filter task list
  let filteredTasks = taskList;
  if (showCompletedOnly) {
    filteredTasks = taskList.filter((task) => task.completed);
  } else if (showPendingOnly) {
    filteredTasks = taskList.filter((task) => !task.completed);
  }

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#2c2c2c] p-6">
      {/* 🧾 Page title */}
      <h2 className="text-4xl text-center py-2 rounded-xl font-bold mb-6 bg-purple-100 shadow-sm">
        📁 Your Tasks
      </h2>

      {/* 🔘 Filter buttons */}
<div className="flex justify-between items-center flex-wrap gap-4 mb-6">
  {/* Left Side: Add Task & Show All */}
  <div className="flex gap-3 items-center">
    {/* Add Task */}
    <button
      onClick={() => {
        resetForm();
        setShowModal(true);
      }}
      className="bg-black text-white px-4 py-2 rounded shadow hover:bg-gray-800"
    >
      ➕ Add Task
    </button>


    {/* Show All */}
    <button
      onClick={() => {
        setShowPendingOnly(false);
        setShowCompletedOnly(false);
      }}
      className={`px-4 py-2 rounded shadow ${!showPendingOnly && !showCompletedOnly
        ? "bg-green-600 text-white"
        : "bg-green-100 text-green-900"
        }`}
    >
      📋 Show All
    </button>
  </div>

  {/* Right Side: Show Done & Show Pending */}
  <div className="flex gap-3 items-center">
    {/* Show Done */}
    <button
      onClick={() => {
        setShowCompletedOnly(true);
        setShowPendingOnly(false);
      }}
      className={`px-4 py-2 rounded shadow ${showCompletedOnly
        ? "bg-black text-white"
        : "bg-white text-black"
        }`}
    >
      ✅ Show Done
    </button>

    {/* Show Pending */}
    <button
      onClick={() => {
        setShowPendingOnly(true);
        setShowCompletedOnly(false);
      }}
      className={`px-4 py-2 rounded shadow ${showPendingOnly
        ? "bg-yellow-500 text-white"
        : "bg-yellow-100 text-yellow-900"
        }`}
    >
      🕓 Show Pending
    </button>
  </div>
 
      </div>

      {/* 🧾 Task form modal */}
      {showModal && (
        <TaskForm
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          taskDesc={taskDesc}
          setTaskDesc={setTaskDesc}
          taskTime={taskTime}
          setTaskTime={setTaskTime}
          taskDay={taskDay}
          setTaskDay={setTaskDay}
          onAddTask={handleAddTask}
          onEditTask={handleEditSave}
          isEditing={isEditing}
          setShowModal={setShowModal}
          taskLabel={taskLabel}
          setTaskLabel={setTaskLabel}
          taskPriority={taskPriority}
          setTaskPriority={setTaskPriority}
        />
      )}

      {/* 📋 Task list display */}
      <TaskList
        taskList={filteredTasks}
        onEditStart={handleEditStart}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}
