let mediaPaths = {
    "phone": "media/device/phone/",
    "tablet": "media/device/tablet/",
    "laptop": "media/device/laptop/",
    "desktop": "media/device/desktop/"
};

// Retrieve all dom elements with className 'device'
// Loop through all elements:
// Populate with all device images if any
function populateDevice() {
    let deviceContainers = document.getElementsByClassName('device');

    Array.from(deviceContainers).forEach(container => {
        let [deviceID, deviceType] = container.id.split('-');
        if (deviceID in sectionDetails) {
            createImageElement(deviceID, deviceType, container);
        }
    });
} // END: populateTech


// Looping through all deviceType entries,
// Create a device link tag & device img tag, append each other and then to container
function createImageElement (deviceID, deviceType, container) {
    sectionDetails[deviceID]['device'][deviceType].forEach(elData => {
        // Create Link and Image element
        let deviceLink = customElement({
            domType: 'a',
            className: deviceType + '-link',
            target: '_blank',
            href: sectionDetails[deviceID].website + '#' + elData
        });
        let deviceImage = customElement({
            domType: 'img',
            className: deviceType,
            id: deviceID + '-' + deviceType + '-' + elData,
            src: mediaPaths[deviceType] + deviceID + '-' + deviceType + '-' + elData + '.png',
            alt: makeAlt(deviceID, elData, deviceType)
        });

        // Append elements
        deviceLink.appendChild(deviceImage);
        container.appendChild(deviceLink);
    });
}


// Create Alternative Text for Images
// Retrieve current section container,
// look for 'sectionTitle' class within all child, get inner text and use to build alt text phrase.
function makeAlt(deviceID, elName, deviceType) {
    let sectionContainer = document.querySelector('#' + deviceID + '-container');
    let sectionTitleNode = sectionContainer.querySelectorAll('.sectionTitle');
    let sectionTitle = sectionTitleNode[0].innerText;
    return sectionTitle + ': ' + deviceType + ' mockup - ' + elName + ' view';
}
