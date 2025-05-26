const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

const carousel = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;
let intervalId;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function startCarousel() {
  intervalId = setInterval(nextSlide, 4000);
}

function stopCarousel() {
  clearInterval(intervalId);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  stopCarousel();
  startCarousel();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopCarousel();
  startCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    goToSlide(index);
    stopCarousel();
    startCarousel();
  });
});

startCarousel();

carousel.parentElement.addEventListener("mouseenter", stopCarousel);
carousel.parentElement.addEventListener("mouseleave", startCarousel);
