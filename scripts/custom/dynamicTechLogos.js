// Technology paths
let techPaths = {
    "JavaScript": "media/tech/js-logo.svg",
    "HTML": "media/tech/html-logo.svg",
    "CSS": "media/tech/css-logo.svg",
    "AdobeXD": "media/tech/adobe-logo.svg",
    "WordPress": "media/tech/wordpress-logo.svg",
    "Shopify": "media/tech/shopify-logo.svg",
    "Figma": "media/tech/figma-logo.svg",
    "Python": "media/tech/python-logo.svg"
};

function populateTech() {
    // Get all containers with 'tech' classname
    let techContainers = document.getElementsByClassName('tech');

    // Loop through all containers
    Array.from(techContainers).forEach(container => {
        // Get container id
        let techID = container.id.split('-')[0];
        // Check if id in list
        if (techID in sectionDetails) {
            createTechLogo(techID, container);
            // Loop through tech for this element

        }
    });
} // END: populateTech


// For each element in 'Tech' section of dict, append to container custom element
function createTechLogo(techID, container) {
    sectionDetails[techID]['tech'].forEach(entry => {
        container.appendChild(customElement_Global({
            type: 'img',
            className: 'tech-logo',
            id: entry + '-logo',
            src: techPaths[entry],
            alt: entry + ' Logo'
        }));
    });
}


// Function to create a custom element with any possible value used in project
function customElement_Global(config) {
    let elementDetails = Object.assign({
            type: null,
            className: null,
            id: null,
            src: null,
            alt: null,
            target: null,
            href: null,
            innerText: null,
            children: null
        },
        config
    );

    return populateElement(elementDetails);
}

// Populate DOM element with all non NULL values
function populateElement(elementDetails) {
    let element = document.createElement(elementDetails.type);
    for (const [key, value] of Object.entries(elementDetails)) {
        if (value) {
            element[key] = value;
        }
    }
    return element
}