# Zerodha Clone - Fullstack Trading Dashboard

A fullstack clone of the Zerodha trading platform built using modern technologies. This clone simulates trading functionalities including user login, dashboard visualization, and backend APIs.

---

## 🚀 Tech Stack

### Frontend
- **React 19**
- **Material UI (MUI)**
- **Chart.js** (via `react-chartjs-2`)
- **React Router v7**
- **AJV** for JSON schema validation

### Backend
- **Node.js** with **Express**
- **MongoDB** + **Mongoose**
- **Passport.js** for authentication
- **dotenv**, **CORS**, **body-parser**

---

## 📁 Folder Structure

```
Zerodha-Clone-Fullstack/
│
├── backend/                   # Node.js backend API and auth
│   ├── index.js               # Main server file
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API routes
│   ├── controllers/           # Route controllers (optional)
│   └── config/                # Passport, DB config
│
├── frontend/                  # Main React frontend (user-facing)
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── components/
│       ├── pages/
│       └── styles/
│
├── dashboard/                 # Separate admin/user dashboard React app
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── components/
│       ├── charts/
│       └── utils/
│
└── README.md
```

---

## 🔧 Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/zerodha-clone-fullstack.git
cd zerodha-clone-fullstack
```

### Backend Setup

```bash
cd backend
npm install
# Create .env file
touch .env
# Add variables like:
# MONGO_URI=your_mongodb_connection
# PORT=5000
npm start
```

### Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

### Dashboard Setup

```bash
cd ../dashboard
npm install
npm start
```

---

## ✅ Features

- 🔐 User login and authentication with Passport
- 📈 Interactive trading dashboard with charts
- 📊 Data visualization using Chart.js
- 🌐 RESTful API with Express & MongoDB
- 💅 Styled with Material UI
- 📦 Modular folder structure for scalability

---

## 🧪 Testing

```bash
# Run tests in any app folder
npm test
```

---

## 🧑‍💻 Author

- **Your Name** - [your-email@example.com](mailto:your-email@example.com)

---

## 📜 License

This project is licensed under the MIT License.
