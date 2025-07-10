import React from 'react';

export default function TaskForm({
  taskInput,
  setTaskInput,
  taskDay,
  setTaskDay,
  taskTime,
  setTaskTime,
  onAddTask,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
      {/* Task Input */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a Task..."
        className="w-full px-4 py-2 rounded-xl border-2 border-gray-200"
      />

      {/* Time Input */}
      <input
        type="text"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
        placeholder="Time (e.g. 4:00 PM)"
        className="px-3 py-2 rounded-lg border border-gray-300"
      />

      {/* Day Dropdown */}
      <select
        value={taskDay}
        onChange={(e) => setTaskDay(e.target.value)}
        className="px-3 py-2 rounded-lg border border-gray-300"
      >
        <option value="Today">Today</option>
        <option value="Tomorrow">Tomorrow</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>

      {/* Add Button */}
      <button
        onClick={onAddTask}
        className="bg-[#2c2c2c] text-white px-4 py-2 rounded-md hover:bg-[#3a3a3a] transition-colors"
      >
        Add Task
      </button>
    </div>
  );
}
