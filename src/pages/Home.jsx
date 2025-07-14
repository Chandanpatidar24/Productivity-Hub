import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white">

      <section className="max-w-3xl mx-auto px-6 pt-60">
        <p className="text-zinc-400 text-lg mb-4">
          Tools, tips, and systems designed to boost your productivity.
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Welcome to Productivity Hub<br />
          Your space to focus,<br />
          organize, and get things done.
        </h1>
        <Link to="/task">
        <button  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full text-lg">
         Get Started
        </button>
        </Link>
      </section>
    </div>
  );
}
