# Realtime Chat System

A modern full-stack real-time chat application that enables users to communicate instantly through a fast, secure, and responsive interface.

## 🚀 Features

* 🔐 User Authentication (Sign Up & Login)
* 💬 Real-time messaging
* 👤 User profiles
* 🟢 Online/Offline user status
* 📱 Responsive UI for desktop and mobile
* 🎨 Modern and intuitive interface
* 🔒 Secure authentication and protected routes

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Zustand
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* JSON Web Token (JWT)
* bcrypt

## 🌐 Deployment

This project is deployed using modern cloud services:

* **Frontend:** Deployed on **Vercel**
* **Backend:** Deployed on **Render**
* **Database:** Connected to **MongoDB Atlas**

## 📂 Project Structure

```text
realtime-chat-system/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
│
├── package.json
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ravan-dtr/Realtime-chat-system.git
```

### 2. Navigate to the project

```bash
cd Realtime-chat-system
```

### 3. Install dependencies

Install root dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install backend dependencies:

```bash
cd ../backend
npm install
```

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` directory and add the following variables:

```env
PORT=5001

MONGODB_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=development
```

## ▶️ Running the Application

### Start the backend

```bash
cd backend
npm run dev
```

### Start the frontend

```bash
cd frontend
npm run dev
```

Open your browser and visit:

```text
http://localhost:5173
```

## 👨‍💻 Author

**Sahil Kumar**

Check out: https://frontend-lyart-omega-16.vercel.app/
