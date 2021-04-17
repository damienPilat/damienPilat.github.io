// Switch languages of website
function languageSwitch() {
    document.getElementById('lang-en').addEventListener('change', function() {
       changeLanguage('en');
    });
}

function changeLanguage(lang) {
    console.log("Language changed to ", lang);
}