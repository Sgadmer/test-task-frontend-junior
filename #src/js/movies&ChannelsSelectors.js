{
    let moviesChannelsSelectors = document
        .querySelectorAll('.selector__btn');

    let moviesAndChannelsBlocks = document
        .querySelectorAll('.moviesAndChannelsBlocks');

    let customScrollBar = document
        .querySelector('#channelsScrollBar');
    let customScrollBarHR = document
        .querySelector('#channelsScrollBar-hr');

    let selectorIndex;



    for (let i = 0; i < moviesChannelsSelectors.length; i++) {
        moviesChannelsSelectors[i].addEventListener('click', changeTab);
    }


    function changeTab(e) {

        let currentTarget = e.currentTarget;
        selectorIndex = +currentTarget.getAttribute('data-selector');

        document
            .querySelector('.section-selected')
            .classList
            .remove('section-selected');

        document
            .querySelector(`.tab--${selectorIndex}`)
            .classList
            .add('section-selected');

        document
            .querySelector('.selector__btn_selected')
            .classList
            .remove('selector__btn_selected');

        currentTarget
            .classList
            .add('selector__btn_selected');

        if (selectorIndex == 2) {
            customScrollBar.classList.remove('display-none-class');
            customScrollBarHR.classList.remove('display-none-class');
        } else {
            customScrollBar.classList.add('display-none-class');
            customScrollBarHR.classList.add('display-none-class');
        }

    }

    window.addEventListener('resize', hideCustomScrollBar)

    function hideCustomScrollBar() {

        if (selectorIndex != 2) {
            customScrollBar.classList.add('display-none-class');
            customScrollBarHR.classList.add('display-none-class');
        }

    }


}