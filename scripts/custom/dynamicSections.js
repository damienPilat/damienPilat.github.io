// let sectionDetails = {
//     "md": {
//         device: {
//             "tablet": {
//                 "homepage": {
//                     alt: "Movie Dashboard Homepage Tablet Mockup"
//                 }
//             },
//             "phone": {
//                 "watchProviders": {
//                     alt: "Movie Dashboard Watch Providers Phone Mockup"
//                 },
//                 "awards": {
//                     alt: "Movie Dashboard Awards & Nominations Phone Mockup"
//                 }
//             }
//         },
//         tech: ["JS", "HTML", "CSS", "AdobeXD"],
//         structure: {
//             0: {
//                 type: 'div',
//                 className: 'sections flex',
//                 id: 'md-container',
//                 content: null,
//                 children: {
//                     0: {
//                         type: 'div',
//                         className: 'desc col-3',
//                         id: null,
//                         content: null,
//                         children: {
//                             0: {
//                                 type: 'h2',
//                                 className: 'sectionTitle',
//                                 id: null,
//                                 content: 'Movie Dashboard',
//                                 children: null
//                             },
//                             1: {
//                                 type: 'p',
//                                 className: 'desc-text',
//                                 id: null,
//                                 content: "Interactive dashboard of the all-time highest grossing movies, automatically updated through API calls, and made responsive for all devices. Built in pure HTML/CSS, made interactive with JavaScript, and created custom artwork with Adobe XD.",
//                                 children: null
//                             }
//                         },
//                     },
//                     1: {
//                         type: 'div',
//                         className: 'device tablet col-6',
//                         id: 'md-tablet-container',
//                         content: null,
//                         children: null
//                     },
//                     2: {
//                         type: 'div',
//                         className: 'col-3',
//                         id: 'media-tech',
//                         content: null,
//                         children: {
//                             0: {
//                                 type: 'div',
//                                 className: 'device',
//                                 id: 'md-phone-container',
//                                 content: null,
//                                 children: null
//                             },
//                             1: {
//                                 type: 'div',
//                                 className: 'tech flex',
//                                 id: 'md-tech',
//                                 content: null,
//                                 children: null
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     "de": {
//         device: {
//             "laptop": {
//                 "reportPurchase": {
//                     alt: "Diligent Eye - Report Purchase Page"
//                 }
//             },
//             "desktop": {
//                 "homepage": {
//                     alt: "Diligent Eye - Homepage"
//                 }
//             },
//             "phone": {
//                 "checkout": {
//                     alt: "Diligent Eye - Checkout"
//                 }
//             }
//         },
//         tech: ["JS", "WordPress", "Shopify"],
//         structure: {
//             0: {
//                 type: 'div',
//                 className: 'sections',
//                 id: 'de-container',
//                 content: null,
//                 children: {
//                     0: {
//                         type: 'div',
//                         className: 'row',
//                         id: null,
//                         content: null,
//                         children: {
//                             0: {
//                                 type: 'div',
//                                 className: 'desc col-6',
//                                 id: null,
//                                 content: null,
//                                 children: {
//                                     0: {
//                                         type: 'h2',
//                                         className: 'subtitle',
//                                         id: '',
//                                         content: 'Member space & E-commerce - Diligent Eye',
//                                         children: null
//                                     },
//                                     1: {
//                                         type: 'p',
//                                         className: 'desc-text',
//                                         id: '',
//                                         content: 'Design and Implementation of Diligent Eye’s Member space, including product management and e-commerce integration. Built on WordPress platform, with custom JavaScript.',
//                                         children: null
//                                     }
//                                 }
//                             },
//                             1: {
//                                 type: 'div',
//                                 className: 'col-6',
//                                 id: null,
//                                 content: null,
//                                 children: {
//                                     0: {
//                                         type: 'div',
//                                         className: 'device',
//                                         id: 'de-laptop-container',
//                                         content: null,
//                                         children: null
//                                     }
//                                 }
//                             }
//                         },
//                     },
//                     1: {
//                         type: 'div',
//                         className: 'row',
//                         id: null,
//                         content: null,
//                         children: {
//                             0: {
//                                 type: 'div',
//                                 className: 'col-8',
//                                 id: null,
//                                 content: null,
//                                 children: {
//                                     0: {
//                                         type: 'div',
//                                         className: 'device',
//                                         id: 'de-desktop-container',
//                                         content: null,
//                                         children: null
//                                     }
//                                 }
//                             },
//                             1: {
//                                 type: 'div',
//                                 className: 'col-2',
//                                 id: null,
//                                 content: null,
//                                 children: {
//                                     0: {
//                                         type: 'div',
//                                         className: 'device',
//                                         id: 'de-phone-container',
//                                         content: null,
//                                         children: null
//                                     }
//                                 }
//                             },
//                             2: {
//                                 type: 'div',
//                                 className: 'col-2',
//                                 id: null,
//                                 content: null,
//                                 children: {
//                                     0: {
//                                         type: 'div',
//                                         className: 'tech flex',
//                                         id: 'de-tech',
//                                         content: null,
//                                         children: null
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };

let sectionDetails;
$.getJSON('scripts/sectionDetails.json', (json) => {
    sectionDetails = json;
});

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
        element.innerText = elementDetails.content;
    }

    if (elementDetails.children !== null) {
        createChildren(elementDetails.children, element);
    }
    return element;
}