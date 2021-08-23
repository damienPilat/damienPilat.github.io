function initiateEndScripts() {
    // Create sections
    populateSections();
    // Populate devices
    populateDevice();
    // Populate tech for each section
    populateTech();
    // Enable pallet mode (light/dark)
    modeSwitch();
    // Create and Add EventListeners to Btns
    activateBtns();

    // Test: Tooltip library
    addTooltip();

    collapsibleNavBar();
}

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
                src: 'menu-icon-v1.svg'
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

function addTooltip() {
    $(document).ready(function() {
        $(".md-tech-logo-item").tooltipster({
            content: "I'm a tooltip :)"
        });
    });
}
