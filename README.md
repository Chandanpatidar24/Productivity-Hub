# 🧠 Productivity Hub

A personal productivity web app to manage your **tasks**, write **notes**, and stay focused.  
Built with **React + Vite + TailwindCSS + shadcn/ui** for speed and clean design.

---

## 🌟 Features (In Progress)

- ✅ Landing Page and Navigation (Home / Tasks / Notes / Timer)
- ✅ Add new tasks with title input
- ✅ Edit and Delete tasks easily
- ✅ Mark tasks as complete
- ✅ Set **time** and assign **day** (Today / Tomorrow / Weekly)
- ✅ Refactored file structure: split into `TaskList`, `TaskItem`, `TaskForm`, `utils`, etc.
- ⬜ Add task **description**
- ⬜ Modal-based task form UI
- ⬜ Notes feature (coming soon)
- ⬜ Pomodoro Timer or Reminder system
- ⬜ Save and sync data with LocalStorage or Firebase

---

## 🛠 Tech Stack

- ⚛️ React + Vite
- 🎨 TailwindCSS + shadcn/ui
- 💾 Planned: Firebase or LocalStorage
- 🖥️ GitHub CLI + CMD for setup and version control

---

## 📁 File Structure Overview
src/
├── components/
│ ├── TaskForm.jsx // Form for adding tasks (title, description, time, day)
│ ├── TaskList.jsx // Renders all tasks
│ ├── TaskItem.jsx // Displays single task with edit/delete/checkbox
│ └── UI/ // For reusable UI components (future modal, buttons)
├── data/
│ └── constants.js // Days list or static data
├── hooks/
│ └── useTasks.js // Future: custom logic like localstorage sync
├── pages/
│ └── Task.jsx // Main task manager page
└── App.jsx // Routing and page structure


## 🚀 How to Run Locally

```bash
git clone https://github.com/your-username/productivity-hub.git
cd productivity-hub
npm install
npm run dev

🧪 What's Next (Phase 2 Plan)
-🪄 Modal for creating and editing tasks (with all inputs)

-📅 Calendar/time picker for deadlines

-🔥 Animated task transitions (Framer Motion)

-🔍 Filter by Today / Tomorrow / Week

-🌙 Dark mode toggle

-📝 Add Notes page


## ✍️ Author

**Chandan Patidar**  
[GitHub Profile](https://github.com/Chandanpatidar24)  
