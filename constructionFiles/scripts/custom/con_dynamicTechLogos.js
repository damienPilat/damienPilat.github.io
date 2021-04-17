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
        if (techID in con_sectionDetails) {
            createTechLogo(techID, container);
            // Loop through tech for this element

        }
    });
} // END: populateTech


// For each element in 'Tech' section of dict, append to container custom element
function createTechLogo(techID, container) {
    con_sectionDetails[techID]['tech'].forEach(techType => {
        container.appendChild(createTechLogoElements(techType, techID));
    });
}


// Create a container & append tech Icon and Title to it
// Returns container with all elements
function createTechLogoElements(techType, techID) {
    let techContainer = customElement({
        type: 'div',
        className: 'tech-logo-container'
    });
    let techIcon = customElement({
        type: 'img',
        className: 'tech-logo ' + techID + 'ColorPale_light',
        id: techType + '-logo',
        src: techPaths[techType],
        alt: techType + ' Logo'
    });
    let techTitle = customElement({
        type: 'p',
        className: 'tech-logo-title ' + techID + 'ColorPale_light',
        id: techType + '-title',
        innerHTML: techType
    });
    techContainer.appendChild(techIcon);
    techContainer.appendChild(techTitle);

    return techContainer
}