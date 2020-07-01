import inputValidator from './inputValidator'
{
    let userNametoChange = document.querySelector('.userName');
    let changeNameInput = document.querySelector('.user-name-input')

    userNametoChange.addEventListener('click', () => {
        changeNameInput.value = userNametoChange.textContent;
        changeNameInput.classList.remove('display-none-class');
        userNametoChange.classList.add('display-none-class');
        changeNameInput.focus();
    })

    changeNameInput.addEventListener('focus', () => {
        addEventListener("keydown", setNewNameEvent);
    })
    changeNameInput.addEventListener('input', inputValidator(false, 13));


    function setNewNameEvent(e) {
        if (e.key == 'Enter' || +e.keyCode == 13) {
            changeNameInput.blur();
        }
    }
    changeNameInput.addEventListener('blur', inputValidator(false, 13));
    changeNameInput.addEventListener('blur', blurUserNameUnput);


    function blurUserNameUnput() {
        let NameValue =
            changeNameInput
                .value
                .trim();
        if (NameValue) {
            localStorage.setItem('userName', NameValue);
            userNametoChange.innerHTML = NameValue;
            changeNameInput.classList.add('display-none-class');
            userNametoChange.classList.remove('display-none-class');
            removeEventListener("keydown", setNewNameEvent);
        }
    }
}