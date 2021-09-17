const activateBtns = () => {
    // BackToTop From Footer
    let btnContainer = document.getElementById('toTop-container');
    // Append btn & img
    btnContainer.appendChild(customElement({
        domType: 'button',
        id: 'toTop-btn-container',
        children: {
            0: {
                domType: 'img',
                id: 'toTop-icon',
                src: '../media/icons/arrow-up.svg'
            },
            1: {
                domType: 'span',
                id: 'toTop-text',
                innerHTML: 'Back to Top'
            }
        }
    }));
    // Back to top function
    const backToTop = () => {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0 // Chrome, Firefox, IE, Opera
    }
    // Add 'click' event listener to btn#toTop w/ func backToTop()
    addEventListenerWithId('toTop-btn-container', 'click', backToTop);
}


// Back To Top Floating Button
// Activate sticky header correctly
function activateStickyHeader() {
    //credits: https://stackoverflow.com/questions/11340789/make-an-element-visible-only-when-scrolled-down-to-px

    let isVisible = false;

    $(window).scroll(function(){
        let shouldBeVisible = $(window).scrollTop()>700;
        if (shouldBeVisible && !isVisible) {
            isVisible = true;
            $('#stickyHeader').fadeIn(400);
        } else if (isVisible && !shouldBeVisible) {
            isVisible = false;
            $('#stickyHeader').fadeOut(400);
        }
    });

    $('#stickyHeader').click(function(){
        $(window).scrollTop(0);
    });
}
