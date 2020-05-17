
document.addEventListener("DOMContentLoaded", function () {
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
			input.classList.remove('input-error');

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
			exitUser();
		}


		function loginTrue() {
			modalWrap.classList.add('display-none-class');
			headerLoginButton.classList.add('display-none-class');
			userNameExit.classList.remove('display-none-class');
			if (localStorage.userName) {
				userName.innerHTML = localStorage.userName;
			} else {
				userName.innerHTML = 'Константин К.';
			}


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

	{
		let userNametoChange = document.querySelector('.userName');
		let changeNameInput = document.querySelector('.user-name-input');

		userNametoChange.addEventListener('click', function () {
			changeNameInput.value = userNametoChange.innerHTML;
			changeNameInput.classList.remove('display-none-class');
			userNametoChange.classList.add('display-none-class');
			changeNameInput.focus();
		});

		changeNameInput.addEventListener('focus', function () {

			changeNameInput.classList.remove('input-error');

		});

		changeNameInput.addEventListener('blur', function () {

			let NameValue = changeNameInput.value;
			if (!NameValue) {
				changeNameInput.classList.add('input-error');
			} else {
				localStorage.setItem('userName', NameValue);
				userNametoChange.innerHTML = NameValue;
				changeNameInput.classList.add('display-none-class');
				userNametoChange.classList.remove('display-none-class');
			}
		});
	}

	{
		$(".channels").niceScroll({
			cursorcolor: "#BDBDBD",
			cursorwidth: "4px",
			background: "#f2f2f2",
			autohidemode: "false",
			cursorborder: "none",
			cursorborderradius: 2,
			scrollbarid: 'channelsScrollBar',
		});
	}

	{
		let moviesChannelsSelectors = document
			.querySelectorAll('.selector__btn');

		let moviesAndChannelsBlocks = document
			.querySelectorAll('.moviesAndChannelsBlocks');

		let customScrollBar = document
			.querySelector('#channelsScrollBar');
		let customScrollBarHR = document
			.querySelector('#channelsScrollBar-hr');

		let currentSelectorName;

		//  Код для всех браузеров.
		Array.prototype.forEach.call(
			moviesChannelsSelectors,
			function (selector) {
				selector.addEventListener('click', function (e) {


					let currentSelector = e.currentTarget;
					currentSelectorName = currentSelector.getAttribute('data-selector');
					let currentBlockToShow = document.querySelector("." + currentSelectorName);
					Array.prototype.forEach.call(
						moviesChannelsSelectors,
						function (selector) {
							selector.classList.remove('selector__btn_selected');
							currentSelector.classList.add('selector__btn_selected');
						}
					);

					Array.prototype.forEach.call(
						moviesAndChannelsBlocks,
						function (block) {
							block.classList.remove('display-block-class');
							currentBlockToShow.classList.add('display-block-class');
						}
					);

					if (currentSelectorName == 'channels') {
						customScrollBar.classList.remove('display-none-class');
						customScrollBarHR.classList.remove('display-none-class');
					} else {
						customScrollBar.classList.add('display-none-class');
						customScrollBarHR.classList.add('display-none-class');
					}

				});

			}
		);

		window.addEventListener('resize', hideCustomScrollBar);

		function hideCustomScrollBar() {

			if (currentSelectorName != 'channels') {
				customScrollBar.classList.add('display-none-class');
				customScrollBarHR.classList.add('display-none-class');
			}

		}


		// Код для всех браузеров, кроме IE 
		// Изначально пытался сделать проверку на IE с помощью 
		// let ua = window.navigator.userAgent.toLowerCase();
		// let is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
		//и через if else использовать нужный вариант кода, но код в IE не работал при таком подходе,
		//поэтому  вариант ниже оставлю для примера, как реализовывал бы для новых браузеров



		// moviesChannelsSelectors.forEach((selector) => {
		//     selector.addEventListener('click', (e) => {
		//         let currentSelector = e.currentTarget;
		//         let currentSelectorName = currentSelector.getAttribute('data-selector');
		//         let currentBlockToShow = document
		//             .querySelector(`.${currentSelectorName}`);

		//         moviesChannelsSelectors.forEach((selector) => {
		//             selector.classList.remove('selector__btn_selected');
		//             currentSelector.classList.add('selector__btn_selected');
		//         });

		//         moviesAndChannelsBlocks.forEach((block) => {
		//             block.classList.remove('display-block-class');
		//             currentBlockToShow.classList.add('display-block-class');
		//         });


		//         if (currentSelectorName == 'channels') {
		//             customScrollBar.classList.remove('display-none-class');
		//         } else {
		//             customScrollBar.classList.add('display-none-class');
		//         }

		//     });
		// });
	}

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
			if (searchFormButton == relTarget) {
				searchFormInput.value = '';
			}
			searchForm.classList.remove('search-form-run-out');
			phoneSearchButton.classList.remove('display-none-class');
		});
	}


});
