// Switch languages of website
// By replacing all page content
function changeLanguage(e) {
    currentLanguage = e.target.id.split("-")[1];

    document.getElementById('content').innerHTML = null;
    populateSections();
    populateDevice();
    populateTech();
}

// By replacing the text only
function changeLanguage_2(e) {
    // Update current language
    currentLanguage = e.target.id.split("-")[1];

    // Get sections Names
    let sectionNames = Object.keys(con_sectionDetails);

    // Loop through section names
    sectionNames.forEach(sectionId => {
        // Get text container & empty
        let sectionDescContainer = document.getElementById(sectionId + '-desc-container');
        sectionDescContainer.innerHTML = null;

        sectionDescContainer.appendChild(customElement(con_sectionDetails[sectionId].structure["0"].children["0"]));

    });
}