
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/brain.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3 shadow-md rounded-b-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Logo + Brand Name */}
        <div className="flex items-center space-x-8">
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 object-contain filter invert"
          />
          <Link
            to="/"
            className="text-lg font-bold bg-gradient-to-r from-purple-50 via-pink-400 to-orange-300 bg-clip-text text-transparent"
          >
            Productivity Hub
          </Link>
        </div>

        {/* Center: Nav Links (Desktop Only) */}
        <div className="hidden md:flex space-x-6 text-sm">
          <Link
            to="/task"
            className="transition duration-0 font-mono text-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-400 via-yellow-200 to-rose-300"
          >
            Task
          </Link>

          <Link
            to="/notes"
            className="transition duration-0 font-mono text-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-indigo-300 via-purple-200 to-yellow-200"
          >
            Notes
          </Link>

          <Link
            to="/timer"
            className="transition duration-0 font-mono text-xl hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-red-300 via-rose-200 to-violet-200"
          >
            Timer
          </Link>
        </div>

        {/* Right: Auth Buttons (Desktop Only) */}
        <div className="hidden md:flex space-x-3">
          <button
            className="px-3 py-1 rounded border border-white bg-transparent hover:bg-gradient-to-r hover:from-white hover:to-yellow-300 hover:text-black transition duration-300"
          >
            Login
          </button>

          <button
            className="px-3 py-1 rounded text-black bg-gradient-to-r from-gray-100 via-pink-300 to-purple-500 hover:brightness-125 transition duration-300"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white focus:outline-none transition-transform duration-200 hover:scale-110"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm font-semibold">
          <Link
            to="/task"
            className="block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-400 via-yellow-300 to-red-400 transition"
          >
            Task
          </Link>
          <Link
            to="/notes"
            className="block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 transition"
          >
            Notes
          </Link>
          <Link
            to="/timer"
            className="block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-emerald-300 via-lime-300 to-yellow-400 transition"
          >
            Timer
          </Link>

          <hr className="border-white/20" />

          <button className="w-full border border-white px-4 py-2 rounded hover:bg-gradient-to-r hover:from-white hover:to-yellow-300 hover:text-black transition">
            Login
          </button>
          <button className="w-full bg-gradient-to-r from-gray-200 via-pink-500 to-purple-300 text-black px-4 py-2 rounded hover:brightness-125 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
