// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li a');

// Toggle menu
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('active'); // Optional: for burger animation
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Enhanced Scroll Reveal
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Reveal once
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el, index) => {
    // Add staggering delay
    if (index % 2 === 0) el.style.transitionDelay = "0ms";
    else el.style.transitionDelay = "200ms";
    observer.observe(el);
});

// Typewriter Effect
const textElement = document.getElementById('typing-text');
const phrases = ["Computer Science Postgraduate", "UI/UX Designer", "Tech Enthusiast"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of phrase
        setTimeout(() => { isDeleting = true; type(); }, 2000);
    } else if (isDeleting && charIndex === 0) {
        // Move to next phrase
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }
}

// Start typing on load
document.addEventListener('DOMContentLoaded', type);
