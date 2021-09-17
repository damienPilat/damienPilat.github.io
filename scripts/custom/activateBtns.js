

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
    // BACK TO TOP FLOATING BTN
    activateToTopFloatingBtn();
}



// Back To Top Floating Button
const activateToTopFloatingBtn = () => {

    // Add child to element
    appendToElement('toTopFloating-container',
        {
            domType: 'img',
            id: 'toTop-icon',
            src: 'media/icons/arrow-up.svg'
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
