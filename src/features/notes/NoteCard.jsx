// src/features/notes/NoteCard.jsx
import React from "react";

const NoteCard = ({ note, onDelete, onEditStart }) => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-400 rounded-md p-4 shadow-sm hover:shadow-md">
      <h3 className="text-lg font-bold text-gray-800 mb-1">{note.title}</h3>
      <p className="text-gray-700">{note.content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span>{note.createdAt}</span>
        <div className="flex gap-3">
          <button onClick={() => onEditStart(note)} className="text-blue-600">
            ✏️ Edit
          </button>
          <button onClick={() => onDelete(note.id)} className="text-red-600">
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
