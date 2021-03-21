function populateSections() {
    // Loop through entries in section list
    for (let sectionID in sectionDetails) {
        // Create Section Container
        let domContainer = document.getElementById('content');

        // Get Section Structure
        let sectionStructure = sectionDetails[sectionID].structure;
        // Loop through structure, recursively adding sections
        for (let firstDepthElements in sectionStructure) {
            // Append elements to container
            domContainer.appendChild(createElement(sectionStructure[firstDepthElements]));
        }
    }

} // END: populateSections

// Recursively create all children of an element
function createChildren(children, container) {
    for (let childrenID in children) {
        container.append(createElement(children[childrenID]))
    }
}

// Create a DOM element based on the json structure
function createElement(elementDetails) {
    // Create Dom Element
    let element = document.createElement(elementDetails.type);
    element.className = elementDetails.className;

    // Add id, context and children IF exists
    if (elementDetails.id !== null) {
        element.id = elementDetails.id;
    }

    if (elementDetails.content !== null) {
        element.innerText = elementDetails.content.en;
    }

    if (elementDetails.children !== null) {
        createChildren(elementDetails.children, element);
    }
    return element;
}