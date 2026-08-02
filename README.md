# 🏺 The Mud Lounge — Premium Pottery Studio UI

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

A modern, responsive web UI for The Mud Lounge featuring custom layouts, interactive workshop cards, animated modal forms, dynamic date selection, and real-time form validation. Developed as part of the DecodeLabs Full-Stack Internship.

🌐 **Live Website:** [The Mud Lounge UI](https://maheen2307.github.io/Mud-Lounge-UI/)

⚙️ **Live API Endpoint:** [Vercel Backend API](https://mud-lounge-api.vercel.app/api/bookings)

📂 **Backend Repository:** [Mud-Lounge-API](https://github.com/Maheen2307/Mud-Lounge-API)

---

## 📂 Repository File Structure

```text
Mud-Lounge-UI/
├── assets/           # Images, icons, and media files
├── LICENSE           # MIT License documentation
├── README.md         # Project documentation & usage guide
├── app.js            # Main JavaScript application logic & DOM interactions
├── index.html        # Main HTML markup structure
└── style.css         # Custom CSS styles, animations & responsive layout
```

---

## 📌 Overview
**The Mud Lounge** is a modern web application built with clean DOM manipulation, custom scroll animations, interactive UI components, mobile-first responsive layouts, and asynchronous form handling integrated directly with a live cloud-database backend.

---

## ⚡ Key Technical Features
* **Dynamic Workshop Filter:** Real-time client-side sorting (*All Sessions, Beginner, Creative Space*) powered by Vanilla JS.
* **Scroll-Triggered Animations:** `IntersectionObserver` keyframe typing effect and cascading gallery image reveals.
* **Automated Product Showcase:** Self-cycling 3-second image slideshow built with JavaScript intervals.
* **Interactive Accordion FAQ:** Pure CSS/JS expandable toggles for space-efficient Q&A.
* **Continuous Marquee Review Strip:** Infinite CSS keyframe animation displaying community feedback.
* **Live Full-Stack Integration:** Asynchronous `fetch()` POST requests send booking data to the live Vercel backend, saving it securely in a PostgreSQL cloud database.
* **Mobile Snap Scroll:** Responsive CSS snap-scrolling layout for seamless swipe navigation on mobile devices.

---

## 🛠️ Tech Stack
| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure & accessibility markup |
| **CSS3** | Flexbox, Grid, Custom Variables, Snap Scrolling, Keyframes |
| **JavaScript (ES6+)** | DOM manipulation, `IntersectionObserver`, `fetch` API |
| **Google Fonts** | Montserrat & Plus Jakarta Sans |
| **Deployment** | GitHub Pages (Frontend) |

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
