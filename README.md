<div align="center">

# SwiftByte

### 🚀 Enterprise URL Shortening Platform

A modern, scalable URL shortening platform built with the MERN stack, featuring secure authentication, analytics, caching, and cloud deployment.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen?logo=mongodb)
![Redis](https://img.shields.io/badge/Redis-Cache-red?logo=redis)
![AWS](https://img.shields.io/badge/AWS-EC2-orange?logo=amazonaws)
![Nginx](https://img.shields.io/badge/Nginx-Reverse_Proxy-success?logo=nginx)
![License](https://img.shields.io/badge/License-MIT-blue)

---

### 🌐 Live Demo

**Application:** http://40.192.24.115

> **Note:** The application is currently hosted on an AWS EC2 instance using an IP address. HTTPS and a custom domain will be configured in a future release.

</div>

---

# 📖 Overview

SwiftByte is a full-stack URL shortening platform designed with scalability, performance, and security in mind. It enables users to create, manage, and track shortened URLs while leveraging Redis caching, JWT authentication, and MongoDB for efficient and secure data management.

---

# ✨ Features

- 🔐 JWT Authentication
- 🔗 URL Shortening
- ✏️ Custom URL Aliases
- 📊 Click Analytics
- ⚡ Redis Caching
- 👤 User Dashboard
- ☁️ AWS EC2 Deployment
- 🌐 Nginx Reverse Proxy
- 🚀 PM2 Process Management
- 📱 Responsive User Interface

---

# 🏗️ System Architecture

```
Client (React)
        │
        ▼
    Nginx Server
        │
        ▼
Node.js + Express API
        │
 ┌──────┴──────┐
 ▼             ▼
MongoDB      Redis
```

---

# 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React.js, HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Cache | Redis |
| Authentication | JWT |
| Deployment | AWS EC2 |
| Reverse Proxy | Nginx |
| Process Manager | PM2 |
| Version Control | Git & GitHub |

---

# 📂 Project Structure

```
SwiftByte/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── config/
│   └── utils/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── build/
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/abhinay-78/SwiftByte.git
cd SwiftByte
```

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
REDIS_URL=your_redis_connection_string
BASE_URL=http://localhost:3000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| POST | /api/url/shorten | Shorten URL |
| GET | /:shortCode | Redirect to Original URL |
| GET | /api/url/all | User URLs |

---

# ☁️ Deployment

The application is deployed on:

- **AWS EC2**
- **MongoDB Atlas**
- **Redis**
- **Nginx**
- **PM2**

Deployment Flow

```
GitHub
   │
   ▼
AWS EC2
   │
   ▼
Nginx
   │
   ▼
Node.js + Express
   │
 ┌─┴─────────┐
 ▼           ▼
MongoDB    Redis
```

---

# 🚀 Future Enhancements

- QR Code Generation
- URL Expiration
- Password Protected Links
- Custom Domains
- Detailed Analytics Dashboard
- Email Verification
- Rate Limiting
- Docker Support
- CI/CD Pipeline
- HTTPS with SSL

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.

---

# 👨‍💻 Author

**Abhinay Bhuvanesh Thota**

GitHub: https://github.com/abhinay-78

LinkedIn: *(Add your LinkedIn profile URL here)*

---

<div align="center">

**⭐ If you found this project helpful, consider giving it a star! ⭐**

</div>
