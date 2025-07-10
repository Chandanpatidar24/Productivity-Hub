// src/features/tasks/TaskService.js

export const loadTasks = () => {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
