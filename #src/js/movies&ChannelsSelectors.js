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



    for (let selector of moviesChannelsSelectors) {
        selector.addEventListener('click', changeTab);
    }

    function changeTab(e) {

        selectorIndex = +e.currentTarget.getAttribute('data-selector');

        document
        .querySelector('.moviesAndChannelsBlocks', 'display-block-class')
        .classList
        .remove('display-block-class');

        document
        .querySelector(`.tab--${selectorIndex}`)
        .classList
        .add('display-block-class');


        if (selectorIndex == 2) {
            customScrollBar.classList.remove('display-none-class');
            customScrollBarHR.classList.remove('display-none-class');
        } else {
            customScrollBar.classList.add('display-none-class');
            customScrollBarHR.classList.add('display-none-class');
        }

        console.log(e);

    }

    window.addEventListener('resize', hideCustomScrollBar)

    function hideCustomScrollBar() {

        if (selectorIndex != 2) {
            customScrollBar.classList.add('display-none-class');
            customScrollBarHR.classList.add('display-none-class');
        }

    }


}