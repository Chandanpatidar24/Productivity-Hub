import React from 'react';

export default function TaskItem({
  task,
  editId,
  editInput,
  setEditInput,
  onToggleComplete,
  onDelete,
  onEditStart,
  onEditSave,
  onEditCancel,
}) {
  return (
    <div className="bg-gray-100 px-4 py-3 rounded-xl shadow-md border flex items-center justify-between hover:bg-black hover:text-white">
      {/* Left side: Checkbox + Task text */}
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="w-5 h-5"
        />

        {editId === task.id ? (
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            className="w-full px-2 py-1 rounded border border-gray-300 text-black"
          />
        ) : (
          <span
            className={`flex-1 ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.text} • {task.time} • {task.day}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 ml-3">
        {editId === task.id ? (
          <>
            <button
              onClick={onEditSave}
              className="text-green-600 hover:text-green-800"
            >
              ✅
            </button>
            <button
              onClick={onEditCancel}
              className="text-yellow-500 hover:text-yellow-700"
            >
              ❌
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onEditStart(task)}
              className="text-blue-600 hover:text-blue-800"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="text-red-600 hover:text-red-800"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
}
