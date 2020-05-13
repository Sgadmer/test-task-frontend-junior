let userNametoChange = document.querySelector('.userName');
let changeNameInput = document.querySelector('.user-name-input')

userNametoChange.addEventListener('click', function () {
    changeNameInput.value = userNametoChange.innerHTML;
    changeNameInput.classList.remove('display-none-class');
    userNametoChange.classList.add('display-none-class');
    changeNameInput.focus();
})

changeNameInput.addEventListener('focus', function () {

        changeNameInput.classList.remove('input-error');

})

changeNameInput.addEventListener('blur', function () {

    let NameValue = changeNameInput.value;
    if (!NameValue) {
        changeNameInput.classList.add('input-error');
    }else{
        localStorage.setItem('userName', NameValue);
        userNametoChange.innerHTML = NameValue;
        changeNameInput.classList.add('display-none-class');
        userNametoChange.classList.remove('display-none-class');
    }
})