{
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
        addEventListener("keydown", setNewNameEvent);

    })


    function setNewNameEvent(e) {
        if (e.key == 'Enter' || +e.keyCode == 13) {
            blurUserNameUnput();
        }
    }

    changeNameInput.addEventListener('blur', blurUserNameUnput);


    function blurUserNameUnput() {
        let NameValue = changeNameInput.value;
        if (!NameValue) {
            changeNameInput.classList.add('input-error');
        } else {
            localStorage.setItem('userName', NameValue);
            userNametoChange.innerHTML = NameValue;
            changeNameInput.classList.add('display-none-class');
            userNametoChange.classList.remove('display-none-class');
            removeEventListener("keydown", setNewNameEvent);
        }
    }
}