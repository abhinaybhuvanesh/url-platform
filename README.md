<div align="center">

# 🔗 SwiftByte

### A Production-Grade URL Shortening & Analytics Platform

*Engineered from scratch to demonstrate scalable backend architecture, authentication, caching, analytics, and cloud deployment.*

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_EC2-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)

</div>

---

# 📖 Overview

SwiftByte is a full-stack URL shortening platform inspired by Bitly, designed to showcase production-ready backend development and cloud deployment.

The project focuses on building a scalable and secure URL management service featuring authentication, Redis caching, analytics, QR code generation, password-protected links, custom aliases, and AWS deployment.

Unlike tutorial projects, SwiftByte was deployed manually on an AWS EC2 instance using Nginx and PM2, demonstrating real infrastructure setup and server management.

---

# ✨ Features

- 🔗 Shorten long URLs instantly
- 👤 User Registration & Login (JWT Authentication)
- 🔒 Password Protected Links
- 🏷️ Custom Short URL Aliases
- 📊 Click Analytics
- 📱 QR Code Generation
- ⚡ Redis Caching for Fast Redirects
- 🛡️ Rate Limiting
- ✅ URL Validation
- 📝 Structured Logging using Winston
- ☁️ AWS EC2 Deployment
- 🚀 PM2 Process Management
- 🌐 Nginx Reverse Proxy

---

# 🏗️ System Architecture

```
                 React Frontend
                        │
                        │
                 Axios REST API
                        │
                        ▼
                  Nginx Server
                        │
                        ▼
                Express.js Backend
                  │             │
                  │             │
             MongoDB Atlas   Redis
             (Database)      (Cache)
```

---

# ⚡ Redirect Flow

```
User
  │
  ▼
Short URL Request
  │
  ▼
Check Redis Cache
  │
  ├──────────────► Cache Hit
  │                     │
  │                     ▼
  │               Instant Redirect
  │
  ▼
Cache Miss
  │
  ▼
MongoDB Lookup
  │
  ▼
Store in Redis
  │
  ▼
Redirect User
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router
- Axios
- CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Cache

- Redis

## Authentication

- JWT
- bcrypt

## Security

- Rate Limiting
- Validator
- Centralized Error Handling

## Deployment

- AWS EC2
- Ubuntu Linux
- PM2
- Nginx

---

# 📡 REST API

| Method | Endpoint | Description |
|----------|-------------------------------|----------------------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login |
| POST | /api/urls | Create Short URL |
| GET | /:shortCode | Redirect URL |
| POST | /api/urls/:code/unlock | Unlock Password URL |
| GET | /api/urls/:code/qrcode | Generate QR |
| GET | /api/urls/my-links | User Dashboard |

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/abhinay-78/url-platform.git

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
MONGO_URI=your_mongodb_uri

JWT_SECRET=your_secret

PORT=3000

REDIS_HOST=localhost
```

Run

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

Run

```bash
npm start
```

---

# ☁️ Deployment

SwiftByte is manually deployed on an AWS EC2 Ubuntu instance.

Deployment stack includes:

- AWS EC2
- Ubuntu
- Nginx
- PM2
- MongoDB Atlas
- Redis

React is served as a production build through Nginx while the Express backend runs under PM2 for automatic process recovery.

---

# 📊 Project Highlights

✔ Full-stack Architecture

✔ JWT Authentication

✔ Password Protected Links

✔ Redis Cache Layer

✔ QR Code Generation

✔ Click Analytics

✔ Custom Aliases

✔ AWS Deployment

✔ Nginx Configuration

✔ PM2 Process Management

✔ Production Ready Folder Structure

---

# 📈 Future Improvements

- Link Expiration
- Device Analytics
- Browser Analytics
- Country Analytics
- Custom Domains
- HTTPS using Let's Encrypt
- Docker Deployment
- Kubernetes Deployment
- CI/CD using GitHub Actions

---

# 👨‍💻 Author

**Abhinay Bhuvanesh**

GitHub:
https://github.com/abhinay-78

LinkedIn:
https://www.linkedin.com/in/YOUR-LINKEDIN

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates further development.

---

## 📜 License

This project is licensed under the MIT License.

---

<div align="center">

### Thank you for visiting SwiftByte 🚀

</div>
