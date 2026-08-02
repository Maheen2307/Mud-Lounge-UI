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

    // 10. LIVE BOOKING FORM BACKEND INTEGRATION ENGINE (WITH STRICT VALIDATIONS)
    const bookingForm = document.getElementById("studioBookingForm");
    const dateInput = document.getElementById("preferredDate");
    const submitBtn = document.getElementById("submitBookingBtn");
    const confirmationModal = document.getElementById("confirmationModal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Enforce Minimum Date: Tomorrow (No past or present dates in HTML date picker)
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const minDateStr = tomorrow.toISOString().split("T")[0];
        dateInput.min = minDateStr;
    }

    // RegEx Patterns
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const pakPhoneRegex = /^(?:\+92|0)3[0-9]{9}$/;

    // Clear Previous Error States
    const clearErrors = () => {
        document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
        document.querySelectorAll("input, select").forEach(el => el.classList.remove("invalid"));
    };

    // Helper to Show Error Message
    const showError = (errorId, message, inputId) => {
        const errorElem = document.getElementById(errorId);
        const inputElem = document.getElementById(inputId);
        if (errorElem) errorElem.textContent = message;
        if (inputElem) inputElem.classList.add("invalid");
    };

    if (bookingForm) {
        bookingForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            clearErrors();

            // Collect input values
            const fullName = document.getElementById("fullName")?.value.trim() || "";
            const emailAddress = document.getElementById("emailAddress")?.value.trim() || "";
            const contactNo = document.getElementById("contactNo")?.value.trim() || "";
            const sessionCategory = document.getElementById("sessionCategory")?.value || "";
            const preferredDate = document.getElementById("preferredDate")?.value || "";
            const timeSlot = document.getElementById("timeSlot")?.value || "";

            let isValid = true;

            // 1. Full Name Validation (Must include first & last name)
            if (fullName.length < 3 || !fullName.includes(" ")) {
                showError("name-error", "Please enter your full name (first and last name).", "fullName");
                isValid = false;
            }

            // 2. Email Address Validation
            if (!emailRegex.test(emailAddress)) {
                showError("email-error", "Please enter a valid email address.", "emailAddress");
                isValid = false;
            }

            // 3. Pakistani Phone Number Validation
            if (!pakPhoneRegex.test(contactNo)) {
                showError("phone-error", "Enter a valid 11-digit Pakistani number starting with 03 or +923.", "contactNo");
                isValid = false;
            }

            // 4. Session Category Validation
            if (!sessionCategory) {
                showError("category-error", "Please select an experience level.", "sessionCategory");
                isValid = false;
            }

            // 5. Preferred Date Validation (Future Date & Sunday Check)
            if (!preferredDate) {
                showError("date-error", "Please select your preferred session date.", "preferredDate");
                isValid = false;
            } else {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const minDateStr = tomorrow.toISOString().split("T")[0];

                if (preferredDate < minDateStr) {
                    showError("date-error", "Please choose a future date (starting from tomorrow).", "preferredDate");
                    isValid = false;
                } else {
                    const chosenDate = new Date(preferredDate + "T00:00:00");
                    if (chosenDate.getDay() === 0) { // 0 = Sunday
                        showError("date-error", "The Mud Lounge is closed on Sundays. Please select another day!", "preferredDate");
                        isValid = false;
                    }
                }
            }

            // 6. Time Slot Validation
            if (!timeSlot) {
                showError("slot-error", "Please select a timing slot.", "timeSlot");
                isValid = false;
            }

            // Stop if validation fails
            if (!isValid) return;

            // Loading state UI
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Reserving your spot...";
            }

            const bookingData = {
                fullName,
                emailAddress,
                contactNo,
                sessionCategory,
                preferredDate,
                timeSlot
            };

            try {
                // Send data to Vercel Live Express Backend API
                const response = await fetch("https://mud-lounge-api.vercel.app/api/bookings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bookingData)
                });

                const data = await response.json().catch(() => ({}));

                if (response.ok) {
                    bookingForm.reset();
                    if (confirmationModal) {
                        confirmationModal.classList.remove("hidden");
                    }
                } else {
                    const serverError = data.error || "An unexpected error occurred while processing your reservation.";
                    
                    // Show error directly on the date/slot input fields if it's a duplicate booking error
                    if (serverError.toLowerCase().includes("already reserved")) {
                        showError("date-error", serverError, "preferredDate");
                        showError("slot-error", serverError, "timeSlot");
                    } else {
                        alert(`⚠️ ${serverError}`);
                    }
                }
            } catch (error) {
                console.error("Server Connection Error:", error);
                alert("⚠️ Could not connect to the backend server! Check your internet connection.");
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = "Confirm Reservation";
                }
            }
        });
    }

    // Modal Close Action
    if (closeModalBtn && confirmationModal) {
        closeModalBtn.addEventListener("click", () => {
            confirmationModal.classList.add("hidden");
        });
    }
});