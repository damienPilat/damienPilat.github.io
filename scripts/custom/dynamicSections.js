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
;

function populateSections() {
    console.log("TestElement:", document.getElementById('content'));

    // Loop through entries in section list
    for (let sectionID in sectionDetails) {
        // Create main container
        let container = document.createElement('div');
        container.className = "sections flex";
        container.id = sectionID + '-container';

        let sectionStructure = sectionDetails[sectionID].structure;
        for (let structureDetails of sectionStructure) {
            // Create each section
            let sectionContainer = document.createElement(structureDetails[0]);
            sectionContainer.className = structureDetails[1];
            sectionContainer.id = structureDetails[2];

            if (structureDetails[3]) {
                // Populate elements in sections, append to section container
                structureDetails[3].forEach(sectionElement => {
                    // Create element, adding text if not a div
                    let element = createElementById(sectionElement);
                    if (element.nodeName !== 'DIV') {
                        element.innerText = sectionDetails[sectionID][sectionElement];
                    }
                    sectionContainer.appendChild(element);
                });
            }
            // Append to section container
            container.appendChild(sectionContainer);
        }
        // append to dom
        document.getElementById('content').appendChild(container);
    }

} // END: populateSections


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