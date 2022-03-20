var leftMenu = document.querySelector('.left-menu');
var openLeftMenuButton = document.querySelector('.header__button-left-menu');
var closeLeftMenuButton = document.querySelector('.left-menu__close');

var pageContentBlur = document.querySelector('.page__content-blur');

var windowInnerWidth = document.documentElement.clientWidth;

if (windowInnerWidth > 1300.97) {
   leftMenu.classList.remove('left-menu--hidden');
}

openLeftMenuButton.addEventListener('click', function (evt) {
   pageContentBlur.classList.remove('page__content-blur--hidden');
   pageContentBlur.classList.add('page__content-blur--active-z-1');
   leftMenu.classList.remove('left-menu--hidden');
});

closeLeftMenuButton.addEventListener('click', function (evt) {
   pageContentBlur.classList.add('page__content-blur--hidden');
   pageContentBlur.classList.remove('page__content-blur--active-z-1');
   leftMenu.classList.add('left-menu--hidden');   
});