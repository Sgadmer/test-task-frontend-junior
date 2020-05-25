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



    // moviesChannelsSelectors.forEach((selector) => {
    //     selector.addEventListener('click', (e) => {
    //         let currentSelector = e.currentTarget;
    //             currentSelectorName = currentSelector.getAttribute('data-selector');
    //         let currentBlockToShow = document.querySelector(`.${currentSelectorName}`);

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
    //             customScrollBarHR.classList.remove('display-none-class');
    //         } else {
    //             customScrollBar.classList.add('display-none-class');
    //             customScrollBarHR.classList.add('display-none-class');
    //         }

    //     });
    // });


    window.addEventListener('resize', hideCustomScrollBar)

    function hideCustomScrollBar() {

        if (currentSelectorName != 'channels') {
            customScrollBar.classList.add('display-none-class');
            customScrollBarHR.classList.add('display-none-class');
        }

    }
}










