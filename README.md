# Zerodha Clone - Fullstack Trading Dashboard

A fullstack clone of the Zerodha trading platform built with modern web technologies. It includes a user authentication system, interactive dashboards with real-time charting, and seamless frontend-backend integration.

---

## 🚀 Tech Stack

### Frontend (`frontend/` and `dashboard/`)
- **React 19**
- **React Router v7**
- **Material-UI (MUI)**
- **Chart.js via react-chartjs-2**
- **AJV for schema validation**

### Backend (`backend/`)
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Passport.js (Local Strategy) for authentication**
- **dotenv for environment management**
- **CORS & Body-parser**

### Features
- **User Authentication with Passport.js**
- **Real-Time Charts using Chart.js**
- **Schema Validation with AJV**
- **RESTful APIs for user and trading data**
- **Responsive UI with MUI components**
- **Routing using React Router v7**




---

## 📁 Folder Structure
Zerodha-Clone-Fullstack/
│
├── frontend/ # User-facing trading interface
│ └── src/
│ └── index.js
│
├── dashboard/ # Admin or user dashboard interface
│ └── src/
│ └── index.js
│
├── backend/ # Node.js API and auth
│ └── index.js
│
└── README.md

## 🔧 Setup Instructions

### 1. Clone the Repo
git clone https://github.com/yourusername/zerodha-clone-fullstack.git
cd zerodha-clone-fullstack

### 2. Backend Setup
cd backend
npm install
# Create .env file
echo "MONGO_URI=your_mongodb_uri" > .env
echo "PORT=5000" >> .env
npm start

### 3. Frontend Setup
cd ../frontend
npm install
npm start

### 4. Dashboard Setup
cd ../dashboard
npm install
npm start
