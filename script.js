// Hamburger menu
document.getElementById("menuBtn").addEventListener("click", () => {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
});

// auto slider
const slider = document.getElementById("slider");
const slides = slider.children;
let current = 0;
const slideInterval = 3000;

function moveToNextSlide() {
  current = (current + 1) % slides.length;
  slider.style.transform = `translateX(-${current * 100}%)`;
}

//automatic slide transition
setInterval(moveToNextSlide, slideInterval);

// Set width 
for (let slide of slides) {
  slide.style.width = "100%";
}

// Initial first slide 
window.addEventListener("load", () => {
  slider.style.transform = "translateX(0%)";
});

// navigation button 
document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  slider.style.transform = `translateX(-${current * 100}%)`;
});

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  slider.style.transform = `translateX(-${current * 100}%)`;
});
