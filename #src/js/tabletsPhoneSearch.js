{
    let searchForm = document.querySelector('.search-form');
    let searchFormInput = document.querySelector('.search-form__input');
    let phoneSearchButton = document.querySelector('.phone-search-button');
    let searchFormButton = document.querySelector('.search-form__button');

    phoneSearchButton.addEventListener('click', function () {
        searchForm.classList.add('search-form-run-out');
        searchFormInput.focus();
        phoneSearchButton.classList.add('display-none-class');
    });

    searchFormInput.addEventListener('blur', function (e) {
        let relTarget = e.relatedTarget;
        if (searchFormButton == relTarget){
            searchFormInput.value = '';
        }
        searchForm.classList.remove('search-form-run-out');
        phoneSearchButton.classList.remove('display-none-class');
    });
}