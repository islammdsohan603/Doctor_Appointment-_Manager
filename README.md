# 🏥 MedPrecision - Doctor Appointment Manager

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-1.6.11-FF5A5F?style=for-the-badge)](https://better-auth.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.2.0-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

**MedPrecision** is a premium, state-of-the-art Doctor Appointment Management Web Application. Built on top of the latest Next.js 16 (React 19) framework, it offers patients a smooth, interactive experience for finding expert specialists, managing healthcare bookings, and updating personal medical profiles.

---

## 🌟 Key Features

*   **🛡️ Robust Authentication System**:
    *   Secure **Email & Password** authentication powered by **Better Auth**.
    *   One-click **Google Social Sign-in** integration.
    *   JWT-based stateless session management with automated token caching.
*   **🩺 Interactive Doctors Directory**:
    *   Browse cards of leading healthcare specialists.
    *   Real-time client-side searching and filtering of doctors by name.
    *   Detailed doctor pages featuring credentials, rating badges, locations, consultation fees, and real-time available schedules.
*   **📅 Seamless Booking Process**:
    *   Smooth booking modal interface using **HeroUI**.
    *   Form-validation for patient contact information, gender selection, appointment date/time, and reason for visit.
    *   Automatic user detail filling for authenticated users.
*   **👤 Comprehensive Patient Dashboard**:
    *   **My Booking Tab**: Unified view of all appointments, presenting status, doctor, date/time, and description.
    *   **Edit & Cancel**: Easily reschedule/update appointment times or cancel reservations with elegant confirmation dialogs.
    *   **My Profile Tab**: Custom user card illustrating profile details and an interactive edit panel.
*   **✨ Modern & Fluid Design System**:
    *   Glassmorphic overlays, vibrant gradients, and elegant dark/light balances.
    *   Premium UI styling utilizing **HeroUI** and **Tailwind CSS v4**.
    *   Interactive hover dynamics and micro-animations via **Framer Motion** and **Motion**.
    *   Toast feedback system via **React Toastify**.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 16.2.6 (App Router)** | Framework utilizing Server & Client components, Server Actions, & Route Handlers. |
| **View Engine** | **React 19.2.4** | Modern rendering lifecycle, Suspense fallbacks, and compiler optimizations. |
| **Styling** | **Tailwind CSS v4** & **PostCSS** | Utility-first layout engine with modern compile-time performance. |
| **UI Components** | **HeroUI React (v3.0.5)** | Beautiful, customizable UI widgets and modal structures. |
| **Authentication** | **Better Auth** | Developer-friendly auth utility with MongoDB Adapter and JWT plugin. |
| **Database** | **MongoDB Driver** | High performance data persistence layer. |
| **Animations** | **Framer Motion** | Physics-based responsive UI interactions & micro-transitions. |
| **Icons** | **Lucide React** & **React Icons** | Clean vector icon sets. |

---

### Live Demo: https://doctor-appointment-dusky-chi.vercel.app/


### screenshot

## Home Page

![alt text](<Screenshot 2026-05-21 091523.png>)


![alt text](<Screenshot 2026-05-21 091538.png>)


## Doctors

![alt text](<Screenshot 2026-05-21 091538-1.png>)

## Details doctors

![alt text](<Screenshot 2026-05-21 091641.png>)


## DashBoard
![alt text](<Screenshot 2026-05-21 092029.png>)

## Profile

![alt text](<Screenshot 2026-05-21 092118.png>)


## Footer

![alt text](<Screenshot 2026-05-21 091603.png>)





## 🔒 Security and Optimization
*   **JWT Strategy**: Credentials are kept safe using secure JSON Web Tokens.
*   **Server Connections**: Pre-fetched components run securely as Next.js Server Components.
*   **Client Loading states**: Handled through Next.js `loading.jsx` Suspense wrappers for optimal Core Web Vitals.

---
 
