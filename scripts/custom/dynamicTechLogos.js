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
// DEUBG -> looking for 'md' or 'de', etc.
        console.log('techID:', techID);
        let techContainer = customElement({
            type: 'div',
            className: 'tech-logo-container ' + techID + 'ColorPale_light'
        });
        let techIcon = customElement({
            type: 'img',
            className: 'tech-logo',
            id: entry + '-logo',
            src: techPaths[entry],
            alt: entry + ' Logo'
        });
        techContainer.appendChild(techIcon);
        container.appendChild(techContainer);
    });
}