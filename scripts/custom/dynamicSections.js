let sectionDetails = {
    "md": {
        device: {
            "tablet": {
                "homepage": {
                    alt: "Movie Dashboard Homepage Tablet Mockup"
                }
            },
            "phone": {
                "watchProviders": {
                    alt: "Movie Dashboard Watch Providers Phone Mockup"
                },
                "awards": {
                    alt: "Movie Dashboard Awards & Nominations Phone Mockup"
                }
            }
        },
        tech: ["JS", "HTML", "CSS", "AdobeXD"],
        structure: {
            0: {
                type: 'div',
                className: 'sections flex',
                id: 'md-container',
                content: null,
                children: {
                    0: {
                        type: 'div',
                        className: 'desc col-3',
                        id: null,
                        content: null,
                        children: {
                            0: {
                                type: 'h2',
                                className: 'sectionTitle',
                                id: null,
                                content: 'Movie Dashboard',
                                children: null
                            },
                            1: {
                                type: 'p',
                                className: 'desc-text',
                                id: null,
                                content: "Interactive dashboard of the all-time highest grossing movies, automatically updated through API calls, and made responsive for all devices. Built in pure HTML/CSS, made interactive with JavaScript, and created custom artwork with Adobe XD.",
                                children: null
                            }
                        },
                    },
                    1: {
                        type: 'div',
                        className: 'device tablet col-6',
                        id: 'md-tablet-container',
                        content: null,
                        children: null
                    },
                    2: {
                        type: 'div',
                        className: 'col-3',
                        id: 'media-tech',
                        content: null,
                        children: {
                            0: {
                                type: 'div',
                                className: 'device',
                                id: 'md-phone-container',
                                content: null,
                                children: null
                            },
                            1: {
                                type: 'div',
                                className: 'tech flex',
                                id: 'md-tech',
                                content: null,
                                children: null
                            }
                        }
                    }
                }
            }
        }
    },
    "de": {
        device: {
            "laptop": {
                "reportPurchase": {
                    alt: "Diligent Eye - Report Purchase Page"
                }
            },
            "desktop": {
                "homepage": {
                    alt: "Diligent Eye - Homepage"
                }
            },
            "phone": {
                "checkout": {
                    alt: "Diligent Eye - Checkout"
                }
            }
        },
        tech: ["JS", "WordPress", "Shopify"],
        structure: {
            0: {
                type: 'div',
                className: 'sections',
                id: 'de-container',
                content: null,
                children: {
                    0: {
                        type: 'div',
                        className: 'row',
                        id: null,
                        content: null,
                        children: {
                            0: {
                                type: 'div',
                                className: 'desc col-6',
                                id: null,
                                content: null,
                                children: {
                                    0: {
                                        type: 'h2',
                                        className: 'subtitle',
                                        id: '',
                                        content: 'Member space & E-commerce - Diligent Eye',
                                        children: null
                                    },
                                    1: {
                                        type: 'p',
                                        className: 'desc-text',
                                        id: '',
                                        content: 'Design and Implementation of Diligent Eye’s Member space, including product management and e-commerce integration. Built on WordPress platform, with custom JavaScript.',
                                        children: null
                                    }
                                }
                            },
                            1: {
                                type: 'div',
                                className: 'col-6',
                                id: null,
                                content: null,
                                children: {
                                    0: {
                                        type: 'div',
                                        className: 'device',
                                        id: 'de-laptop-container',
                                        content: null,
                                        children: null
                                    }
                                }
                            }
                        },
                    },
                    1: {
                        type: 'div',
                        className: 'row',
                        id: null,
                        content: null,
                        children: {
                            0: {
                                type: 'div',
                                className: 'col-8',
                                id: null,
                                content: null,
                                children: {
                                    0: {
                                        type: 'div',
                                        className: 'device',
                                        id: 'de-desktop-container',
                                        content: null,
                                        children: null
                                    }
                                }
                            },
                            1: {
                                type: 'div',
                                className: 'col-2',
                                id: null,
                                content: null,
                                children: {
                                    0: {
                                        type: 'div',
                                        className: 'device',
                                        id: 'de-phone-container',
                                        content: null,
                                        children: null
                                    }
                                }
                            },
                            2: {
                                type: 'div',
                                className: 'col-2',
                                id: null,
                                content: null,
                                children: {
                                    0: {
                                        type: 'div',
                                        className: 'tech flex',
                                        id: 'de-tech',
                                        content: null,
                                        children: null
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

function populateSections() {
    // Loop through entries in section list
    for (let sectionID in sectionDetails) {
        // Create main container
        // let container = document.createElement('div');
        // container.className = "sections flex";
        // container.id = sectionID + '-container';

        let domContainer = document.getElementById('content');

        let sectionStructure = sectionDetails[sectionID].structure;
        for (let firstDepthElements in sectionStructure) {
            // Append elements to container
            domContainer.appendChild(createElement(sectionStructure[firstDepthElements]));
        }
        // append to dom
        // document.getElementById('content').appendChild(container);
        console.log("container:", domContainer);
    }

} // END: populateSections

function createChildren(children, container) {
    for (let childrenID in children) {
        container.append(createElement(children[childrenID]))
    }
}

function createElement(elementDetails) {
    // Create Dom Element
    let element = document.createElement(elementDetails.type);
    element.className = elementDetails.className;

    if (elementDetails.id !== null) {
        element.id = elementDetails.id;
    }

    // Add content if exists
    if (elementDetails.content !== null) {
        element.innerText = elementDetails.content;
    }
    // Add children if exists
    if (elementDetails.children !== null) {
        createChildren(elementDetails.children, element);
    }
    return element;
}

// Return type of dom element based on ID
function createElementById(elementDetails) {
    // List of specific entries
    let elementToId = {
        title: {
            type: 'h2',
            class: 'sectionTitle'
        },
        desc: {
            type: 'p',
            class: 'desc-text'
        }
    };

    // Check if element is in above list, add details accordingly & RETURN
    if (elementDetails[0] in elementToId) {
        let element = document.createElement(elementToId[elementDetails[0]].type);
        element.className = elementToId[elementDetails[0]].class;
        return element;
    }

    // Else, create element, adding flex to tech element & RETURN
    let element = document.createElement('div');
    element.className = (elementDetails[0] === 'tech') ? 'tech flex' : elementDetails[0];
    element.id = elementDetails[1];
    return element;
}