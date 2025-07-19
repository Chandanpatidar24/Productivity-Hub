// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* 🎨 Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] z-0" />

      {/* 💫 Glowing Overlay Circle */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full z-0" />

      {/* 🌐 Navbar + Content */}
      <div className="relative z-10">

        <section className="max-w-3xl mx-auto px-6 pt-60">
          <p className="text-zinc-300 text-xl mb-4">
            Tools, tips, and systems designed to boost your productivity.
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 p-2 bg-gradient-to-r from-pink-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
            Welcome to Productivity Hub<br />
            Your space to focus,<br />
            organize, and get things done.
          </h1>

          <Link to="/task">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:brightness-110 text-white font-semibold px-6 py-3 rounded-full text-lg transition duration-300">
              Get Started
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
