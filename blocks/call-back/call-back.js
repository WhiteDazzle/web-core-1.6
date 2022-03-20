var callBack = document.querySelector('.call-back');
var opencallBackButton = document.querySelectorAll('.button-menu--call-back');
var closecallBackButton = document.querySelector('.call-back__button-close');

var pageContentBlur = document.querySelector('.page__content-blur');

opencallBackButton[0].addEventListener('click', function (evt) {
    pageContentBlur.classList.remove('page__content-blur--active-z-1');
    pageContentBlur.classList.remove('page__content-blur--hidden');
    pageContentBlur.classList.add('page__content-blur--active-z-3');
    callBack.classList.remove('right-popup--hidden');
    console.log("call-back консоль открыта");
});
opencallBackButton[1].addEventListener('click', function (evt) {
    pageContentBlur.classList.remove('page__content-blur--active-z-1');
    pageContentBlur.classList.remove('page__content-blur--hidden');
    pageContentBlur.classList.add('page__content-blur--active-z-3');
    callBack.classList.remove('right-popup--hidden');
    console.log("call-back консоль открыта");
});

closecallBackButton.addEventListener('click', function (evt) {
    pageContentBlur.classList.add('page__content-blur--hidden');
    pageContentBlur.classList.remove('page__content-blur--active-z-3');
    callBack.classList.add('right-popup--hidden');
    console.log("call-back консоль закрыта");  
});