// Technology paths
let techPaths = {
    "JavaScript": "media/tech/js-logo.png",
    "HTML": "media/tech/html-logo.png",
    "CSS": "media/tech/css-logo.png",
    "AdobeXD": "media/tech/adobe-logo.png",
    "WordPress": "media/tech/wordpress-logo.png",
    "Shopify": "media/tech/shopify-logo.png",
    "Figma": "media/tech/figma-logo.png",
    "Python": "media/tech/python-logo.png"
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
