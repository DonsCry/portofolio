const typingElement = document.querySelector(".typing");
const words = ["Web Developer", "Mobile Developer", "Futurist Coder 🚀"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    typingElement.textContent = currentWord.substring(0, charIndex) + "|";

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 60);
    } else {
        if (!isDeleting) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1000);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 400);
        }
        return;
    }
}

document.addEventListener("DOMContentLoaded", type);