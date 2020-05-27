let scrollButtons = document.querySelectorAll('.scrollButton');

for (let i = 0; i < scrollButtons.length; i++) {
    scrollButtons[i].addEventListener('click', scrollPage);
}

function scrollPage(e) {
    let currentTarget = e.currentTarget;
    scrollValue = +currentTarget.getAttribute('data-scroll');
    window.scrollBy(0, scrollValue);
};