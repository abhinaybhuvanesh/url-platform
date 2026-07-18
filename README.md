<div align="center">

# 🔗 SwiftByte

### A Production-Grade URL Shortening & Analytics Platform

*Engineered from the ground up — not a Bitly clone, a Bitly-inspired system built to demonstrate real backend architecture, caching strategy, and security practices.*

[![Live Demo](https://img.shields.io/badge/demo-live-0d9488?style=for-the-badge)](http://40.192.24.115)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![AWS](https://img.shields.io/badge/AWS_EC2-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/ec2/)

**[Live Demo](http://40.192.24.115)** · **[Report an Issue](https://github.com/abhinaybhuvanesh/url-platform/issues)**

</div>

---

## Overview

SwiftByte is a full-stack link management platform built to explore and demonstrate the systems-level concerns that separate a toy project from a production service: **caching strategy, rate limiting, authentication, and self-managed deployment infrastructure.**

Rather than relying on managed platforms like Vercel or Render, SwiftByte is **self-hosted end-to-end** on an AWS EC2 instance — configured manually with Nginx and PM2 — to demonstrate real infrastructure ownership, not just application code.

---

## ✨ Key Capabilities

| | |
|---|---|
| 🔐 **Secure Authentication** | JWT-based sessions, bcrypt password hashing, protected route middleware |
| ⚡ **Cache-First Architecture** | Redis-backed redirect lookups — sub-millisecond response on repeat hits, MongoDB as source of truth |
| 🛡️ **Abuse Protection** | Redis-backed sliding rate limiter on link creation, independent of authentication state |
| 🏷️ **Custom Short Links** | User-defined aliases with uniqueness enforcement at the database layer |
| 🔒 **Password-Gated Links** | Per-link bcrypt-hashed passwords, verified via a dedicated unlock endpoint |
| 📊 **Ownership & Analytics** | Per-user dashboards with click tracking, aggregate stats, and link history |
| 📱 **QR Code Generation** | Server-rendered QR codes for every shortened link |
| 🧾 **Observability** | Structured Winston logging, centralized Express error-handling middleware |
| 🌍 **Frictionless Access** | Anonymous shortening works instantly — authentication unlocks ownership, not core functionality |

---

## 🏗️ System Architecture

┌─────────────┐
                 │  React SPA  │
                 └──────┬──────┘
                        │ Axios (REST)
                 ┌──────▼──────┐
                 │    Nginx    │  Reverse proxy · Static file serving
                 └──────┬──────┘
                        │
                 ┌──────▼──────┐
                 │  Express.js │  PM2-managed, auto-restart on failure
                 │     API     │
                 └──┬───────┬──┘
                    │       │
             ┌──────▼─┐   ┌─▼──────────┐
             │  Redis │   │  MongoDB   │
             │ Cache  │   │   Atlas    │
             └────────┘   └────────────┘


