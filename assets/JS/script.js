
// Setting Time Out for the Preloader
window.addEventListener('load', function() {
    var preLoader = document.getElementById('preloader');
    preLoader.style.display = "block";
    setTimeout(function() {
        preLoader.style.display = 'none';
      }, 900);
});

// Scrolled Navbar
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var aboutSection = document.getElementById('about');
  var aboutSectionOffset = aboutSection.offsetTop;
  var navbarToggler = document.querySelector('.navbar-toggler');

  if (window.scrollY >= aboutSectionOffset) {
    navbar.classList.add('scrolled');
    navbarToggler.setAttribute('data-bs-theme', 'light');
  } else {
    navbar.classList.remove('scrolled');
    navbarToggler.setAttribute('data-bs-theme', 'dark');
  }
});

// Open Modal
var searchIcons = document.querySelectorAll('.search');
var closeIcon = document.querySelector('.close');
var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal-content');

searchIcons.forEach(function(searchIcon) {
  searchIcon.addEventListener('click', function() {
    modal.style.display = 'block';
  });
});

if (closeIcon) {
  closeIcon.addEventListener('click', function() {
    modal.style.display = 'none';
  });
}

modal.addEventListener('click', function(event) {
  if (event.target === modal || event.target === modalContent) {
    modal.style.display = 'none';
  }
});