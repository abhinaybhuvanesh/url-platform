<div align="center">

# 🚀 SwiftByte

### Full-Stack URL Shortening and Analytics Platform

A modern URL shortening platform with secure authentication, custom aliases, password-protected links, QR code generation, click analytics, and cloud deployment.

---

# 🌐 Live Demo

**Application**

https://swiftbyte-url.vercel.app

---

# 📌 Overview

SwiftByte is a full-stack URL shortening platform built using **React.js, Node.js, Express.js, and MongoDB Atlas**.

The platform allows users to shorten long URLs, create custom aliases, generate QR codes, secure links with passwords, manage their links through a dashboard, and monitor click analytics.

The application is fully deployed on **Vercel**, while **MongoDB Atlas** is used for persistent cloud database storage.

---

# ✨ Features

- 🔗 URL Shortening
- 👤 User Registration & Login
- 🔐 JWT Authentication
- 🔑 Password-Protected Links
- ✏️ Custom URL Aliases
- 📱 QR Code Generation
- 📊 Click Analytics
- 📂 Personal Dashboard
- ✅ Input Validation
- 🛡️ Password Hashing using bcrypt
- ⚡ REST API Architecture
- ☁️ Cloud Deployment on Vercel

---

# 🏗️ System Architecture

```
React Frontend
        │
        ▼
 Vercel Frontend
        │
 Axios REST API
        │
        ▼
Express.js Backend
      (Vercel)
        │
        ▼
MongoDB Atlas
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router
- Axios
- HTML
- CSS
- JavaScript

## Backend

- Node.js
- Express.js
- REST APIs

## Database

- MongoDB Atlas
- Mongoose

## Authentication & Security

- JSON Web Token (JWT)
- bcrypt
- Input Validation
- Password-Protected Links

## Deployment

- Vercel
- MongoDB Atlas
- GitHub

---

# 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| POST | /api/urls | Create Short URL |
| GET | /:shortCode | Redirect to Original URL |
| POST | /api/urls/:shortCode/unlock | Unlock Password Protected Link |
| GET | /api/urls/:shortCode/qrcode | Generate QR Code |
| GET | /api/urls/my-links | Retrieve User URLs |

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Input Validation
- Password-Protected URLs

---

# 📊 Key Functionalities

### URL Shortening

Convert long URLs into short and shareable links.

### Custom Alias

Create personalized short URLs.

Example:

```
https://swiftbyte-url.vercel.app/github
```

---

### Password Protection

Protect shortened URLs with a password.

---

### QR Code

Generate a QR code for every shortened URL.

---

### Click Analytics

Track the number of clicks for every shortened URL.

---

### Dashboard

Authenticated users can:

- View all their URLs
- Monitor click counts
- Manage created links

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/abhinaybhuvanesh/url-platform.git

cd url-platform
```

---

## Backend

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret

BASE_URL=http://localhost:3000

FRONTEND_URL=http://localhost:3001
```

Run backend

```bash
node index.js
```

---

## Frontend

```bash
cd frontend

npm install
```

Create `.env`

```env
REACT_APP_API_URL=http://localhost:3000
```

Run frontend

```bash
npm start
```

---

# 🚀 Production Deployment

## Frontend

Vercel

https://swiftbyte-url.vercel.app

---

## Backend

Vercel

https://swiftbyte-api.vercel.app

---

## Database

MongoDB Atlas

---

# 💡 Engineering Highlights

- Developed **7+ REST API endpoints**
- Implemented JWT Authentication
- Implemented bcrypt Password Hashing
- Designed MongoDB Schemas using Mongoose
- Built Password-Protected Links
- Built QR Code Generation
- Built Click Analytics
- Configured Environment Variables
- Deployed Frontend & Backend on Vercel
- Integrated MongoDB Atlas Cloud Database
- Resolved CORS and Production Deployment Challenges

---

# 🔮 Future Improvements

- Email Verification
- Password Reset
- Link Expiration
- Device & Browser Analytics
- Geographic Analytics
- Download QR Code
- Dark Mode
- Custom Domains
- Docker Support
- GitHub Actions CI/CD

---

# 👨‍💻 Author

## Abhinay Bhuvanesh Thota

GitHub

https://github.com/abhinaybhuvanesh

LinkedIn

https://linkedin.com/in/abhinaybhuvanesh

---

<div align="center">

⭐ If you found this project useful, consider giving it a star.

Built with ❤️ using React.js, Node.js, Express.js, MongoDB Atlas, JWT, and Vercel.

</div>
