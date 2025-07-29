# 🌍 Travel Risk Monitoring System

> Hackathon Full-Stack Project — Phase 1 Submission  
> Stack: React (Vite) + Node.js (Backend to be integrated)

---

## 📌 Overview

This project is a **Travel Risk Monitoring System** built for the hackathon challenge. It allows users to:

- Register and log in securely
- Access a dashboard with real-time risk insights
- Track travel safety information per destination
- Perform CRUD operations on monitored destinations

This repository contains the **frontend code** (React + Vite). The backend is being developed separately by a team member using **Node.js + Express** and will be integrated via RESTful APIs.

---

## 🧠 Stack Choice

We chose the **React + Node.js** stack for the following reasons:

- React (with Vite) offers fast development and modern JSX tooling
- Node.js allows us to quickly build scalable REST APIs
- Flexibility in choosing authentication strategies (e.g., JWT)
- Easy database integration using PostgreSQL or MongoDB (via Mongoose or Sequelize)

---

## 🖼️ Project Features (Frontend)

### ✅ Authentication & Authorization

- Login & Signup functionality (form-based)
- Conditional rendering of components based on authentication state
- **Simulated login** for now using hardcoded users (to be replaced by backend validation)

### ✅ Dashboard

- Protected route: Only authenticated users may view it
- Displays travel risk-related info
- Will integrate live data from backend soon

### ✅ UI Routing & Layout

- Left/Right panel layout: Image and forms side-by-side
- Switch between Login and Signup without reloading
- Links to "Forgot password?" and "Already a member?"

---

## 🔧 Backend Plan (To Be Integrated)

Your teammate is building a **Node.js + Express** backend with the following:

### ➤ Authentication (JWT)
- Issue JWT tokens upon login
- Store hashed user passwords
- Middleware to protect routes (e.g., dashboard, CRUD)

### ➤ Database Connection
- Using **MongoDB** or **PostgreSQL**
- Health-check endpoint: `/api/health` will confirm DB connection

### ➤ RESTful API Endpoints
- `/api/auth/register` – User signup
- `/api/auth/login` – Login, returns token
