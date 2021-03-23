// Manual changing of styles based on switch setting
// @todo change manual updates to classes change

function modeSwitch() {
    let mode_switch = document.getElementById('modeSwitch');
    mode_switch.addEventListener('change', function () {
        if (this.checked) {
            // Change all elements with '.bgColor_light' classname
            changeColorMode('bgColor_light');
            changeColorMode('primaryColor_light');
            changeColorMode('secondaryColor_light');
            changeColorMode('tertiaryColor_light');
        } else {
            // Change all element with '.<>_dark' classname
            changeColorMode('bgColor_dark');
            changeColorMode('primaryColor_dark');
            changeColorMode('secondaryColor_dark');
            changeColorMode('tertiaryColor_dark');
        }
    });
}


// Get current selector color, then get all elements w/ selector.
// Replace current color with opposite
function changeColorMode(selector) {
    let currentColor = selector.split('_')[1];
    try {
        let domElements = document.getElementsByClassName(selector);
        // No element found test
        if (domElements.length < 1) { console.log("Couldn't find Dom element with className " + selector); }

        // Loop through all found elements
        Array.from(domElements).forEach(element => {
            let list = element.classList;
            list.replace(selector, selector.split('_')[0]+'_'+  getOppositeColor(currentColor));
        });
        // domElements.replace(selector.substring(1), selector.split('_')[0].substring(1)+'_'+  getOppositeColor(currentColor));
    } catch (e) {
        console.log("Could not change " + currentColor + " mode to " + getOppositeColor(currentColor) + " mode.");
    }
}


// Returns opposite color to input
function getOppositeColor(currentColor) {
    return (currentColor === 'light') ? 'dark' : 'light';
}
