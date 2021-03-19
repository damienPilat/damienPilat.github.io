// Technology List for eachsection
let techList = {
    "md": ["JS", "HTML", "CSS", "AdobeXD"],
    "de": ["JS", "WordPress", "Shopify"]
};

// Technology data (path and alt text)
let techData = {
    "JS": {
        path: "media/tech/js-logo.png",
        alt: "JavaScript Logo"
    },
    "HTML": {
        path: "media/tech/html-logo.png",
        alt: "HTML Logo"
    },
    "CSS": {
        path: "media/tech/css-logo.png",
        alt: "CSS Logo"
    },
    "AdobeXD": {
        path: "media/tech/adobe-logo.png",
        alt: "Adobe XD Logo"
    },
    "WordPress": {
        path: "media/tech/wordpress-logo.png",
        alt: "WordPress Logo"
    },
    "Shopify": {
        path: "media/tech/shopify-logo.png",
        alt: "Shopify Logo"
    },
    "Figma": {
        path: "media/tech/figma-logo.png",
        alt: "Figma Logo"
    },
    "Python": {
        path: "media/tech/python-logo.png",
        alt: "Python Logo"
    },
};

function populateTech() {
    // Get all containers with 'tech' classname
    let techContainers = document.getElementsByClassName('tech');

    // Loop through all containers
    Array.from(techContainers).forEach(container => {
        // Get container id
        let techID = container.id.substring(0,2);
        // Check if id in list
        if (techID in techList) {
            // Get individual container
            let techDomElement = container;
            // Loop through tech for this element
            techList[techID].forEach(entry => {
                let techElement = document.createElement('img');    // Creat img tag
                techElement.className = "tech-logo";                // Add attributes
                techElement.id = entry + '-logo';
                techElement.src = techData[entry].path;
                techElement.alt = techData[entry].alt;
                techDomElement.appendChild(techElement);            // Append to container
            });
        }
    });
} // END: populateTech

