#  The Mud Lounge — Premium Pottery Studio UI

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

> A responsive, modern frontend web application designed for a premier pottery studio in Gulberg III, Lahore. Built with pure HTML5, modern CSS3, and Vanilla JavaScript.

---

## 📌 Overview

**The Mud Lounge** is a modern web application built with clean DOM manipulation, custom scroll animations, interactive UI components, mobile-first responsive layouts, and asynchronous form handling.

---

## ⚡ Key Technical Features

* **Dynamic Workshop Filter:** Real-time client-side sorting (*All Sessions*, *Beginner*, *Creative Space*) powered by Vanilla JS.
* **Scroll-Triggered Animations:** `IntersectionObserver` keyframe typing effect and cascading gallery image reveals.
* **Automated Product Showcase:** Self-cycling 3-second image slideshow built with JavaScript intervals.
* **Interactive Accordion FAQ:** Pure CSS/JS expandable toggles for space-efficient Q&A.
* **Continuous Marquee Review Strip:** Infinite CSS keyframe animation displaying community feedback.
* **Asynchronous Booking Form:** Validates user inputs and sends async `POST` payloads via JavaScript `fetch()`.
* **Mobile Snap Scroll:** Responsive CSS snap-scrolling layout for seamless swipe navigation on mobile devices.

---

## 🧭 Page Sections

1. **Navbar:** Fixed navigation with animated hamburger toggle for mobile devices.
2. **Hero Section:** Background video loop with smooth anchor scroll triggers.
3. **Workshops:** Interactive grid with category filtering and image hover morphs.
4. **Artisans:** Instructor bio cards highlighting specialization details.
5. **Philosophy:** Scroll-observed typing header with overlapping graphic cards.
6. **Showcase:** Interactive product showcase featuring automated image rotators.
7. **FAQs:** Interactive click-to-expand accordion UI.
8. **Reviews:** Infinite auto-scrolling testimonial strip.
9. **Booking Form:** Reservation form configured for backend API connection.
10. **Footer:** Studio schedule, location, contact, and legal links.

---

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure & accessibility markup |
| **CSS3** | Flexbox, Grid, Custom Variables, Snap Scrolling, Keyframes |
| **JavaScript (ES6+)** | DOM manipulation, `IntersectionObserver`, `fetch` API |
| **Google Fonts** | Montserrat & Plus Jakarta Sans |

---

## 📂 File Structure

```text
mud-lounge-ui/
├── index.html          # Semantic HTML markup
├── style.css           # Styling rules, design variables & responsiveness
├── app.js              # Interactivity, filters, observers & API handling
└── assets/             # Media, images, and hero video files

---

## Quick Start

1. Clone the repository:
git clone [https://github.com/maheen2307/mud-lounge-ui.git](https://github.com/maheen2307/mud-lounge-ui.git)
cd mud-lounge-ui
2. Run locally:
​Open index.html directly in any web browser, or
​Launch using VS Code Live Server (http://127.0.0.1:5500).
