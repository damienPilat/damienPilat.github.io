// HELPER FUNCTION FILE

// DOM ELEMENTS
// Function to create a custom element with any possible value used in project
function customElement(config) {
    let elementDetails = Object.assign({
            type: null,
            className: null,
            id: null,
            src: null,
            alt: null,
            target: null,
            href: null,
            innerText: null,
            innerHTML: null,
            children: null,
            language: 'en'
        },
        config
    );


    console.log("elementDetails_lang:", elementDetails.language);


    return populateElement(elementDetails, elementDetails.language);
}

// Populate DOM element with all non NULL values + Two SPECIAL cases
// @todo: remove if statements
function populateElement(elementDetails) {
    let element = document.createElement(elementDetails.type);
    for (const [key, value] of Object.entries(elementDetails)) {
        if (value) {
            if (key === 'children') {
                createChildren(elementDetails.children, element);
            } else if (key === 'innerText') {
                element.innerText = elementDetails.innerText[lang];
            } else {
                element[key] = value;
            }
        }
    }
    return element
}

// Recursively create all children of an element
function createChildren(children, container) {
    for (let childrenID in children) {
        container.append(customElement(children[childrenID]));
    }
}