var feedBack = document.querySelector('.feed-back');
var openfeedBackButton = document.querySelectorAll('.button-menu--feed-back');
var closefeedBackButton = document.querySelector('.feed-back__button-close');

var pageContentBlur = document.querySelector('.page__content-blur');

openfeedBackButton[0].addEventListener('click', function (evt) {
    pageContentBlur.classList.remove('page__content-blur--active-z-1');
    pageContentBlur.classList.remove('page__content-blur--hidden');
    pageContentBlur.classList.add('page__content-blur--active-z-3');
    feedBack.classList.remove('right-popup--hidden');
 
    console.log("правая консоль открыта");
});

openfeedBackButton[1].addEventListener('click', function (evt) {
    pageContentBlur.classList.remove('page__content-blur--active-z-1');
    pageContentBlur.classList.remove('page__content-blur--hidden');
    pageContentBlur.classList.add('page__content-blur--active-z-3');
    feedBack.classList.remove('right-popup--hidden');
    console.log("правая консоль открыта");
});

closefeedBackButton.addEventListener('click', function (evt) {
    pageContentBlur.classList.add('page__content-blur--hidden');
    pageContentBlur.classList.remove('page__content-blur--active-z-3');
    feedBack.classList.add('right-popup--hidden');
    console.log("правая консоль закрыта");  
});