const typingText = document.getElementById("typing-text");
const textToType = "[Nama Kamu]";
let index = 0;

function typeEffect() {
  if (index < textToType.length) {
    typingText.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// Animasi Saat Scroll
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

fadeElements.forEach(el => observer.observe(el));
