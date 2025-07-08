import React , {useState} from "react";

export default function Tasks() {
  const [taskInput , setTaskInput] = useState("");
  const[taskList , setTaskList] = useState([]);
    
  const handleAddTask = () =>{
    if(taskInput.trim() === "")return;

    setTaskList([...taskList , taskInput]);
    setTaskInput("");
  };
  return (
    <div className="min-h-screen bg-[#FFF9F9] text-[#2c2c2c] p-6">
      <h2 className="text-4xl text-center py-2 rounded-xl font-bold  mb-4 bg-violet-200">🗂️ Your Tasks</h2>
 
 
            <div className="flex items-center gap-3 mb-6">
                <input type="text" 
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)} 
                placeholder="Enter A Task..."
                className="w-full px-4- py-2 rounded-xl border-2 border-gray-200 :ring-2 foucs:ring-red-500"
                />
           <button
          onClick={handleAddTask}
          className="bg-[#2c2c2c] text-white px-4 py-2 rounded-md hover:bg-[#3a3a3a]  transition-colors "
        >
          Add Task
        </button>
      </div>
      
         <div className="space-y-3">
          {taskList.map((task,index) =>(
            <div
            key={index}
            className="bg-gray-100  px-4 py-3 rounded-xl shadow-md  border flex intem-center justify-between hover:bg-black hover:text-white ">
              <span>{task}</span>
              
            </div>
          ))}
          <div></div>
         </div>
      
    </div>

  );
}
