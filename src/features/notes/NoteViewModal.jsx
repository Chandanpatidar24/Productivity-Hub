// src/features/notes/NoteViewModal.jsx
import React from "react";

const NoteViewModal = ({ note, onClose, onEditStart }) => {
  if (!note) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-md shadow-lg w-[90%] max-w-3xl h-[75vh] p-6 relative flex flex-col overflow-hidden">
        
        {/* ❌ Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
        >
          ❌
        </button>

        {/* 📝 Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {note.title}
        </h2>

        {/* 📅 Created At */}
        <p className="text-sm text-gray-500 mb-3">
          {note.createdAt}
        </p>

        {/* 📃 Full content area with scroll if long */}
        <div className="flex-1 overflow-y-auto border rounded bg-gray-50 p-4 text-gray-800 whitespace-pre-wrap">
          {note.content}
        </div>
        

        {/* ✏️ Edit Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              onEditStart(note);
              onClose(); // close view modal after switching to edit
            }}
            className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            ✏️ Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteViewModal;
