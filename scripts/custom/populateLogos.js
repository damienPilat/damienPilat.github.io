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

            // Loop through tech for this element
            sectionDetails[techID]['tech'].forEach(entry => {
                let techElement = document.createElement('img');    // Creat img tag
                techElement.className = "tech-logo";                // Add attributes
                techElement.id = entry + '-logo';
                techElement.src = techPaths[entry];
                techElement.alt = entry + ' Logo';
                container.appendChild(techElement);            // Append to container
            });
        }
    });
} // END: populateTech
