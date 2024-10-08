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


document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
