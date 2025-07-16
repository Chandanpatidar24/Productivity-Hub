
import React from "react";

// 🧾 Single task item card
export default function TaskItem({
  task,
  onEditStart,
  onToggleComplete,
  onDelete,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex hover:shadow-lg transition-all duration-300">
      {/* ✅ Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className="mt-1 w-5 h-5 mr-4"
      />

      {/* 🧠 Task Info */}
      <div className="flex-1 text-left">
        <div className="flex justify-between items-start">
          <h4
            className={`text-lg font-semibold ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
          </h4>

          {/* ✏️ Edit/Delete */}
          <div className="flex gap-2 ml-4">
            <button
              onClick={() => onEditStart(task)}
              className="text-blue-600 hover:text-blue-800 text-sm"
              title="Edit"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-600 hover:text-red-800 text-sm"
              title="Delete"
            >
              🗑️
            </button>
          </div>
        </div>

        {/* 🕓 Day & Time */}
        <div className="text-sm text-gray-600 flex gap-4 mt-1">
          <span>{task.day}</span>
          <span>{task.time}</span>
        </div>

        {/* 📄 Description */}
        {task.desc && (
          <p className="mt-1 text-sm italic text-gray-700">{task.desc}</p>
        )}

        {/* 🏷 Label & Priority */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {task.label && (
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {task.label}
            </span>
          )}
          {task.priority && (
            <span
              className={`text-xs px-2 py-1 rounded font-medium ${
                task.priority === "High"
                  ? "bg-red-100 text-red-800"
                  : task.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {task.priority}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
