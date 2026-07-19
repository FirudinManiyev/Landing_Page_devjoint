// ======================
// Mobil menyu (Toggle)
// ======================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const isExpanded =
        menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", !isExpanded);

});

// ======================
// Smooth Scroll
// ======================

const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({

            behavior: "smooth"

        });

        navMenu.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
