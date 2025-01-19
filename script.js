// JavaScript to toggle mobile navigation
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('nav ul.mobile-nav');

    hamburgerMenu.addEventListener('click', () => {
        mobileNav.classList.toggle('show');
    });
});
const dynamicText = document.getElementById("dynamic-text");

const texts = ["a Web Designer.", "an SEO Analyst.."];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let currentText = "";
let typingSpeed = 50;
let deleteSpeed = 100;
let pauseBetweenWords = 500;

function typeEffect() {
    if (isDeleting) {
        currentText = texts[index].substring(0, charIndex--);
        dynamicText.textContent = currentText;
        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % texts.length; // Move to the next text
            setTimeout(typeEffect, 500); // Small pause before typing the next word
        } else {
            setTimeout(typeEffect, deleteSpeed);
        }
    } else {
        currentText = texts[index].substring(0, charIndex++);
        dynamicText.textContent = currentText;
        if (charIndex === texts[index].length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseBetweenWords); // Pause before starting to delete
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    }
}

window.onload = typeEffect;

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('nav ul.mobile-nav').classList.toggle('active');
});

