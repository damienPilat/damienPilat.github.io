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

    // Loop through section names,
    // Get section Desc containers, replace w/ sectionDetails path (will retrieve new language setting)
    sectionNames.forEach(sectionId => {
        let sectionDescContainer = document.getElementById(sectionId + '-desc-container');
        sectionDescContainer.replaceWith(customElement(con_sectionDetails[sectionId].structure["0"].children["0"]));
    });
}