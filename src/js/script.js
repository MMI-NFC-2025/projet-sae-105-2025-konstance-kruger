// ========================================
// MENU BURGER
// ========================================

// Sélection des éléments
const burgerMenu = document.querySelector('.burger-menu');
const mainNav = document.querySelector('.main-nav');
const body = document.body;

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
  burgerMenu.classList.toggle('open');
  mainNav.classList.toggle('open');
  
  // Empêcher le scroll quand le menu est ouvert
  if (mainNav.classList.contains('open')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
}

// Événement au clic sur le burger
burgerMenu.addEventListener('click', toggleMenu);

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
    mainNav.classList.remove('open');
    body.style.overflow = 'auto';
  });
});

// Fermer le menu avec la touche Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('open')) {
    burgerMenu.classList.remove('open');
    mainNav.classList.remove('open');
    body.style.overflow = 'auto';
  }
});
