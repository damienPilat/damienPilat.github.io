// Populate sections, looping through section Dict, retrieving structure and populating as approprate
function populateSections() {
    for (let sectionID in con_sectionDetails) {
        let domContainer = document.getElementById('content');
        let sectionStructure = con_sectionDetails[sectionID].structure;

        for (let firstDepthElements in sectionStructure) {
            domContainer.appendChild(customElement(sectionStructure[firstDepthElements]));
        }
    }
} // END: populateSections