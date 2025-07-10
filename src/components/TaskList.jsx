import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList({
  taskList,
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
    <div className="space-y-3">
      {(taskList || []).map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          editId={editId}
          editInput={editInput}
          setEditInput={setEditInput}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEditStart={onEditStart}
          onEditSave={onEditSave}
          onEditCancel={onEditCancel}
        />
      ))}
    </div>
  );
}
