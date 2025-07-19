// Sidebar.jsx
import React, { useState } from 'react';
import { FiMenu, FiFile, FiTrash, FiStar, } from 'react-icons/fi'; // we install react libary of iceon

const menuItems = [  // this is the all items thats gonna be on over sidebar
  {name: 'All Notes', icon: <FiFile /> },
  { name: 'Pinned', icon: <FiStar /> },
  { name: 'Trash', icon: <FiTrash /> },
];

export default function Sidebar({ onSelect }) { 

  const [activeItem, setActiveItem] = useState('All Notes'); //Deafult set All Notes as first page 
  const [isOpen, setIsOpen] = useState(true); // open/close state

  const handleClick = (item) => { // when click at other itmes handle click
    setActiveItem(item); // if we are at All note and click at pinned the setActiveItem will be Pinned then
    onSelect?.(item); // same when we select 
  };

  return (
    <aside className={`h-screen bg-white border-r shadow-md transition-all duration-200
      ${isOpen ? 'w-60' : 'w-16'} flex flex-col justify-between`} // width change according to is sidebar open yes or no 
    >
      {/* Toggle Button */}
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)} // menu side bar in out button
          className="text-gray-600 hover:text-black"
        >
          <FiMenu size={20} /> {/*icons for it*/} 
        </button>
      </div>

      {/* Menu Items */}
      <ul className="flex-1 space-y-2 px-2">
        {menuItems.map((item) => ( 
          <li
            key={item.name}
            onClick={() => handleClick(item.name)}
            className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition
              ${activeItem === item.name
                ? 'bg-black text-white font-semibold'
                : 'text-gray-700 hover:bg-gray-200'}
            `}
          >
            {/* Icon */}
            <span className="text-xl">{item.icon}</span>
            {/* Label (hide if collapsed) */}
            {isOpen && <span>{item.name}</span>}
          </li>
        ))}
      </ul>

      {/* Optional Footer */}
      <div className="text-center text-xs text-gray-400 p-3">
        {isOpen && '© 2025 NotesApp'}
      </div>
    </aside>
  );
}

