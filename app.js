document.addEventListener("DOMContentLoaded", () => {
    // 1. FORCE SCROLL TO TOP ON LOAD
    window.scrollTo(0, 0);

    // 2. MOBILE NAV TOGGLE
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            navToggle.classList.toggle("active", isOpen);
            navToggle.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("nav-open", isOpen);
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                navToggle.classList.remove("active");
                navToggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("nav-open");
            });
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 900) {
                navLinks.classList.remove("open");
                navToggle.classList.remove("active");
                navToggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("nav-open");
            }
        });

        document.addEventListener("click", (event) => {
            if (!navLinks.classList.contains("open")) return;
            if (navToggle.contains(event.target) || navLinks.contains(event.target)) return;
            navLinks.classList.remove("open");
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("nav-open");
        });
    }

    // 3. WORKSHOPS FILTER ENGINE
    const filterButtons = document.querySelectorAll(".filter-btn");
    const workshopCards = document.querySelectorAll(".workshops-container .workshop-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedLevel = button.getAttribute("data-level");
            workshopCards.forEach(card => {
                const cardLevel = card.getAttribute("data-level");
                if (selectedLevel === "all" || cardLevel === selectedLevel) {
                    card.style.setProperty("display", "flex", "important");
                } else {
                    card.style.setProperty("display", "none", "important");
                }
            });
        });
    });

    // 4. NATIVE SCROLL OBSERVER FOR CARDS
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: "0px 0px 50px 0px" });

    document.querySelectorAll(".scroll-reveal").forEach(card => {
        scrollObserver.observe(card);
    });

    // 5. PHILOSOPHY SCROLL TRIGGER
    const philosophySection = document.querySelector(".philosophy-section");
    if (philosophySection) {
        const philosophyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        philosophySection.classList.add("is-active");
                    }, 200);
                }
            });
        }, { threshold: 0.25, rootMargin: "0px" });
        philosophyObserver.observe(philosophySection);
    }

    // 6. SHOWCASE IMAGES LOGIC
    const visualBoxes = document.querySelectorAll(".showcase-visual-box");
    visualBoxes.forEach(box => {
        const frames = box.querySelectorAll(".circle-frame");
        let currentFrameIndex = 0;
        if (frames.length > 1) {
            setInterval(() => {
                frames[currentFrameIndex].classList.remove("active");
                currentFrameIndex = (currentFrameIndex + 1) % frames.length;
                frames[currentFrameIndex].classList.add("active");
            }, 3000);
        }
    });

    // 7. FAQS ACCORDION
    const questions = document.querySelectorAll(".faq-question");
    questions.forEach(question => {
        question.addEventListener("click", function() {
            const currentItem = this.parentElement;
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove("active-toggle");
                }
            });
            currentItem.classList.toggle("active-toggle");
        });
    });

    // 8. PERFECT LINK CLICK SCROLL POSITIONING
    const interactiveLinks = document.querySelectorAll('a[href^="#"]');
    interactiveLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 75;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - (navbarHeight + 20);

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 9. LIVE ACTIVE NAV HIGHLIGHT ON SCROLL
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.pageYOffset + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            if (item.getAttribute("href") === `#${currentSectionId}`) {
                item.style.color = "var(--terracotta-clay)";
            } else {
                item.style.color = "var(--dark-charcoal)";
            }
        });
    });

    // 10. LIVE BOOKING FORM BACKEND INTEGRATION ENGINE
    const bookingForm = document.getElementById("studioBookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Collect form values
            const bookingData = {
                fullName: document.getElementById("fullName")?.value || "",
                emailAddress: document.getElementById("emailAddress")?.value || "",
                contactNo: document.getElementById("contactNo")?.value || "",
                sessionCategory: document.getElementById("sessionCategory")?.value || "",
                preferredDate: document.getElementById("preferredDate")?.value || "",
                timeSlot: document.getElementById("timeSlot")?.value || ""
            };

            try {
                // Send data to Express Backend API
                const response = await fetch("http://localhost:5000/api/bookings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bookingData)
                });

                const data = await response.json();

                if (response.ok) {
                    alert(`🎉 Tranquility awaits, ${bookingData.fullName}! ${data.message}`);
                    bookingForm.reset();
                } else {
                    alert(`⚠️ Validation Error: ${data.error || "Please fill all required fields correctly."}`);
                }
            } catch (error) {
                console.error("Server Connection Error:", error);
                alert("⚠️ Could not connect to the backend server! Make sure 'node server.js' is running in the terminal.");
            }
        });
    }
});
