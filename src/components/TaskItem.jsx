
import React from "react";

// 🧾 Single task item card
export default function TaskItem({
  task,
  onEditStart,
  onToggleComplete,
  onDelete,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex justify-between items-start hover:shadow-lg transition-all duration-300">
      <div className="flex gap-3 w-full">
        {/* ✅ Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="mt-1 w-5 h-5"
        />

        {/* 🧠 Task Info */}
        <div className="flex-1">
          <h4
            className={`text-lg font-semibold ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.text}
          </h4>
          <div className="text-sm text-gray-600 flex gap-4">
            <span>{task.day}</span>
            <span>{task.time}</span>
          </div>
          {task.desc && (
            <p className="mt-1 text-sm italic text-gray-700">{task.desc}</p>
          )}
        </div>
      </div>

      {/* ✏️ Edit/Delete */}
      <div className="flex flex-col gap-2 ml-4">
        <button
          onClick={() => onEditStart(task)}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-600 hover:text-red-800 text-sm"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
