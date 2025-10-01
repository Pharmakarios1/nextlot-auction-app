## Nextlot Auction App

Nextlot Auction App is a real-time auction platform built with modern web technologies. It allows users to register, authenticate, join live auctions, and place bids in real time with WebSocket-powered updates.

# Features

User Authentication (Signup, Login, OTP verification)
Real-time Auctions using WebSockets for instant bid updates
Auction Management (create, join, and track auctions)
Secure OTP Flow stored in Redis
Responsive Frontend built with React + TailwindCSS + Shadcn/UI
Backend API powered by FastAPI
Database Schema Management with Alembic
CI/CD Pipeline for automated builds and deployments
Dockerized Setup for easy local and production runs

# Tech Stack

# Frontend

React (with React Router for navigation)
Shadcn/UI + TailwindCSS (for styling and components)
Axios / Service Context API (for API calls)
WebSocket client (real-time bidding)

# Backend

FastAPI (REST + WebSocket endpoints)
SQLAlchemy + Alembic (database ORM + migrations)
PostgreSQL (primary database)
Redis (OTP + cache)
DevOps
Docker & Docker Compose (containerization)
CI/CD with GitHub Actions / Vercel / Railway (deployment automation)

# Installation & Setup

Clone the repository
git clone https://github.com/pharmakarios/nextlot-auction-app.git

cd nextlot-auction-app

# Backend Setup

1. Create a `.env` file with:
   DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/auctiondb
   REDIS_URL=redis://localhost:6379
   SECRET_KEY=your-secret
2. Run Alembic migrations:
   alembic upgrade head
3. Start FastAPI server:
   uvicorn app.main:app --reload
   Frontend Setup
4. Navigate to the frontend folder:
   cd frontend
5. Install dependencies:
   npm install
6. Start development server:
   npm run dev
   Project Structure

nextlot-auction-app/
│── backend/
│ ├── app/
│ │ ├── main.py
│ │ ├── api/ # REST routes
│ │ ├── ws/ # WebSocket handlers
│ │ ├── models/ # SQLAlchemy models
│ │ ├── schemas/ # Pydantic schemas
│ │ └── services/ # Business logic
│ ├── alembic/ # Database migrations
│ └── tests/ # Backend tests
│
│── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── contexts/ # ServiceContext (auth, OTP, transactions)
│ │ ├── pages/
│ │ └── App.tsx
│
│── docker-compose.yml
│── README.md

# Authentication & OTP Flow

- Users register/login via FastAPI endpoints.
- OTPs are generated and stored in Redis.
- OTPs are verified before sensitive actions (e.g., bidding, transactions).
- Token-based authentication (JWT) ensures secure API access.

# WebSocket Bidding Flow

1. User joins an auction room via WebSocket.
2. When a bid is placed, all connected clients get real-time updates.
3. Auction closes automatically when time expires.

# Development Notes

- Run backend + frontend together with docker-compose up.
- Use Alembic to keep database schema version-controlled.
- Future enhancements:
  - Notifications for outbid events
  - Payment gateway integration
  - Admin dashboard for auction management

# License

MIT License © 2025 [Blessed Akhigbe]
