// Improved nav toggle + accessibility + close on link click
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navAnchors = navLinks.querySelectorAll('a');

  function openNav() {
    navLinks.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
  }

  function closeNav() {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  }

  function toggleMenu() {
    if (navLinks.classList.contains('open')) closeNav();
    else openNav();
  }

  // toggle on hamburger click
  hamburger.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // close nav when a link is clicked (mobile)
  navAnchors.forEach(a => {
    a.addEventListener('click', () => {
      closeNav();
    });
  });

  // close nav when clicking outside it on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && navLinks.classList.contains('open')) {
      if (!navLinks.contains(e.target) && e.target !== hamburger) {
        closeNav();
      }
    }
  });

  // close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      closeNav();
    }
  });
});
