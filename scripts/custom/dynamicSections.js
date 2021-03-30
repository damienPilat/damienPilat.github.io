// Populate sections, looping through section Dict, retrieving structure and populating as approprate
function populateSections() {
    for (let sectionID in sectionDetails) {
        let domContainer = document.getElementById('content');
        let sectionStructure = sectionDetails[sectionID].structure;

        for (let firstDepthElements in sectionStructure) {
            domContainer.appendChild(customElement(sectionStructure[firstDepthElements]));
        }
    }
} // END: populateSections