var CompanyDescriptionText = document.querySelector('.company-description__text-container');
var openCompanyDescriptionTextButton = document.querySelector('.company-description__button-full-open');
var closeCompanyDescriptionTextButton = document.querySelector('.company-description__button-full-close');

openCompanyDescriptionTextButton.addEventListener('click', function (evt) {
    CompanyDescriptionText.classList.add('company-description__text-container--full');
    openCompanyDescriptionTextButton.classList.add('company-description__button-full-open--hidden');
    closeCompanyDescriptionTextButton.classList.remove('company-description__button-full-close--hidden');
});

closeCompanyDescriptionTextButton.addEventListener('click', function () {
    CompanyDescriptionText.classList.remove('company-description__text-container--full');
    openCompanyDescriptionTextButton.classList.remove('company-description__button-full-open--hidden');
    closeCompanyDescriptionTextButton.classList.add('company-description__button-full-close--hidden');
});
