<div align="center">

<img src="frontend/public/favicon.png" alt="SwiftByte Logo" width="110" />

# SwiftByte

### Full-Stack URL Shortening and Analytics Platform

A secure and scalable link-management application featuring custom short URLs, password-protected links, QR codes, click analytics, Redis caching, and JWT authentication.

<br />

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_SwiftByte-0d9488?style=for-the-badge&logo=googlechrome&logoColor=white)](http://40.192.24.115)
[![GitHub](https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abhinaybhuvanesh/url-platform)

<br />

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![AWS EC2](https://img.shields.io/badge/AWS_EC2-FF9900?style=flat-square&logo=amazonaws&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![PM2](https://img.shields.io/badge/PM2-2B037A?style=flat-square&logo=pm2&logoColor=white)

</div>

---

## Live Demo

**Application:** [http://40.192.24.115](http://40.192.24.115)

> The application is hosted on a personal AWS EC2 instance. The server may be stopped when it is not being actively demonstrated. If the live demo is unavailable, please contact me and I will restart the instance.

---

## Overview

SwiftByte is a full-stack URL shortening and link-management platform built to demonstrate practical backend engineering, caching, authentication, API development, and cloud deployment.

Users can shorten URLs without creating an account. Authentication unlocks additional functionality such as custom aliases, link ownership, password-protected links, QR codes, dashboards, and click analytics.

The application is self-hosted on an AWS EC2 Ubuntu instance. Nginx serves the compiled React frontend, PM2 manages the Node.js backend, MongoDB Atlas stores application data, and Redis supports caching and rate limiting.

---

## Key Features

| Feature | Description |
|---|---|
| URL Shortening | Convert long URLs into compact and shareable links |
| JWT Authentication | Secure registration and login using JWT and bcrypt |
| Custom Aliases | Authenticated users can choose memorable short codes |
| Password Protection | Protect selected links with bcrypt-hashed passwords |
| Click Analytics | Track click counts and view link activity |
| User Dashboard | Manage links associated with the authenticated account |
| QR Code Generation | Generate a scannable QR code for every short URL |
| Redis Caching | Cache redirect lookups to reduce database requests |
| Rate Limiting | Protect link-creation endpoints from excessive requests |
| Input Validation | Validate user input before processing API requests |
| Error Handling | Centralized Express error-handling middleware |
| Structured Logging | Application logging powered by Winston |
| Cloud Deployment | Manually deployed using AWS EC2, Nginx, and PM2 |

---

## System Architecture

```text
                         ┌──────────────────┐
                         │   React Client   │
                         │   Single-Page    │
                         │   Application    │
                         └────────┬─────────┘
                                  │
                                  │ HTTP / Axios
                                  ▼
                         ┌──────────────────┐
                         │      Nginx       │
                         │ Static Frontend  │
                         │ and Web Routing  │
                         └────────┬─────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │ Express.js API   │
                         │ Managed by PM2   │
                         └───────┬──────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
          ┌──────────────────┐      ┌──────────────────┐
          │      Redis       │      │  MongoDB Atlas   │
          │                  │      │                  │
          │ Redirect Cache   │      │ Users            │
          │ Rate Limiting    │      │ URLs             │
          │ Temporary State  │      │ Click Data       │
          └──────────────────┘      └──────────────────┘
```

---

## Redirect Workflow

```text
GET /:shortCode
       │
       ▼
Check Redis cache
       │
       ├── Cache hit
       │      ├── Redirect immediately
       │      └── Update click count asynchronously
       │
       └── Cache miss
              ├── Query MongoDB
              ├── Cache the URL data in Redis
              ├── Update click analytics
              └── Redirect to the original URL
```

Using a cache-aside strategy keeps frequently accessed redirects fast and reduces repeated database lookups.

---

## Technology Stack

### Frontend

- React
- React Router
- Axios
- JavaScript
- Custom CSS

### Backend

- Node.js
- Express.js
- REST APIs

### Database and Cache

- MongoDB Atlas
- Mongoose
- Redis

### Authentication and Security

- JSON Web Tokens
- bcryptjs
- rate-limiter-flexible
- validator
- Centralized error handling

### Infrastructure

- AWS EC2
- Ubuntu Server
- Nginx
- PM2
- Git and GitHub

---

## API Reference

| Method | Endpoint | Description | Authentication |
|:---:|---|---|:---:|
| `POST` | `/api/auth/register` | Create a new user account | No |
| `POST` | `/api/auth/login` | Authenticate a user and return a JWT | No |
| `POST` | `/api/urls` | Create a shortened URL | Optional |
| `GET` | `/:shortCode` | Redirect to the original URL | No |
| `POST` | `/api/urls/:shortCode/unlock` | Verify a protected link password | No |
| `GET` | `/api/urls/:shortCode/qrcode` | Generate or retrieve a QR code | No |
| `GET` | `/api/urls/my-links` | Retrieve links owned by the current user | Yes |

---

## Project Structure

```text
url-platform/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   │
│   └── src/
│       ├── config/
│       │   ├── db.js
│       │   └── redis.js
│       │
│       ├── middleware/
│       │   ├── auth.js
│       │   ├── errorHandler.js
│       │   └── rateLimiter.js
│       │
│       ├── models/
│       │   ├── User.js
│       │   └── Url.js
│       │
│       ├── routes/
│       │   ├── auth.routes.js
│       │   └── url.routes.js
│       │
│       └── utils/
│           └── logger.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── build/
│
├── .gitignore
└── README.md
```

---

## Local Development

### Prerequisites

Before running the project locally, install:

- Node.js 18 or later
- npm
- Redis
- MongoDB Atlas account or a local MongoDB server

### 1. Clone the repository

```bash
git clone https://github.com/abhinaybhuvanesh/url-platform.git
cd url-platform
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
BASE_URL=http://localhost:3000
FRONTEND_URL=http://localhost:3001

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

Start the backend:

```bash
node index.js
```

The API should now be available at:

```text
http://localhost:3000
```

### 3. Configure the frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:3000
```

Start the React development server:

```bash
npm start
```

The frontend should now be available at:

```text
http://localhost:3001
```

> Depending on available ports, Create React App may use port `3000` or request permission to use another port.

---

## Production Build

Create an optimized React build:

```bash
cd frontend
npm run build
```

The generated production files will be available inside:

```text
frontend/build
```

---

## AWS Deployment

SwiftByte is manually deployed on an AWS EC2 Ubuntu instance.

### Deployment components

- **Nginx** serves the optimized React production build
- **PM2** keeps the Express backend running in the background
- **MongoDB Atlas** stores users, URLs, and analytics data
- **Redis** runs on the EC2 instance for caching and rate limiting
- **AWS Security Groups** control access to SSH, HTTP, HTTPS, and backend ports

### Frontend deployment

```bash
cd ~/url-platform/frontend
npm run build

sudo rm -rf /var/www/swiftbyte/*
sudo cp -r build/* /var/www/swiftbyte/

sudo nginx -t
sudo systemctl restart nginx
```

### Backend deployment

```bash
cd ~/url-platform/backend
npm install

pm2 start index.js --name swiftbyte-backend
pm2 save
```

### Nginx configuration

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/swiftbyte;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## Environment Variable Security

Sensitive environment variables must never be committed to GitHub.

The following files should remain in `.gitignore`:

```gitignore
.env
backend/.env
frontend/.env
node_modules/
frontend/build/
logs/
*.log
```

Use an `.env.example` file to document required variables without exposing real credentials.

---

## Current Limitations

- The live deployment currently uses an EC2 public IP instead of a custom domain
- HTTPS has not yet been configured
- The public IP may change if the EC2 instance is stopped and restarted
- The live server may be stopped when it is not being demonstrated

---

## Roadmap

- [ ] Configure a permanent Elastic IP
- [ ] Add a custom domain
- [ ] Enable HTTPS with Let's Encrypt
- [ ] Add link expiration dates
- [ ] Add browser, device, and geographic analytics
- [ ] Add email verification and password recovery
- [ ] Move authentication from `localStorage` to secure HTTP-only cookies
- [ ] Add automated tests
- [ ] Add Docker support
- [ ] Configure CI/CD using GitHub Actions

---

## Engineering Highlights

This project demonstrates experience with:

- Designing RESTful APIs
- Building JWT-based authentication
- Hashing passwords securely with bcrypt
- Applying Redis cache-aside patterns
- Implementing API rate limiting
- Designing MongoDB schemas using Mongoose
- Building responsive React interfaces
- Managing Node.js applications using PM2
- Configuring Nginx for single-page applications
- Deploying and managing applications on AWS EC2
- Debugging Linux permissions, ports, processes, and deployment configurations

---

## Author

### Abhinay Bhuvanesh Thota

[![GitHub](https://img.shields.io/badge/GitHub-abhinaybhuvanesh-181717?style=for-the-badge&logo=github)](https://github.com/abhinaybhuvanesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abhinay_Bhuvanesh-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME)

---

## Support

If you found this project useful or interesting, consider giving the repository a star.

<div align="center">

**Built with React, Node.js, MongoDB, Redis, Nginx, and AWS EC2.**

</div>
