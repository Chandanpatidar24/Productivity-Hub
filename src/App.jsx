import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Timer from "./pages/Timer";
import Notes from "./pages/Notes";

export default function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </div>
  );
}








