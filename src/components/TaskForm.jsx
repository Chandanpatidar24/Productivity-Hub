
import React from "react";

export default function TaskForm({
  taskInput,
  setTaskInput,
  taskDesc,
  setTaskDesc,
  taskTime,
  setTaskTime,
  taskDay,
  setTaskDay,
  onAddTask,
  onEditTask,
  isEditing,
  setShowModal,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      {/* Modal Content */}
      <div className="bg-white w-[90%] max-w-lg p-6 rounded-lg shadow-lg relative">

        {/* ❌ Close Button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✖
        </button>

        {/* 📋 Modal Title */}
        <h3 className="text-2xl font-semibold text-center mb-4">
          {isEditing ? "✏️ Edit Task" : "📝 Add New Task"}
        </h3>

        {/* 🧾 Input: Task Title */}
        <input
          type="text"
          placeholder="Task title..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />

        {/* 🕓 Time & Day */}
        <div className="flex gap-3 mb-3 flex-col sm:flex-row">
          <input
            type="time"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <select
            value={taskDay}
            onChange={(e) => setTaskDay(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
            <option value="This Week">This Week</option>
            <option value="Later">Later</option>
          </select>
        </div>

        {/* 📄 Description */}
        <textarea
          rows="3"
          placeholder="Task description..."
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        ></textarea>

        {/* ✅ Add / Save Button */}
        <button
          onClick={isEditing ? onEditTask : onAddTask}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          {isEditing ? "💾 Save Changes" : "➕ Add Task"}
        </button>
      </div>
    </div>
  );
}
