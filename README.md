# Task Management System (MERN Stack)

## Project Title

Task Management System – A basic MERN stack CRUD application to manage daily tasks efficiently.

---

## Features

* Create new tasks with title and description
* View all tasks in a structured list
* Update task status (Pending / Completed)
* Delete tasks
* Clean and responsive user interface
* Integration with MongoDB Atlas for cloud database storage

---

## Tech Stack

Frontend:

* React.js (Functional Components, Hooks)
* CSS

Backend:

* Node.js
* Express.js

Database:

* MongoDB Atlas (Mongoose)

---

## Setup Instructions

### Prerequisites

* Node.js installed
* MongoDB Atlas account

---


### Backend Setup

cd backend
npm install

Create a `.env` file inside backend folder and add:

MONGO_URI=your_mongodb_connection_string

Run backend server:

node server.js

---

### Frontend Setup

cd frontend
npm install
npm start

---

### Application URLs

Frontend: http://localhost:3000
Backend: http://localhost:5000

---

## Screenshots

Add screenshots of your application here:

* Task Manager Home Page
 <img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/e3686dc9-7a5f-4ac9-ac74-e1e1239dce56" />

* Task List View
 <img width="1907" height="1079" alt="image" src="https://github.com/user-attachments/assets/cf739867-91ae-4571-96f5-1af3ac2d7f31" />

---

## API Endpoints

Base URL: http://localhost:5000/api/tasks

GET /api/tasks

* Description: Fetch all tasks

POST /api/tasks

* Description: Create a new task

PUT /api/tasks/:id

* Description: Update task status

DELETE /api/tasks/:id

* Description: Delete a task

---

## Folder Structure

task-manager/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── services/
│   └── App.js
│
└── README.md

---

## Conclusion

This project demonstrates a complete MERN stack CRUD application with proper folder structure, REST API integration, and cloud database connectivity using MongoDB Atlas.
