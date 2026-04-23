# 🍰 The Cake Company

A modern, full-stack application for **The Cake Company**, a premium bakery based in Jabalpur. This platform features a responsive frontend with interactive UI elements and a robust backend API for user management and order processing.

## 🚀 Project Overview

The Cake Company platform allows users to browse a premium collection of signature cakes, manage their profiles, and place custom orders directly via WhatsApp. It is built with a focus on performance, security, and a delightful user experience.

---

## 🛠️ Tech Stack

### Frontend (`/Frontend-`)
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS & Shadcn/UI
- **Animations:** Framer Motion & Lucide React
- **Data Fetching:** TanStack Query (React Query)
- **Form Management:** React Hook Form & Zod
- **Routing:** React Router DOM
- **Deployment:** Netlify

### Backend (`/Backend`)
- **Runtime:** Node.js (Express 5)
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** JWT (Access & Refresh Tokens) with HttpOnly cookies
- **File Storage:** Cloudinary (for user avatars)
- **Security:** Helmet, CORS, & Rate Limiting
- **Validation:** Zod
- **Deployment:** Render

---

## ✨ Key Features

- **Interactive Gallery:** Parallax effects and reveal animations for showcasing premium cakes.
- **WhatsApp Order Integration:** A streamlined custom order form that pre-fills WhatsApp messages for instant confirmation.
- **Secure Authentication:** Complete signup/login flow with secure token management.
- **User Dashboard:** Profile management, including avatar uploads and address updates.
- **Responsive Design:** Optimized for all devices, from mobile to ultra-wide desktops.
- **Production Ready:** Configured for seamless deployment on Netlify (Frontend) and Render (Backend).

---

## ⚙️ Local Setup

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- Cloudinary account (for avatars)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```env
   PORT=4000
   DATABASE_URL=your_postgres_url
   JWT_ACCESS_SECRET=your_secret
   JWT_REFRESH_SECRET=your_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   CLIENT_URL=http://localhost:8080
   ```
4. Push database schema:
   ```bash
   npm run db:push
   ```
5. Start development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Frontend-
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on `.env.example`:
   ```env
   VITE_API_BASE_URL=http://localhost:4000
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

---

## 🚢 Deployment

### Frontend (Netlify)
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Configuration:** Handled via `netlify.toml` and `_redirects` for SPA support.

### Backend (Render)
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Runtime:** Node.js
- **Environment Variables:** Ensure all `.env` variables are set in the Render dashboard.

---

## 📄 License
This project is for internal use and educational purposes.
