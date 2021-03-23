// Toggle Light/Dark Mode on Switch click
function modeSwitch() {
    document.getElementById('modeSwitch').addEventListener('change', function () {
        this.checked ? changeColorMode('light') : changeColorMode('dark');
    });
}

// Get DOM element by mode (light/dark), retrieve className, and appropriately update for all elements
function changeColorMode(mode) {
    let domElements = document.querySelectorAll("div[class$='_" + mode + "']");
    Array.from(domElements).forEach(element => {
        element.classList.replace(getModeClassName(element), getModeClassName(element).split('_')[0] + '_' + getOppositeColor(mode));
    });
}

// Retrieves Mode Classname (always the last element in a list of class names)
function getModeClassName(element) {
    return element.className.split(" ").slice(-1)[0];
}

// Toggles the mode options (light <-> dark)
function getOppositeColor(currentColor) {
    return (currentColor === 'light') ? 'dark' : 'light';
}
