
import React, { useState } from 'react';
import Sidebar from '../features/notes/NotesSidebar';
import NoteForm from '../features/notes/NoteForm';

export default function Notes() {
  const [section, setSection] = useState('All Notes');
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const[noteEdit , setNoteEdit] = useState(null);

    
  const filteredNotes = notes.filter(note =>{
    if(section === 'All Notes') return !note.trashed && !note.pinned;
    if(section === 'Pinned') return note.pinned && !note.trashed;
    if(section === 'Trash')return note.trashed;
    return ture;
  });
    const handleDeleteNote = (id) =>{
      setNotes(notes.map(n =>
        n.id === id ? {...n, trashed:true} : n
      ));
    };

    const handleSaveNote = (note) => {
      if(noteEdit){
        setNotes(notes.map(n => (n.id === note.id ? note : n))); 
        setNoteEdit(null);
      }else{
        setNotes([note, ...notes]);
      }

      setShowForm(false);
    };

  

  return (
    <div className="flex ">
      <Sidebar onSelect={setSection} />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">{section}</h1>

        <div className="mb-4 flex justify-start">
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
             Add Note
          </button>
        </div>

        {showForm && (
          <NoteForm
            onSave={handleSaveNote}
            onCancel={() =>{
               setShowForm(false);
               setNoteEdit(null)
              }}
              initialData={noteEdit}
          />
        )}

        <div className="space-y-4">
          {filteredNotes.map((note) => (
            <div 
            key={note.id}
            onClick={() => setNoteEdit(note)}
             className=" cursor-pointer group-bg-white hover-gray-300 transition-all duration-150  border rounded-xl p-4 shadow-sm hover:shadow-md">
              <h2 className="text-lg font-bold text-gray-800">{note.title}</h2>
              <p className="text-gray-700 mt-1">{note.content}</p>
              <p className="text-xs text-gray-500 mt-2">{note.createdAt}</p>

              {/*Delete Button*/}
              <div className='mt-2'>
                <button
                 onClick={() => handleDeleteNote(note.id)}
                 className='text-red-500 hover:underline text-sm'
                >
                  Delete
                </button>

                {/*Edit Button */}
                <button
                onClick={() =>{
                  setNoteEdit(note);
                  setShowForm(true);
                }}
                className='text-blue-600 hover:underline text-sm mr-4'
                >
                  Edit
                </button>

                {/*Pin Button */}
                <button
                 onClick={() =>
                  setNotes(notes.map(n =>
                    n.id === note.id ? {...n, pinned : !n.pinned} :n
                  ))
                 }
                 className='text-yellow-500 hover:underline text-sm mr-4'
                >
                  {note.pinned ? 'unpin' :'Pin'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
