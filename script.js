//get video
var video = 
document.getElementById("background");

const typingText = document.querySelector('.typing-text span');
const words = [" Developer", " Data Scientist", " AI Enthusiast"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    if (isDeleting && currentWord.length === 0) {
        isDeleting = false;
        j = (j + 1) % words.length;
    } else if (!isDeleting && currentWord.length === words[j].length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting) {
        currentWord = words[j].substring(0, currentWord.length - 1);
    } else {
        currentWord = words[j].substring(0, currentWord.length + 1);
    }

    typingText.textContent = currentWord;
    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener('DOMContentLoaded', type);
