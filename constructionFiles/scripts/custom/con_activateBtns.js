

// Add any event to a button, given an id
const addEventToBtn = (elId, eventType, eventFunc) => {
    addEventListenerWithId(elId, eventType, eventFunc)
}

// Append elements to a given ID
const appendToElement = (elId, elementDetails) => {
    let elementContainer = document.getElementById(elId);
    elementContainer.appendChild(customElement(
        elementDetails
    ));
    return elementContainer;
}

// ACTIVATE ALL BTNS IN DOM
const activateBtns = () => {
    // BACK TO TOP FIXED BTN
    //activateToTopFixedBtn();

    // BACK TO TOP FLOATING BTN
    activateToTopFloatingBtn();
}


// Code to create Fixed Back to top Btn
// const activateToTopFixedBtn = () => {
//     // Append btn details to btn container
//     appendToElement(
//         'toTop-container',
//         {
//             domType: 'button',
//             id: 'toTop-btn-container',
//             children: {
//                 0: {
//                     domType: 'img',
//                     id: 'toTop-icon',
//                     src: '../media/icons/arrow-up.svg'
//                 },
//                 1: {
//                     domType: 'span',
//                     id: 'toTop-text',
//                     innerHTML: 'Back to Top'
//                 }
//             }
//         }
//     );
//
//     // Function to move screen back to top of page
//     const backToTop = () => {
//         document.body.scrollTop = 0; // Safari
//         document.documentElement.scrollTop = 0 // Chrome, Firefox, IE, Opera
//     }
//
//     // Add event to static 'back to top' btn
//     addEventToBtn('toTop-btn-container', 'click', backToTop)
// }




// Back To Top Floating Button
const activateToTopFloatingBtn = () => {

    // Add child to element
    appendToElement('toTopFloating-container',
        {
            domType: 'img',
            id: 'toTop-icon',
            src: '../media/icons/arrow-up.svg'
        });

    // Enable element toggle
    toggleAppearAfterXScroll('toTopFloating-container', 700)

}

// Toggle element appear after x scroll, with default fadeSpeed
const toggleAppearAfterXScroll = (elId, scrollDistance, fadeSpeed=400) => {
    //credits: https://stackoverflow.com/questions/11340789/make-an-element-visible-only-when-scrolled-down-to-px
    let isVisible = false;
    $(window).scroll(function(){
        let shouldBeVisible = $(window).scrollTop()>scrollDistance;
        if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $('#'+elId).fadeIn(fadeSpeed);
        } else if (isVisible && !shouldBeVisible) {
            isVisible = false;
            $('#'+elId).fadeOut(fadeSpeed);
        }
    });

    $('#'+elId).click(function(){
        $(window).scrollTop(0);
    });
}
