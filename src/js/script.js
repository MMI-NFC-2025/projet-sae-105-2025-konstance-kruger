// MENU BURGER
const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav');

// Ouvrir/Fermer le menu
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  mainNav.classList.toggle('open');
});

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
    mainNav.classList.remove('open');
  });
});
