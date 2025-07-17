// src/pages/Notes.jsx
import React, { useState } from "react";
import NoteForm from "../features/notes/NoteForm";
import NoteCard from "../features/notes/NoteCard";
import NoteViewModal from "../features/notes/NoteViewModal";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [viewNote, setViewNote] = useState(null);
  const[searchText, setSearchText] = useState("");
  

  // 📝 Form state
  const [noteInput, setNoteInput] = useState({
    title: "",
    content: "",
    pinned: false,
  });

  // ✅ Add note
  const handleAdd = () => {
    const { title, content, pinned } = noteInput;
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      pinned,
      createdAt: new Date().toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };

    setNotes([newNote, ...notes]);
    setNoteInput({ title: "", content: "", pinned: false });
    setShowModal(false);
  };

  //Filtere notes based on search text
   const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase()) ||
    note.content.toLowerCase().includes(searchText.toLowerCase())
    );
   
  // ✅ Edit note
  const handleEditStart = (note) => {
    setEditId(note.id);
    setNoteInput({
      title: note.title,
      content: note.content,
      pinned: note.pinned,
    });
    setShowModal(true);
  };

  const handleEditSave = () => {
    setNotes(
      notes.map((note) =>
        note.id === editId ? { ...note, ...noteInput } : note
      )
    );
    setEditId(null);
    setNoteInput({ title: "", content: "", pinned: false });
    setShowModal(false);
  };
   
  const handleSearchChanges = (e) =>{
    setSearchText(e.target.value);
  };

  // ❌ Delete
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // 📌 Toggle Pin
  const handleTogglePin = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, pinned: !note.pinned } : note
      )
    );
  };

  // 🔍 Filter notes
  const pinnedNotes = filteredNotes.filter((note) => note.pinned);
  const unpinnedNotes = filteredNotes.filter((note) => !note.pinned);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 px-4 py-6 text-black">
      <h1 className="text-center text-4xl font-bold mb-6 text-gray-800">
        📝 My Notes
      </h1>

      <div className="max-w-4xl mx-auto mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600"
        >
          ➕ Add Note
        </button>
      </div>
      <div className="max-w-4xl mx-auto mb-4">
        <input 
         type="text"
         placeholder="Search Notes.."
         value={searchText}
         onChange={(e) => setSearchText(e.target.value)}
         className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:ring focus:ring-yellow-300"
        />
      </div>

      {/* Add/Edit Note Modal */}
      {showModal && (
        <NoteForm
          noteInput={noteInput}
          setNoteInput={setNoteInput}
          onClose={() => {
            setShowModal(false);
            setEditId(null);
            setNoteInput({ title: "", content: "", pinned: false });
          }}
          onSubmit={editId ? handleEditSave : handleAdd}
          isEditing={!!editId}
        />
      )}

      {/* View Note Modal */}
      {viewNote && (
        <NoteViewModal
          note={viewNote}
          onClose={() => setViewNote(null)}
          onEditStart={handleEditStart}
        />
      )}

      {/* 📌 Pinned Section */}
      {pinnedNotes.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📌 Pinned</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {pinnedNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={handleDelete}
                onEditStart={handleEditStart}
                onView={setViewNote}
                onTogglePin={handleTogglePin}
              />
            ))}
          </div>
        </>
      )}

      {/* 🗂 Others */}
      <h2 className="text-xl font-semibold text-gray-700 mb-2">🗂 Others</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {unpinnedNotes.length === 0 ? (
          <p className="text-gray-500 text-center col-span-full">No notes yet.</p>
        ) : (
          unpinnedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={handleDelete}
              onEditStart={handleEditStart}
              onView={setViewNote}
              onTogglePin={handleTogglePin}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
