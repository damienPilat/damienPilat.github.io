// HELPER FUNCTION FILE

// DOM ELEMENTS
// Function to create a custom element with any possible value used in project
const customElement = (config) => {
    let elementDetails = Object.assign({
            domType: null,
            className: null,
            id: null,
            type: null,
            src: null,
            alt: null,
            target: null,
            href: null,
            innerText: null,
            innerHTML: null,
            children: null
        },
        config
    );

    return populateElement(elementDetails);
}

// Populate DOM element with all non NULL values + Two SPECIAL cases
// @todo: remove if statements
const populateElement = (elementDetails) => {
    let element = document.createElement(elementDetails.domType);
    for (const [key, value] of Object.entries(elementDetails)) {
        if (value) {
            if (key === 'children') {
                createChildren(elementDetails.children, element);
            } else if (key === 'innerText') {
                element.innerText = elementDetails.innerText[currentLanguage];
            } else {
                element[key] = value;
            }
        }
    }
    return element
}

// Recursively create all children of an element
const createChildren = (children, container) => {
    for (let childrenID in children) {
        container.append(customElement(children[childrenID]));
    }
}

// Toggle one className of all DOM elements w/ one given classname
const toggleClassName = (elementClassName, togglingClassName) => {
    let elements = document.getElementsByClassName(elementClassName);
    Array.from(elements).forEach(element => element.classList.toggle(togglingClassName));
}

// Toggle mult classNames of all DOM elements w/ one given className
const toggleClassNames = (elementClassName, arrayTogglingClassNames) => {
    let elements = document.getElementsByClassName(elementClassName);
    Array.from(elements).forEach(element => {
        arrayTogglingClassNames.forEach(togglingClassName => element.classList.toggle(togglingClassName));
    });
}

// Toggles className w/ support for light/darkmode check
// Normal path: Loops through elements -> loops through toggling classNames & toggles
// Extra path: if modeCheck true -> assigns mode value (0:light/1:dark) & toggles accordingly
const toggleClassNamesIfPresent = (elementClassName, arrayTogglingClassNames, modeCheck = false) => {
    let domElements = document.getElementsByClassName(elementClassName);

    let modeIndex = assignModeIndex(modeCheck, domElements, arrayTogglingClassNames[1]);

    Array.from(domElements).forEach(element => {
        if (modeCheck) {
            element.classList.toggle(arrayTogglingClassNames[modeIndex]);
        } else {
            arrayTogglingClassNames.forEach(togglingClassName => {
                element.classList.toggle(togglingClassName);
            });
        }
    });
}

// Assign light/dark Mode Index
// Default: light mode (0)
// Loop check: if darkMode classname appears in any element passed
// Check return: dark mode (1)
// Early exit: if modeCheck null
const assignModeIndex = (modeCheck, elements, darkModeClassName) => {
    if (!modeCheck) {
        return undefined
    }

    let elementArray = Array.from(elements);
    for (let i = 0; i < elementArray.length; i++) {
        let elementClassNameArray = Array.from(elementArray[i].className.split(' '));
        if (elementClassNameArray.includes(darkModeClassName)) {
            return 1;
        }
    }
    return 0;
}

// Checks if a DOM element is a child of a parent
const isChild = (parent, child) => {
    return parent === child.parentElement;
}

// EVENT LISTENERS
// Add Event listener Interface by dom ID
const addEventListenerWithId = (domID, type, func) => {
    let domElement = document.getElementById(domID);
    domElement.addEventListener(type, func);
}

// Add Event listener Interface by dom className
const addEventListenerWithClassName = (domClassName, type, func) => {
    let domElements = document.getElementById(domClassName);
    for (let dom of domElements) {
        dom.addEventListener(type, func);
    }
}
