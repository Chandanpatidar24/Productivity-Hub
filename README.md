
```md
# 🧠 Productivity Hub

A personal productivity web app to manage your **tasks**, write **notes**, and stay focused.  
Built with **React + Vite + TailwindCSS + shadcn/ui** for speed and clean design.

---

## 🌟 Features (Progress Overview)

- ✅ Landing Page and Navigation (Home / Tasks / Notes / Timer)
- ✅ Add new tasks with title input
- ✅ Edit and Delete tasks easily
- ✅ Mark tasks as complete or pending
- ✅ Set **time** and assign **day** (Today / Tomorrow / Weekly)
- ✅ Add task **description**
- ✅ View filter: Show only **completed** or **pending** tasks
- ✅ Responsive layout with TailwindCSS
- ✅ Refactored file structure (`TaskList`, `TaskItem`, `TaskForm`, etc.)
- ✅ Modal-based task form UI (for both Add and Edit)
- ⬜ Pomodoro Timer / Reminder system
- ⬜ Save and sync tasks using LocalStorage or Firebase

---

## 🛠 Tech Stack

- ⚛️ React + Vite
- 🎨 TailwindCSS + shadcn/ui
- 💾 Planned: Firebase / LocalStorage
- 🔃 GitHub CLI + CMD for setup and version control

---

## 📁 File Structure Overview

```

src/
├── components/
│   ├── TaskForm.jsx        # Modal form for adding/editing tasks
│   ├── TaskList.jsx        # Renders all tasks (filtered)
│   ├── TaskItem.jsx        # Individual task with UI (edit/delete/toggle)
│   └── UI/                 # Future reusable components
├── data/
│   └── constants.js        # Static data like days list (optional)
├── hooks/
│   └── useTasks.js         # Custom hook for localStorage sync (coming soon)
├── pages/
│   └── Task.jsx            # Main task management page
└── App.jsx                 # Main entry + routing

````

---

## 🚀 Run Locally

```bash
git clone https://github.com/Chandanpatidar24/Productivity-Hub
cd productivity-hub
npm install
npm run dev
````

---

## 🧪 What's Next (Phase 2)

* 📅 Add calendar or time picker
* 🔍 Filter: Today / Tomorrow / This Week
* 💾 Save tasks to LocalStorage / Firebase
* ⏲️ Add Pomodoro Timer / Reminder

---

## ✍️ Author

**Chandan Patidar**
[GitHub Profile](https://github.com/Chandanpatidar24)

---

🎯 Stay productive, stay organized with **Productivity Hub**.

```

