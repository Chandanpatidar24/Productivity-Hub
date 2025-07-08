import React from "react";
import logo from "../assets/brain.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-black bg-opacity-50">
      <div className="flex items-center space-x-2">
        <img
            src={logo}
            alt="Logo"
             className="w-8 h-8 object-contain filter invert"
       />

        <span className="text-white font-bold text-lg" >Productivity Hub</span>
      </div>
         <div className="flex space-x-4 text-sm text-white">
          <Link to="/task" className="hover:font-bold hover:text-red-400 transition">Task</Link>
          <Link to="/timer" className="hover:font-bold hover:text-red-400 transition">Timer</Link>
          <Link to="/notes" className="hover:font-bold hover:text-red-400 transition">Notes</Link>

         </div>

         <div className="flex items-center space-x-4">
          <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded-full transition">
            Login
            </button>

            <button className="bg-red-800 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded-full transition-colors">
              Sign Up
            </button>
         </div>
      
     
    </nav>
  );
}
