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
        let deviceLink = createDeviceLink(deviceID, deviceType, elData);
        let deviceImage = createDeviceImage(deviceID, deviceType, elData);

        // Append elements
        deviceLink.appendChild(deviceImage);
        container.appendChild(deviceLink);
    });
}


// Return Device Link element with className/target/href
function createDeviceLink(deviceID, deviceType, elData) {
    let deviceLink = document.createElement('a');
    deviceLink.className = deviceType + '-link';
    deviceLink.target = "_blank";
    deviceLink.href = sectionDetails[deviceID].website + '#' + elData;
    return deviceLink;
}

// Return Device Image element with className/id/src/dynamic Alt
function createDeviceImage(deviceID, deviceType, elData) {
    let deviceImage = document.createElement('img');
    deviceImage.className = deviceType;
    deviceImage.id = deviceID + '-' + deviceType + '-' + elData;
    deviceImage.src = mediaPaths[deviceType] + deviceID + '-' + deviceType + '-' + elData + '.png';
    deviceImage.alt = makeAlt(deviceID, elData, deviceType);
    return deviceImage;
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