import { nominalTypeHack } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react'

export default function Timer () {

  // const Pomodoro =() =>{
    const[mode , setMode] = useState("pomodoro")
    const[timeLeft , setTimeLeft] = useState(25*60); //25 minutes in seconds
    const[isRunning , setIsRunning] = useState(false); //we will this for start and stop 
    const timerRef = useRef(null);// a container that start with empty

    //formant for seconds in MM:SS
    const formatTime = (time) =>{ // setting to time
      const minutes =Math.floor(time/60); // eg: 87 / 60 = 1.45 so min = 1
      const seconds = time % 60;//eg:87 % 60 = 27  
      return`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`// putting number into string "01:27"

    };

    //Start or Pause Timer
    const toggleTimer =() =>{
      setIsRunning((prev) => !prev); // prev is previous  state and then !prev flip the state eg: start to pause or vice versa

    };
      // Swtich Modes
      const SwitchMode = (newMode) =>{
        setIsRunning(false);
        clearInterval(timerRef.current);
        setMode(newMode);
        if(newMode === "pomodoro")setTimeLeft(25 * 60);
        if(newMode === "short") setTimeLeft(5 * 60);
        if(newMode === "long") setTimeLeft(10 * 60);
      }

      //Rest Timer
      const restTimer= () =>{
        setIsRunning(false);
        clearInterval(timerRef.current);
         
        if(mode === "pomodoro")setTimeLeft(25 * 60);
        if(mode === "short") setTimeLeft(5 * 60);
        if(mode === "long") setTimeLeft(10 * 60);
      }

      //timer logic
      useEffect(() =>{
        
        if(isRunning){
          //if the timer is running ( user Clicked "start")

          // start a new interval that ticks every 1000 milisecond (1 seconds)
          timerRef.current = setInterval(() =>{
            //use functional state updated to get  the previous timeLeft value
            setTimeLeft((prev) => {
              if(prev <= 1){
                // if time reacher 0 or below
                // stop the interval so it doesn't  keep running to negotive
              clearInterval(timerRef.current);

              //set the timer to 0 exactly (prevents going negative )
              return 0;
              }

              //otherwise , subtract 1 second and contuine the countdown
              return prev - 1;
            });
          }, 1000);// 1 second
        }else{
          //if the timer is not running when user clicked pause  
          
          //stop the interval if its running start -> puase or true to false 
          clearInterval(timerRef.current);

        }
        return() => clearInterval(timerRef.current)
      },[isRunning]);


    
  
return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4">
    <h1 className="text-4xl font-bold mb-8">Pomodoro Timer</h1>

    {/* Mode Switch Buttons */}
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => SwitchMode("pomodoro")}
        className={`px-4 py-2 rounded ${
          mode === "pomodoro" ? "bg-red-500 text-white" : "bg-gray-200"
        }`}
      >
        Pomodoro
      </button>
      <button
        onClick={() => SwitchMode("short")}
        className={`px-4 py-2 rounded ${
          mode === "short" ? "bg-green-500 text-white" : "bg-gray-200"
        }`}
      >
        Short Break
      </button>
      <button
        onClick={() => SwitchMode("long")}
        className={`px-4 py-2 rounded ${
          mode === "long" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Long Break
      </button>
    </div>

    {/* Timer Display */}
    <h2 className="text-6xl font-semibold mb-6">{formatTime(timeLeft)}</h2>

    {/* Start/Pause + Reset Buttons */}
    <div className="flex gap-4">
      <button
        onClick={toggleTimer}
        className="px-6 py-2 bg-gray-800 text-white rounded"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={restTimer}
        className="px-6 py-2 bg-gray-200 text-gray-800 rounded"
      >
        Reset
      </button>
    </div>
  </div>
);

}


