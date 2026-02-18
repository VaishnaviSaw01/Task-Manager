# 📝 Task Manager (MERN Lite - Express + React)

A simple full-stack Task Manager application built using:

- 🚀 Express.js (Backend API)
- ⚛️ React (Frontend - Vite)
- 📡 Axios (API calls)
- 🎨 Modern CSS UI

---

## 📂 Project Structure

Practice/
│
├── backend/
│ ├── index.js
│ ├── package.json
│ └── node_modules/
│
└── task-frontend/
├── src/
├── package.json
└── node_modules/


---

## 🚀 Features

### ✅ Backend API (Express)

- GET all tasks
- GET task by ID
- POST create task
- PUT update task
- DELETE remove task
- Query filter: `/tasks?completed=true`

### ✅ Frontend (React)

- Fetch tasks
- Add new task
- Toggle complete
- Delete task
- Modern UI

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd Practice
```
### 🔹 Backend Setup

cd backend
npm install
npm run dev

Backend runs on:
http://localhost:3000

### 🔹 Frontend Setup

Open new terminal:

cd task-frontend
npm install
npm run dev

Frontend runs on:
http://localhost:5173

## 🌐 API Endpoints

Method	Endpoint	Description
GET	/tasks	Get all tasks
GET	/tasks/:id	Get task by ID
POST	/tasks	Create new task
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task

Example:
GET http://localhost:3000/tasks

## 🛠 Tech Stack

### Backend
Express.js
CORS
Nodemon

### Frontend
React (Vite)
Axios
CSS (Glass UI)

## 📦 Important Notes

node_modules is excluded from GitHub.
Run npm install after cloning.
Backend must run before frontend.

## 📸 Preview

Modern Glass UI with:
Gradient background
Smooth hover effects
Responsive layout

## 👨‍💻 Author
Built by Vaishnavi
