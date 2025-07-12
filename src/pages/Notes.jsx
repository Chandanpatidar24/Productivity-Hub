// src/pages/Notes.jsx
import React, { useState } from "react";
import NoteForm from "../features/notes/NoteForm";
import NoteCard from "../features/notes/NoteCard";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [noteInput, setNoteInput] = useState({
    title: "",
    content: "",
  });

  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    const { title, content } = noteInput;
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleDateString(),
    };

    setNotes([newNote, ...notes]);
    setNoteInput({ title: "", content: "" });
    setShowModal(false);
  };

  const handleEditStart = (note) => {
    setEditId(note.id);
    setNoteInput({ title: note.title, content: note.content });
    setShowModal(true);
  };

  const handleEditSave = () => {
    setNotes(
      notes.map((note) =>
        note.id === editId
          ? { ...note, ...noteInput }
          : note
      )
    );
    setEditId(null);
    setNoteInput({ title: "", content: "" });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 px-4 py-6">

  {/* Centered Heading */}
  <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">
    📝 My Notes
  </h1>

  {/* Add Note Button aligned left and slightly lower */}
  <div className="max-w-4xl mx-auto mb-6">
    <button
      onClick={() => setShowModal(true)}
      className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
    >
      ➕ Add Note
    </button>
  </div>


      {/* Modal */}
      {showModal && (
        <NoteForm
          noteInput={noteInput}
          setNoteInput={setNoteInput}
          onClose={() => {
            setShowModal(false);
            setNoteInput({ title: "", content: "" });
            setEditId(null);
          }}
          onSubmit={editId ? handleEditSave : handleAdd}
          isEditing={!!editId}
        />
      )}

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {notes.length === 0 ? (
          <p className="text-center col-span-full text-gray-600">
            No notes yet.
          </p>
        ) : (
          notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDelete}
              onEditStart={handleEditStart}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
