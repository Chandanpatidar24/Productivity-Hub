import React , {useState} from "react";

export default function Tasks() {
  const [taskInput, setTaskInput] = useState("");  //Input Box
  const[taskList, setTaskList] = useState([]);     // All task
  const[editId, setEditId] = useState(null);       // ID of the task being edited
  const[editInput, setEditInput] = useState("");    //Text While Editing


  // Add new task to list
        const handleAddTask = () =>{
          if(taskInput.trim() === "")return;
   
             const newTask ={
               id:Date.now(),          // unique ID of task
               text: taskInput.trim(), // Actual text
               completed : false       //intitally not completed
             };
       
             setTaskList([...taskList , newTask]);  //add to array
             setTaskInput("");                        // clear input
  };

 // Check box toggle status
             const handleToggleComplete = (id) =>{
                 const updatedTasks = taskList.map((task) =>
                task.id === id ? {...task, completed: !task.completed } :task
             );
             setTaskList(updatedTasks);
             };


// Delete a task
             const handleDeleteTask = (id) =>{
                 const filteredTasks = taskList.filter((task) =>task.id !== id);
                 setTaskList(filteredTasks);
             };

// Start editing
             const handleEditStart = (task) =>{
                setEditId(task.id);
                setEditInput(task.text);
             };

// Save edited task
             const handleEditSave = () =>{
                const updated =taskList.map((task) =>
                task.id === editId ? {...task , text: editInput.trim()} :task
                );

                setTaskList(updated);
                setEditId(null);
                setEditInput("");
             }   
             
// Cancel Editing 
             const handleEditCancel = () =>{
                setEditId(null);
                setEditInput("");
             } ;
            

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
      
      {/*Tasks List*/}

        <div className="Spcae-y-3">
              {taskList.map((task) => (
                     <div
                       key={task.id}
                       className="bg-gray-100 px-4 py-3 rounded-xl shadow-md border flex items-center justify-between hover:bg-black hover:text-white"
                     >
                    <div className="flex items-center gap-3 w-full">
       {/*Check Box*/}
                      <input
                         type="checkbox"
                         checked={task.completed }
                         onChange={() => handleToggleComplete(task.id)}
                         className="w-5 h-5"
                      />

        {/* Id Editing this task*/}  
                      {editId === task.id ? (
                         <input 
                            type="text"
                            value={editInput} 
                            onChange={(e) => setEditInput(e.target.value)}
                            className="w-full px-2 py-1 rounded border border-gray-300 text-black "
                        />
                        ): (
                            <span
                              className={`flex-1 ${
                                task.completed  ?"line-through text-gray-500" : ""
                              }`}
                            >
                                {task.text}
                            </span>
                        )}  
                    </div>
        {/* 🎛️ Action Buttons */}
                <div className="flex gap-2 ml-3">
                    {editId === task.id ? (
                        <>
                           <button 
                             onClick={handleEditSave}
                             className="text-green-600 hover:text-green-800"
                           >✅
                           </button>

                           <button
                           onClick={handleEditCancel}
                           className="text-yellow-500 hover:text-yellow-700"
                           >
                             ❌
                           </button>
                        </>
                    ) : (
                        <>
                           <button
                             onClick={() => handleEditStart(task)}
                             className="text-blue-600 hover:text-blue-800" 
                           >
                             ✏️
                           </button>

                           <button
                             onClick={() => handleDeleteTask(task.id)}
                             className="text-red-600 hover:text-red-800"
                           >
                            🗑️
                           </button>
                        </>
                    )}
                  </div>
                </div>
             ))}     
        </div>      
      
    </div>

  );
}




