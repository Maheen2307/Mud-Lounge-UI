# 🏺 The Mud Lounge — Premium Pottery Studio UI

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A responsive, modern frontend web application designed for a premier pottery studio in Gulberg III, Lahore. Built with pure HTML5, modern CSS3, and Vanilla JavaScript.

🌐 **Live Demo:** [https://maheen2307.github.io/Mud-Lounge-UI/](https://maheen2307.github.io/Mud-Lounge-UI/)

---

## 📌 Overview

**The Mud Lounge** is a modern web application built with clean DOM manipulation, custom scroll animations, interactive UI components, mobile-first responsive layouts, and asynchronous form handling integrated directly with a live backend API.

---

## 🌐 Live Backend Integration
* **Live API Endpoint:** [https://mud-lounge-backend.vercel.app/api/bookings](https://mud-lounge-backend.vercel.app/api/bookings)
* **Backend Repository:** [Mud-Lounge-Backend](https://github.com/Maheen2307/Mud-Lounge-Backend)

---

## ⚡ Key Technical Features

* **Dynamic Workshop Filter:** Real-time client-side sorting (*All Sessions, Beginner, Creative Space*) powered by Vanilla JS.
* **Scroll-Triggered Animations:** `IntersectionObserver` keyframe typing effect and cascading gallery image reveals.
* **Automated Product Showcase:** Self-cycling 3-second image slideshow built with JavaScript intervals.
* **Interactive Accordion FAQ:** Pure CSS/JS expandable toggles for space-efficient Q&A.
* **Continuous Marquee Review Strip:** Infinite CSS keyframe animation displaying community feedback.
* **Live Booking Form Integration:** Asynchronous `fetch()` POST requests to the live Vercel backend with full syntactic and semantic validation.
* **Mobile Snap Scroll:** Responsive CSS snap-scrolling layout for seamless swipe navigation on mobile devices.

---

## 🧭 Page Sections

* **Navbar:** Fixed navigation with animated hamburger toggle for mobile devices.
* **Hero Section:** Background video loop with smooth anchor scroll triggers.
* **Workshops:** Interactive grid with category filtering and image hover morphs.
* **Artisans:** Instructor bio cards highlighting specialization details.
* **Philosophy:** Scroll-observed typing header with overlapping graphic cards.
* **Showcase:** Interactive product showcase featuring automated image rotators.
* **FAQs:** Interactive click-to-expand accordion UI.
* **Reviews:** Infinite auto-scrolling testimonial strip.
* **Booking Form:** Reservation form configured and live-connected to the Express backend API.
* **Footer:** Studio schedule, location, contact, and legal links.

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure & accessibility markup |
| **CSS3** | Flexbox, Grid, Custom Variables, Snap Scrolling, Keyframes |
| **JavaScript (ES6+)** | DOM manipulation, `IntersectionObserver`, `fetch` API |
| **Google Fonts** | Montserrat & Plus Jakarta Sans |
| **Deployment** | GitHub Pages (Frontend) & Vercel (Backend API) |

---

## 📂 File Structure

```text
mud-lounge-ui/
├── index.html          # Semantic HTML markup
├── style.css           # Styling rules, design variables & responsiveness
├── app.js              # Interactivity, filters, observers & Live API handling
└── assets/             # Media, images, and hero video files
```

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone [https://github.com/Maheen2307/Mud-Lounge-UI.git](https://github.com/Maheen2307/Mud-Lounge-UI.git)
cd Mud-Lounge-UI
```

### 2. Run locally
* Open `index.html` directly in any web browser, or
* Launch using VS Code Live Server (`http://127.0.0.1:5500`).

---

## 📄 License

This project is licensed under the **MIT License**.
