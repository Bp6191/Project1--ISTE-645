const navToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});