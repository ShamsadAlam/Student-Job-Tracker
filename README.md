# 🎓 Student Job Tracker – MERN Stack Application

A full-stack MERN web application to help students manage their job applications with features to add, view, filter, update, and delete applications.

---

## 📌 Assignment Objective

As part of the **Fullstack Developer TA Intern – MERN Stack Assignment (Cuvette)**, the project involved:

- Building a full-stack MERN application: **Student Job Tracker**
- Solving a JavaScript DSA problem
- Recording a walkthrough video with explanations
- Using AI tools (bonus)

---

## 🚀 Live Demo

- **Frontend (Vercel)**: [vercel deployed frontend](https://shamsad-job-tracker.vercel.app/)
- **Backend (Render)**: [render deployed backend](https://student-job-tracker-backend-fzaq.onrender.com/api/jobs)
- **MongoDB Atlas** for cloud database

---

## 🔧 Tech Stack

| Layer       | Tech               |
|-------------|--------------------|
| Frontend    | React.js (JavaScript, Hooks) |
| Backend     | Node.js, Express.js |
| Database    | MongoDB Atlas       |
| Deployment  | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

### 1. Add Job Application
- Input fields: `Company`, `Role`, `Status`, `Date of Application`, `Link`
- Form validation and reset on submission

### 2. View All Applications
- Displays jobs in a clean, responsive card layout
- Sorted by `appliedDate` (latest first)

### 3. Filter Applications *(Optional Enhancement)*
- You can filter applications by `status` or `date` using query parameters

### 4. Update Application Status
- Change status via dropdown (`Applied`, `Interview`, `Offer`, `Rejected`)
- Changes saved and reflected in real-time

### 5. Delete Application
- Removes job entry permanently from the database

---

### Clone the repo
```
git clone https://github.com/your-username/student-job-tracker.git
```
### Backend setup
```
cd server
npm install
touch .env
```
### Add MONGO_URI in .env
```
npm start
```
### Frontend setup
```cd ../client
npm install
touch .env
```
### Add VITE_API_URL in .env
```
npm run dev
```


