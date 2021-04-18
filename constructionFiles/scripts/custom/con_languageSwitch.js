// Switch languages of website
function changeLanguage(e) {
    currentLanguage = e.target.id.split("-")[1];
    document.getElementById('content').innerHTML = null;
    populateSections();
    populateDevice();
    populateTech();
}