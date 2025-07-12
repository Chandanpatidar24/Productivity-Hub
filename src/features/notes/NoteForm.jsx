// src/features/notes/NoteForm.jsx
import React from "react";

const NoteForm = ({ noteInput, setNoteInput, onClose, onSubmit, isEditing }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          {isEditing ? "✏️ Edit Note" : "➕ Add Note"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={noteInput.title}
          onChange={(e) => setNoteInput({ ...noteInput, title: e.target.value })}
          className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md"
        />

        <textarea
          placeholder="Write your note..."
          value={noteInput.content}
          onChange={(e) => setNoteInput({ ...noteInput, content: e.target.value })}
          className="w-full h-28 mb-4 px-4 py-2 border border-gray-300 rounded-md resize-none"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            {isEditing ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
