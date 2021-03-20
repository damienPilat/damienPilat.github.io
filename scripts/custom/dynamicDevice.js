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

    // Loop through all devices the current container
    Array.from(deviceContainers).forEach(container => {
        console.log("containreID:", container.id);
        let deviceID = container.id.split('-')[0];
        let deviceType = container.id.split('-')[1];

        // Check if id in list
        if (deviceID in sectionDetails) {
            // Get individual container
            // Loop through all entries of device type, creating img w/ attributes

            sectionDetails[deviceID]['device'][deviceType].forEach(elData => {
                let deviceElement = document.createElement('img');      // Creat img tag
                deviceElement.className = deviceType;                   // Add attributes
                deviceElement.id = deviceID + '-' + deviceType + '-' + elData;
                deviceElement.src = mediaPaths[deviceType] + deviceID + '-' + deviceType + '-' + elData + '.png';
                deviceElement.alt = makeAlt(deviceID, elData, deviceType);
                container.appendChild(deviceElement);                   // Append to container
            });
        }
    });
} // END: populateTech



/*  Create Alternative Text for Images
    Retrieve current section container,
    look for 'sectionTitle' class within all child, get inner text and use to build alt text phrase.
*/
function makeAlt(deviceID, elName, deviceType) {
    let sectionContainer = document.querySelector('#' + deviceID + '-container');
    let sectionTitleNode = sectionContainer.querySelectorAll('.sectionTitle');
    let sectionTitle = sectionTitleNode[0].innerText;
    return sectionTitle + ': ' + deviceType + ' mockup - ' + elName + ' view';
}