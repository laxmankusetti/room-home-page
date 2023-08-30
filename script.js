const container = document.querySelector('.slider');
const contentItems = document.querySelectorAll('.slide');
const leftButton = document.querySelector('.prev-button');
const rightButton = document.querySelector('.next-button');

let currentIndex = 0;

leftButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateContentPosition();
  }
});

rightButton.addEventListener('click', () => {
  if (currentIndex < contentItems.length - 1) {
    currentIndex++;
    updateContentPosition();
  }
});

function updateContentPosition() {
  const offset = -currentIndex * 35; // Assuming 100% width per content
  container.style.transform = `translateX(${offset}%)`;
}


const hamburgerIcon = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile_menu');
const closeIcon = document.getElementById('close');

function menuOpen() {
  mobileMenu.classList.add('open')
}
function menuClose() {
  mobileMenu.classList.remove('open')
}
