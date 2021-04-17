function initiateEndScripts() {
    // Create sections
    populateSections();
    // Populate devices
    populateDevice();
    // Populate tech for each section
    populateTech();
    // Enable pallet mode (light/dark)
    modeSwitch();
    // Allow change content language
// @todo:  Error -> languageSwitch not defined
    languageSwitch();

    // Test: Tooltip library
    addTooltip();
}

function addTooltip() {
    $(document).ready(function() {
        $(".md-tech-logo-item").tooltipster({
            content: "I'm a tooltip :)"
        });
    });
}