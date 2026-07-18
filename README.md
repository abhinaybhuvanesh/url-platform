This design keeps hot-path redirects fast under load without hammering the database on every single click — the same pattern production URL shorteners rely on at scale.

---

## 🧰 Technology Stack

**Frontend**
`React` · `React Router` · `Axios` · Custom CSS design system

**Backend**
`Node.js` · `Express.js` · `MongoDB / Mongoose` · `Redis`

**Security & Middleware**
`JWT` · `bcryptjs` · `rate-limiter-flexible` · `validator` · `winston`

**Infrastructure**
`AWS EC2 (Ubuntu)` · `Nginx` · `PM2` · Manually provisioned — no managed PaaS

---

## 📡 API Reference

| Method | Endpoint | Description | Auth |
|:---|:---|:---|:---:|
| `POST` | `/api/auth/register` | Create a new account | — |
| `POST` | `/api/auth/login` | Authenticate, receive JWT | — |
| `POST` | `/api/urls` | Create a short link (alias/password optional) | Optional |
| `GET` | `/:shortCode` | Resolve and redirect | — |
| `POST` | `/api/urls/:shortCode/unlock` | Verify password on protected links | — |
| `GET` | `/api/urls/:shortCode/qrcode` | Retrieve QR code for a link | — |
| `GET` | `/api/urls/my-links` | List links owned by the current user | ✅ |

---

## 🚀 Local Development

**Prerequisites:** Node.js 18+, Redis, a MongoDB connection (Atlas or local)

```bash
# Backend
cd backend
npm install
echo "MONGO_URI=your_connection_string
JWT_SECRET=your_secret
PORT=3000" > .env
node index.js
```

```bash
# Frontend
cd frontend
npm install
echo "REACT_APP_API_URL=http://localhost:3000" > .env
npm start
```

---

## ☁️ Deployment

Provisioned manually on a single AWS EC2 (Ubuntu) instance:

- **Nginx** — serves the compiled React build and handles routing
- **PM2** — process supervision for the Node backend; auto-restarts on crash or system reboot
- **MongoDB Atlas** — managed, network-restricted database layer
- **Redis** — self-hosted on the instance for cache and rate-limit state

No containerization, no managed deployment platform — infrastructure was configured directly to demonstrate hands-on server administration.

---

## 🗺️ Roadmap

- [ ] Link expiration policies
- [ ] Analytics breakdown by device, browser, and geography
- [ ] Custom domain + HTTPS via Let's Encrypt
- [ ] Migrate client-side auth storage from `localStorage` to httpOnly cookies

---

## 👤 Author

**Abhinay Bhuvanesh**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/abhinaybhuvanesh)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_LINKEDIN)
