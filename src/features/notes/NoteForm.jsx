import React, { useState } from 'react'

export default function NoteForm({
  onSave, onCancel,initialData
}) {

  const[title, setTitle] = useState(initialData?.title||'');
  const[content, setContent] = useState(initialData?.content||'');

   const handleSubmit= (e) =>{
    e.preventDefault();
    const newNote ={
         id: initialData?.id||Date.now(),
         title,
         content,
         createdAt: initialData?.createdAt ||new Date().toLocaleString(),
         pinned: initialData?.pinned || false,
         trashed: initialData?.trashed || false
        };
     onSave(newNote);
     setTitle('');
     setContent('');

   }
  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow space-y-4">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded hover:bg-gray-100"
        required
      />
      <textarea
        placeholder="Write Here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded h-28 resize-none hover:bg-gray-100"
        required
      />
      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:brightness-110">Save Note</button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded hover:bg-red-600">Cancel</button>
      </div>
    </form>
  );
}