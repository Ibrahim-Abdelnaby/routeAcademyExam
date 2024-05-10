
// Setting Time Out for the Preloader
window.addEventListener('load', function() {
    let preLoader = document.getElementById('preloader');
    preLoader.style.display = "block";
    setTimeout(function() {
        preLoader.style.display = 'none';
      }, 1500);
});