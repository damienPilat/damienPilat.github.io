function initiateEndScripts() {
    // Create sections
    populateSections();
    // Populate devices
    populateDevice();
    // Populate tech for each section
    populateTech();
    // Enable pallet mode (light/dark)
    modeSwitch();
}