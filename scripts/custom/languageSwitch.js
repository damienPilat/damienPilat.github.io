// Switch languages of website
// By replacing the text only
function changeLanguage(e) {
    // Update current language
    currentLanguage = e.target.id.split("-")[1];

    updateSectionTextContent();
    toggleClassNamesIfPresent('lang-btn', ['lang-btn-selected_light', 'lang-btn-selected_dark'], true);

}

// Update text content for each section
function updateSectionTextContent() {
    // Get sections Names
    let sectionNames = Object.keys(sectionDetails);

    // Loop through section names,
    // Get section Desc containers, replace w/ sectionDetails path (will retrieve new language setting)
    sectionNames.forEach(sectionId => {
        let sectionDescContainer = document.getElementById(sectionId + '-desc-container');
        sectionDescContainer.replaceWith(customElement(sectionDetails[sectionId].structure["0"].children["0"]));
    });
}