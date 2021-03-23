// Manual changing of styles based on switch setting
// @todo change manual updates to classes change

function modeSwitch() {
    let mode_switch = document.getElementById('modeSwitch');
    mode_switch.addEventListener('change', function () {
        if (this.checked) {
            // Change all elements with '.bgColor_light' classname
            changeColorMode('.bgColor_light');
        } else {
            // Change all element with '.<>_dark' classname
            changeColorMode('.bgColor_dark');
        }
    });
}

// Get current selector color, then get all elements w/ selector.
// Replace current color with opposite
function changeColorMode(selector) {
    let currentColor = selector.split('_')[1];
    try {
        let domElements = document.querySelector(selector).classList;
        domElements.replace(selector.substring(1), selector.split('_')[0].substring(1)+'_'+  getOppositeColor(currentColor));
    } catch (e) {
        console.log("Could not change " + currentColor + " mode to " + getOppositeColor(currentColor) + " mode.");
    }
}

// Returns opposite color to input
function getOppositeColor(currentColor) {
    return (currentColor === 'light') ? 'dark' : 'light';
}
