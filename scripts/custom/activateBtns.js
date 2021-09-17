const activateBtns = () => {
    // BackToTop From Footer
    let btnContainer = document.getElementById('toTop-container');
    console.log("btnContainer:", btnContainer);
    // Append btn & img
    btnContainer.appendChild(customElement({
        domType: 'button',
        id: 'toTop-btn',
        children: {
            0: {
                domType: 'img',
                src: '../media/icons/arrow-up.svg'
            }
        }
    }));
    // Back to top function
    const backToTop = () => {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0 // Chrome, Firefox, IE, Opera
    }
    // Add 'click' event listener to btn#toTop w/ func backToTop()
    addEventListenerWithId('toTop-btn', 'click', backToTop);
}
