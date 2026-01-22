// Sticky Navbar
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');

const toggleMenu = (show) => {
  if (show) {
    navLinks.classList.add('active');
    navClose.classList.add('active'); // If we want to animate it separately
  } else {
    navLinks.classList.remove('active');
    navClose.classList.remove('active');
  }
};

hamburger.addEventListener('click', () => toggleMenu(true));
navClose.addEventListener('click', () => toggleMenu(false));

// Smooth Scroll for Anchor Links (Backup for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu(false); // Use the central function to reset classes

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select elements to animate
document.querySelectorAll('.section-title, .about-text, .about-stats, .segment-card, .service-item, .fade-in-left, .fade-in-right').forEach(el => {
  // If it doesn't have a specific fade class, give it the default reveal behavior
  if (!el.classList.contains('fade-in-left') && !el.classList.contains('fade-in-right')) {
    el.classList.add('reveal');
  }
  observer.observe(el);
});

// WhatsApp Function
function openWhatsApp() {
  const phoneNumber = "918086262762"; // Replace with actual number
  const message = "Hello Daily Horeca, I would like to inquire about your services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
