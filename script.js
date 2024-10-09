const textArray = ["Web Developer", "Software Developer", "Prompt Engineer", "Designer"];
let textIndex = 0;
let letterIndex = 0;
const typingText = document.querySelector('.typing-text span');
const cursor = document.querySelector('.cursor');

function type() {
    if (letterIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 150); // Typing speed
    } else {
        cursor.style.opacity = "0"; // Hide cursor when typing is done
        setTimeout(deleteText, 2000); // Pause before deleting
    }
}

function deleteText() {
    if (letterIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deleteText, 100); // Deleting speed
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Cycle through the texts
        cursor.style.opacity = "1"; // Show cursor before typing next
        setTimeout(type, 500); // Pause before typing next
    }
}

// Start typing animation
document.addEventListener('DOMContentLoaded', () => {
    type();
    blinkCursor(); // Start cursor blinking
});

function blinkCursor() {
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 500); // Adjust blink speed
}


// // JavaScript to toggle the menu
// const menuIcon = document.querySelector('.menu');
// const navLinks = document.querySelector('.nav-links');

// menuIcon.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     menuIcon.classList.toggle('active'); // Toggle X icon
// });

// JavaScript to handle the menu toggle and background overlay
const menuIcon = document.querySelector('.menu i');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
    // Toggle the active class for the menu
    navLinks.classList.toggle('active');
    
    // Toggle between the hamburger icon and the 'X' icon
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }

    // Toggle the overlay
    overlay.classList.toggle('active');
});

// Close the menu if overlay is clicked
overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
});
