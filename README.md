# 🏺 The Mud Lounge — Premium Pottery Studio UI

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

A modern, responsive frontend web application for **The Mud Lounge** featuring interactive workshop filtering, responsive image carousels, custom keyframe typing animations, smooth section scrolling, and real-time form validation. Integrated with a live serverless Node.js and PostgreSQL backend hosted on Vercel. Developed as part of the DecodeLabs Full-Stack Internship.

🌐 **Live Website:** [The Mud Lounge UI](https://maheen2307.github.io/Mud-Lounge-UI/)

⚙️ **Live API Endpoint:** [Vercel Backend API](https://mud-lounge-api.vercel.app/api/bookings)

📂 **Backend Repository:** [Mud-Lounge-API](https://github.com/Maheen2307/Mud-Lounge-API)

---

## 📂 Repository File Structure

```text
Mud-Lounge-UI/
├── assets/            # Local images, gallery photos, and studio hero video
├── LICENSE            # MIT License documentation
├── README.md          # Project documentation & site overview
├── app.js             # Main JavaScript application logic & DOM interactions
├── index.html         # Main HTML5 structure and section layouts
└── style.css          # Custom CSS styles, media queries & animations
```

---

## 📌 Website Sections
* **Hero Section:** Full-screen hero featuring continuous studio background video playback and quick action triggers.
* **Workshops:** Interactive catalog showcasing *Wheel Throwing*, *Handbuilding*, and *Glazing & Firing* with dual-image hover interactions.
* **Our Artisans:** Highlight cards detailing resident masters (*Omar Bashir*, *Layla Khan*, and *Zain Malik*).
* **Philosophy:** Typing text keyframe reveal animation with stacked layered image showcases.
* **Artisan Showcase:** Self-cycling circular image showcases changing featured stoneware products every 3 seconds.
* **Curiosities in Clay (FAQs):** Accordion-style interactive toggle section addressing studio policies, outfit guides, and pickup times.
* **Reviews Strip:** Infinite keyframe continuous marquee strip displaying community feedback and testimonials.
* **Claim Your Wheel (Booking Form):** Input fields with client-side validation for reserving daily workshop slots.

---

## ⚡ Key Technical Features
* **Dynamic Workshop Filter:** Real-time client-side filter buttons (*All Sessions*, *Beginner Friendly*, *Creative Space*) built with Vanilla JS.
* **Scroll-Triggered Reveals:** `IntersectionObserver` keyframe animations revealing cards and section headings as the user scrolls.
* **3-Second Product Carousel:** Automated image rotation loop using JavaScript intervals inside the Artisan Showcase.
* **Strict Client Validation:** Verifies full names, valid email formats, Pakistani phone numbers (`03xx` or `+923xx`), prohibits past/same-day booking dates, and prevents Sunday bookings.
* **Live Full-Stack Integration:** Asynchronous `fetch()` POST requests submit reservations to the Neon PostgreSQL database via Vercel.
* **Mobile-First Responsive Layout:** Custom media queries and CSS snap scrolling for horizontal swipe navigation on mobile devices.

---

## 🛠️ Tech Stack
| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure, embedded video, and accessibility markup |
| **CSS3** | Custom Variables, Flexbox, Grid, Keyframes, Snap Scrolling |
| **JavaScript (ES6+)** | DOM manipulation, `IntersectionObserver`, `fetch()` API |
| **Google Fonts** | Montserrat & Plus Jakarta Sans |
| **Deployment** | GitHub Pages |

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/Maheen2307/Mud-Lounge-UI.git
cd Mud-Lounge-UI
```

### 2. Run locally
* Open `index.html` directly in any web browser, or
* Launch using VS Code Live Server (`[http://127.0.0.1:5500](http://127.0.0.1:5500)`).

---

## 📄 License
This project is licensed under the **MIT License**.
