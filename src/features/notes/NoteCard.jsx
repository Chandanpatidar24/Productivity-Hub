// src/features/notes/NoteCard.jsx
import React from "react";

const NoteCard = ({ note, onDelete, onEditStart, onView, onTogglePin }) => {
  return (
    // Whole card clickable for viewing
    <div
      onClick={() => onView(note)}
      className="bg-yellow-100 border-l-4 border-yellow-400 rounded-md p-4 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200"
    >
      {/* 📌 Pinned Badge */}
      {note.pinned && (
        <div className="text-xs text-yellow-700 font-semibold mb-1">
          📌 Pinned
        </div>
      )}

      {/* 📝 Title */}
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        {note.title}
      </h3>

      {/* 📄 Preview of content (truncate to 3 lines) */}
      <p className="text-gray-700 line-clamp-3">
        {note.content}
      </p>

      {/* 📅 Footer Section */}
      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span>{note.createdAt}</span>

        {/* ✏️ Edit / 🗑 Delete / 📌 Pin */}
        <div
          className="flex gap-3"
          onClick={(e) => e.stopPropagation()} // ⛔ Prevent click from opening modal
        >
          {/* Edit */}
          <button
            onClick={() => onEditStart(note)}
            className="text-blue-600 hover:underline"
          >
            ✏️ Edit
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(note.id)}
            className="text-red-600 hover:underline"
          >
            🗑 Delete
          </button>

          {/* Pin/Unpin */}
          <button
            onClick={() => onTogglePin(note.id)}
            className="text-yellow-600 hover:underline"
          >
            {note.pinned ? "Unpin" : "Pin"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
