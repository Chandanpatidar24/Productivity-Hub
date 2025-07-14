import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Notes from "./pages/Notes";
import Timer from "./pages/Timer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/timer" element={<Timer/>}/>
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}








