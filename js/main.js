
document.addEventListener('DOMContentLoaded', function(){ 
$(".channels").niceScroll({
    cursorcolor: "#BDBDBD",
    cursorwidth: "4px",
    background: "#f2f2f2",
    autohidemode: "false",
    cursorborder: "none",
    cursorborderradius: 2,
    scrollbarid: 'channelsScrollBar',
});
let moviesChannelsSelectors = document
    .querySelectorAll('.selector__btn');

let moviesAndChannelsBlocks = document
    .querySelectorAll('.moviesAndChannelsBlocks');

let customScrollBar = document
    .querySelector('#channelsScrollBar');


//  Код для всех браузеров.
Array.prototype.forEach.call(
    moviesChannelsSelectors,
    function (selector) {
        selector.addEventListener('click', function (e) {


            let currentSelector = e.currentTarget;
            let currentSelectorName = currentSelector.getAttribute('data-selector');
            let currentBlockToShow = document.querySelector("." + currentSelectorName);
            console.log(currentSelector);
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
            } else {
                customScrollBar.classList.add('display-none-class');
            }

        });

    }
);


    // Код для всех браузеров, кроме IE 
    // Изначально пытался сделать проверку на IE с помощью 
    // let ua = window.navigator.userAgent.toLowerCase();
    // let is_ie = (/trident/gi).test(ua) || (/msie/gi).test(ua);
    //и через if else использовать нужный вариант кода, но код в IE не работал при таком подходе,
    //поэтому  вариант ниже оставлю для примера, как реализовывал бы для новых браузеров



    // moviesChannelsSelectors.forEach((selector) => {
    //     selector.addEventListener('click', (e) => {
    //         let currentSelector = e.currentTarget;
    //         console.log(currentSelector);
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







});