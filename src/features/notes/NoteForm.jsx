// src/features/notes/NoteForm.jsx
import React from "react";

const NoteForm = ({ noteInput, setNoteInput, onClose, onSubmit, isEditing }) => {
  // Generate current formatted date & time
  const currentDateTime = new Date().toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    // Fullscreen semi-dark overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white rounded-md shadow-lg w-[90%] max-w-3xl h-[70vh] p-6 relative flex flex-col overflow-hidden">
        
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
        >
          ❌
        </button>

        {/* Modal Heading */}
        <h2 className="text-2xl font-bold mb-1 text-center">
          {isEditing ? "✏️ Edit Note" : "➕ Add Note"}
        </h2>

        {/* Date & Time display */}
        <p className="text-sm text-gray-500 text-center mb-4">
          {currentDateTime}
        </p>

        {/* Scrollable input section */}
        <div className="flex-1 overflow-y-auto space-y-4">
          
          {/* 📝 Title Input */}
          <input
            type="text"
            placeholder="Note Title"
            value={noteInput.title}
            onChange={(e) => setNoteInput({ ...noteInput, title: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-md text-lg focus:outline-none focus:ring focus:ring-yellow-300"
          />

          {/* 📄 Content Input */}
          <textarea
            placeholder="Start typing your note..."
            value={noteInput.content}
            onChange={(e) => setNoteInput({ ...noteInput, content: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-md resize-none min-h-[200px] focus:outline-none focus:ring focus:ring-yellow-300"
          />
        </div>

        {/* ✅ Buttons */}
        <div className="flex justify-end mt-4 gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            {isEditing ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
