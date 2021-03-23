// Manual changing of styles based on switch setting
// @todo change manual updates to classes change

function modeSwitch() {
    let mode_switch = document.getElementById('modeSwitch');
    mode_switch.addEventListener('change', function () {
        if (this.checked) {
            document.body.style.backgroundColor = '#3a3a3a';
            console.log("darkMode");
        } else {
            document.body.style.backgroundColor = '#fafafa';
            console.log("lightMode")
        }
    });
}
