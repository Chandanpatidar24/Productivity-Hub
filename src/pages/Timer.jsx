import React, { useEffect, useRef, useState } from 'react';
import soundFile from '../assets/sound.mp3';

export default function Timer() {
  // Timer States
  const [mode, setMode] = useState("pomodoro"); // Modes: 'pomodoro', 'short', 'long'
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Time in seconds
  const [isRunning, setIsRunning] = useState(false); // Tracks if timer is active
  const [autoCycle, setAutoCycle] = useState(true); // Enables automatic switching between modes
  const [sessionCount, setSessionCount] = useState(0); // Counts how many pomodoros are completed

  const timerRef = useRef(null); // Stores the interval ID
  const audioRef = useRef(null); // Reference to audio for alert

  // ⏱ Format time from seconds to MM:SS
  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  // 🧠 Returns time in seconds based on mode
  const getTimeForMode = (mode) => {
    switch (mode) {
      case "pomodoro": return 25 * 60;
      case "short": return 5 * 60;
      case "long": return 15 * 60;
      default: return 25 * 60;
    }
  };

  // ▶️ Start or Pause Timer
  const toggleTimer = () => setIsRunning(prev => !prev);

  // 🔄 Reset Timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(getTimeForMode(mode));
  };

  // 🎯 Switch mode manually
  const handleModeChange = (newMode) => {
    clearInterval(timerRef.current);
    setMode(newMode);
    setTimeLeft(getTimeForMode(newMode));
    setIsRunning(false);
  };

  // 🕓 Main Timer Effect
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            audioRef.current?.play();

            // 🔁 Auto-cycle logic (Pomodoro → Short/Long Break → Pomodoro)
            if (autoCycle) {
              if (mode === "pomodoro") {
                const next = sessionCount + 1;
                setSessionCount(next);
                if (next % 3 === 0) {
                  setMode("long");
                  setTimeLeft(getTimeForMode("long"));
                } else {
                  setMode("short");
                  setTimeLeft(getTimeForMode("short"));
                }
                setIsRunning(true);
              } else {
                setMode("pomodoro");
                setTimeLeft(getTimeForMode("pomodoro"));
                setIsRunning(true);
              }
            }

            return 0; // prevent negative values
          }

          return prev - 1;
        });
      }, 1000); // ⏱ Every second
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current); // Cleanup
  }, [isRunning, mode]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-100 to-white text-gray-900 p-4">
      <h1 className="text-4xl font-bold mb-6">Pomodoro Timer</h1>

      {/* Mode Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => handleModeChange('pomodoro')}
          className={`px-6 py-2 rounded-lg text-white ${mode === 'pomodoro' ? 'bg-red-500' : 'bg-gray-400 hover:bg-red-400'}`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => handleModeChange('short')}
          className={`px-6 py-2 rounded-lg text-white ${mode === 'short' ? 'bg-green-500' : 'bg-gray-400 hover:bg-green-400'}`}
        >
          Short Break
        </button>
        <button
          onClick={() => handleModeChange('long')}
          className={`px-6 py-2 rounded-lg text-white ${mode === 'long' ? 'bg-blue-500' : 'bg-gray-400 hover:bg-blue-400'}`}
        >
          Long Break
        </button>
      </div>

      {/* Time Display */}
      <h2 className="text-7xl font-bold mb-6 font-mono">{formatTime(timeLeft)}</h2>

      {/* Controls */}
      <div className="flex gap-6 mb-6">
        <button
          onClick={toggleTimer}
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-white text-lg rounded-lg shadow-md"
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="px-8 py-3 bg-gray-600 hover:bg-gray-500 text-white text-lg rounded-lg shadow-md"
        >
          Reset
        </button>
      </div>

      {/* Auto-cycle Checkbox */}
      <label className="flex items-center space-x-2 text-lg">
        <input
          type="checkbox"
          checked={autoCycle}
          onChange={() => setAutoCycle(!autoCycle)}
          className="w-5 h-5"
        />
        <span>Auto Pomodoro Timer (25-5-25-5-25-15)</span>
      </label>

      {/* Alarm Sound */}
      <audio ref={audioRef} src={soundFile} preload="auto" />
    </div>
  );
}
