let deviceList = {
    "md": {
        "tablet": {
            "homepage": {
                path: "md-tablet-homepage.png",
                alt: "Movie Dashboard Homepage Tablet Mockup"
            }
        },
        "phone": {
            "watchProviders": {
                path: "md-phone-watchProviders.png",
                alt: "Movie Dashboard Watch Providers Phone Mockup"
            },
            "awards": {
                path: "md-phone-awards.png",
                alt: "Movie Dashboard Awards & Nominations Phone Mockup"
            }
        }
    },
    "de": {
        "laptop": {
            "reportPurchase": {
                path: "de-laptop-reportPurchase.png",
                alt: "Diligent Eyey - Report Purchase Page"
            }
        },
        "desktop": {
            "homepage": {

            }
        },
        "phone": {

        }
    }
};

let mediaPaths = {
    "phone": "media/device/phone/",
    "tablet": "media/device/tablet/",
    "laptop": "media/device/laptop/",
    "desktop": "media/device/desktop/"
};

// Populate devices in dom
function populateDevice() {
    // Get all containers with 'device' classname
    let deviceContainers = document.getElementsByClassName('device');

    Array.from(deviceContainers).forEach(container => {
            // Get container id
            let deviceID = container.id.substring(0,2);
            let deviceType = container.id.split('-')[1];
            // Check if id in list
            if (deviceID in deviceList) {
                // Get individual container
                // Loop through all entries of device type, creating img w/ attributes
                for (const [elName, elData] of Object.entries(deviceList[deviceID][deviceType])) {
                    let deviceElement = document.createElement('img');      // Creat img tag
                    deviceElement.className = deviceType;                   // Add attributes
                    deviceElement.id = deviceID + '-' + deviceType + '-' + elName;
                    deviceElement.src = mediaPaths[deviceType] + deviceID + '-' + deviceType + '-' + elName + '.png';
                    deviceElement.alt = elData.alt;
                    container.appendChild(deviceElement);                   // Append to container
                }
            }
    });
} // END: populateTech