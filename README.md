#  SwiftByte – URL Shortening & Analytics Platform

SwiftByte is a full-stack URL shortening platform that enables users to create secure, customizable, and shareable short URLs.

The platform provides user authentication, custom aliases, password-protected links, QR code generation, click analytics, and a personal dashboard for managing shortened URLs.

 **Live Demo:** https://swiftbyte-url.vercel.app/

---

##  Features

-  Shorten long URLs instantly
-  User Registration & Login
-  JWT-based Authentication
-  Custom URL Aliases
-  Password-Protected Links
-  QR Code Generation
-  Click Analytics
-  Personal Dashboard
-  URL Validation
-  Responsive User Interface

---

##  Tech Stack

### Frontend
- React.js
- React Router
- Axios
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB Atlas
- Mongoose

### Authentication & Security
- JWT (JSON Web Token)
- bcrypt
- Input Validation

### Deployment
- Vercel
- GitHub

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/abhinaybhuvanesh/url-platform.git
```

```bash
cd url-platform
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3000

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

BASE_URL=http://localhost:3000

FRONTEND_URL=http://localhost:3001
```

Run the backend:

```bash
node index.js
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
REACT_APP_API_URL=http://localhost:3000
```

Run the frontend:

```bash
npm start
```

---

## 📂 Project Structure

```
url-platform/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

##  How It Works

1. Register or Login.
2. Paste a long URL.
3. Optionally create a custom alias.
4. Optionally protect the link with a password.
5. Generate a shortened URL.
6. Generate a QR code for easy sharing.
7. Track clicks from the dashboard.
8. Redirect users securely to the original URL.

---

##  Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Input Validation
- Password-Protected URLs

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |
| POST | `/api/urls` | Create Short URL |
| GET | `/:shortCode` | Redirect to Original URL |
| POST | `/api/urls/:shortCode/unlock` | Unlock Password-Protected URL |
| GET | `/api/urls/:shortCode/qrcode` | Generate QR Code |
| GET | `/api/urls/my-links` | Retrieve User URLs |

---

## Production Deployment

### Frontend

Vercel

https://swiftbyte-url.vercel.app

### Backend

Vercel

### Database

MongoDB Atlas

---

##  Future Improvements

- Link Expiration
- Custom Domains
- Device Analytics
- Geographic Analytics
- Email Verification
- Password Reset
- Download QR Code
- Dark Mode
- Docker Support
- CI/CD Pipeline

---

##  Author

**Abhinay Bhuvanesh Thota**

LinkedIn:

https://linkedin.com/in/abhinaybhuvanesh

GitHub:

https://github.com/abhinaybhuvanesh

---

⭐ If you found this project useful, consider giving it a Star!
