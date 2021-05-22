var mainNav = document.querySelector('.main-nav');
var openButton = mainNav.querySelector('.main-nav__open-button');

mainNav.classList.remove('main-nav--no-js');

openButton.addEventListener('click', function(evt) {
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
})
