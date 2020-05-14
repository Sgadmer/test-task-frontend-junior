{
    let headerLoginButton = document.querySelector('.header__login-btn');
    let modalWrap = document.querySelector('.modal-wrap');
    let body = document.querySelector('body');
    let storageIsRemember = +localStorage.getItem('is_remember');
    let rememberCheckbox = document.querySelector('#box-1');


    headerLoginButton.addEventListener('click', function () {
        modalWrap.classList.remove('display-none-class');
    });

    modalWrap.addEventListener('click', function (e) {
        let target = e.target;
        let modalWrapBlock = e.currentTarget;
        if (target == modalWrapBlock) {
            modalWrap.classList.add('display-none-class');
        }
    });



    let modalLogin = document.querySelector('.modal__login');
    modalLogin.addEventListener('focus', modalInputFocus);
    modalLogin.addEventListener('blur', modalInputBlur);

    let modalPassword = document.querySelector('.modal__password');
    modalPassword.addEventListener('focus', modalInputFocus);
    modalPassword.addEventListener('blur', modalInputBlur);

    function modalInputFocus(e) {
        let input = e.target;
        inputValue = e.target.value;
        input.classList.remove('input-error')

    }

    function modalInputBlur(e) {
        let input = e.target;
        let inputValue = e.target.value;
        if (inputValue == '') {
            input.classList.add('input-error');
        }
    }

    let modal = document.querySelector('.modal');
    let userNameExit = document.querySelector('.userNameExit');
    let userName = document.querySelector('.userName');

    modal.addEventListener('submit', function (e) {
        e.preventDefault();

        let userLogin = e.target[0].value;
        let userPassword = e.target[1].value;
        let is_remember = e.target[2].checked;

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
        if (localStorage.userName) {
            userName.innerHTML = localStorage.userName;
        } else {
            userName.innerHTML = 'Константин К.'
        }


    }

    let exitButton = document.querySelector('.exit-btn');
    exitButton.addEventListener('click', exitUser);


    function exitUser() {
        localStorage.setItem('is_remember', 0);
        headerLoginButton.classList.remove('display-none-class');
        userNameExit.classList.add('display-none-class');
        modalLogin.value = '';
        modalPassword.value = ''
        rememberCheckbox.checked = false;
    }


}