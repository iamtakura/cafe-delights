// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Active Link Highlight
const currentPath = window.location.pathname;
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
    link.classList.add('active');
  }
});
