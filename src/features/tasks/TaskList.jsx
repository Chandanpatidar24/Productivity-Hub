
import React from "react";
import TaskItem from "./TaskItem";

// 📋 List container that maps over all tasks
export default function TaskList({
  taskList,
  onEditStart,
  onToggleComplete,
  onDelete,
}) {
  return (
    <div className="space-y-4">
      {taskList.length === 0 ? (
        <p className="text-center text-gray-500">No tasks to show.</p>
      ) : (
        taskList.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEditStart={onEditStart}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
