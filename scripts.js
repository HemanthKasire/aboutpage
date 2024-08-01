// Toggle Mobile Navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Scroll Reveal Animation
const sections = document.querySelectorAll('section');

const revealSection = () => {
    const revealPoint = 150;
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealSection);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load Event for Initial Animation
window.addEventListener('load', () => {
    document.querySelector('header').classList.add('active');
    document.querySelector('#hero').classList.add('active');
});