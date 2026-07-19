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

// ======================
// Form Validation
// ======================

const contactForm = document.getElementById("contactForm");

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    fullname.classList.remove("input-error", "input-success");
    email.classList.remove("input-error", "input-success");
    message.classList.remove("input-error", "input-success");

    // Ad və Soyad

    if (fullname.value.trim() === "") {

        nameError.textContent = "Ad və soyad daxil edilməlidir.";
        fullname.classList.add("input-error");
        isValid = false;

    } else {

        fullname.classList.add("input-success");

    }

    // Email

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {

        emailError.textContent = "Elektron poçt daxil edilməlidir.";
        email.classList.add("input-error");
        isValid = false;

    } else if (!emailRegex.test(email.value.trim())) {

        emailError.textContent = "Düzgün email ünvanı daxil edin.";
        email.classList.add("input-error");
        isValid = false;

    } else {

        email.classList.add("input-success");

    }

    // Mesaj

    if (message.value.trim() === "") {

        messageError.textContent = "Mesaj sahəsi boş buraxıla bilməz.";
        message.classList.add("input-error");
        isValid = false;

    } else {

        message.classList.add("input-success");

    }

    // Uğurlu nəticə

    if (isValid) {

        successMessage.textContent = "Müraciətiniz uğurla göndərildi.";

        contactForm.reset();

        fullname.classList.remove("input-success");
        email.classList.remove("input-success");
        message.classList.remove("input-success");
    }

});
