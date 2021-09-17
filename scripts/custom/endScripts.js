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



function addTooltip() {
    $(document).ready(function() {
        $(".md-tech-logo-item").tooltipster({
            content: "I'm a tooltip :)"
        });
    });
}
