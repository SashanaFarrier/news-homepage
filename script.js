const primaryNavigation = document.querySelector(".primary-navigation");
const hamburgerMenu = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

hamburgerMenu.addEventListener("click", toggleNavigation);
closeBtn.addEventListener("click", toggleNavigation);

function toggleNavigation() {
  hamburgerMenu.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  primaryNavigation.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}
