import inputValidator from './inputValidator'
{
    let headerLoginButton = document.querySelector('.header__login-btn');
    let modalWrap = document.querySelector('.modal-wrap');
    let body = document.querySelector('body');
    let storageIsRemember = +localStorage.getItem('is_remember');
    let rememberCheckbox = document.querySelector('#box-1');


    headerLoginButton.addEventListener('click', () => {
        modalWrap.classList.remove('display-none-class');
        addEventListener("keydown", closeModalEvent);
    });


    function closeModalEvent(e) {
        if (e.key == 'Escape' || +e.keyCode == 27) {
            modalWrap.classList.add('display-none-class');
            removeEventListener("keydown", closeModalEvent);
        }
    }

    modalWrap.addEventListener('click', (e) => {
        let target = e.target;
        let modalWrapBlock = e.currentTarget;
        if (target == modalWrapBlock) {
            modalWrap.classList.add('display-none-class');
            removeEventListener("keydown", closeModalEvent);
        }
    });



    let modalLogin = document.querySelector('.modal__login');
    modalLogin.addEventListener('input', inputValidator(false, 13));
    modalLogin.addEventListener('blur', inputValidator(false, 13));


    let modalPassword = document.querySelector('.modal__password');
    modalPassword.addEventListener('input', inputValidator(true, Infinity))
    modalPassword.addEventListener('blur', inputValidator(true, Infinity));



    let modal = document.querySelector('.modal');
    let userNameExit = document.querySelector('.userNameExit');
    let userName = document.querySelector('.userName');

    modal.addEventListener('submit', (e) => {
        e.preventDefault();

        let userLogin = e.target[0].value;
        let userPassword = e.target[1].value;
        // let is_remember = e.target[2].checked;
        let is_remember = true;

        if (!userLogin) {
            modalLogin.classList.add('input-error');
        }

        if (!userPassword) {
            modalPassword.classList.add('input-error');
        }

        if (userLogin && userPassword) {
            if (is_remember) {
                localStorage.setItem('is_remember', 1);
            } else {
                localStorage.setItem('is_remember', 0);
            }

            localStorage.userName = userLogin;
            loginTrue();
        }

    });

    if (storageIsRemember) {
        loginTrue();
    } else {
        exitUser()
    }


    function loginTrue() {
        modalWrap.classList.add('display-none-class');
        headerLoginButton.classList.add('display-none-class');
        userNameExit.classList.remove('display-none-class');
        userName.innerHTML = localStorage.userName;
    }

    let exitButton = document.querySelector('.exit-btn');
    exitButton.addEventListener('click', exitUser);


    function exitUser() {
        localStorage.setItem('is_remember', 0);
        headerLoginButton.classList.remove('display-none-class');
        userNameExit.classList.add('display-none-class');
        modalLogin.value = '';
        modalPassword.value = '';
        rememberCheckbox.checked = false;
    }
}



