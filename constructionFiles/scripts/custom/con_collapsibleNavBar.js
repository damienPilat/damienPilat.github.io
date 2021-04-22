function collapsibleNavBar() {
    menuCollapseAction();

    // Get Media Query status
    let mediaQuery = window.matchMedia('screen and (max-width: 800px)');

    // Run function on first load
    displaceMenuOptions(mediaQuery);
    // Add listener to be responsive
    mediaQuery.addListener(displaceMenuOptions)
}

// Collapse Menubar on btn click
function menuCollapseAction() {
    let collapseMenuBtn = document.getElementById('btn-collapse');
    let collapseContent = document.getElementById('collapse-content');
    collapseMenuBtn.addEventListener('click', () => {
        if (collapseContent.style.maxHeight) {
            collapseContent.style.maxHeight = null;
        } else {
            collapseContent.style.maxHeight = collapseContent.scrollHeight + 'px';
        }
    });
}

// Move menu options based on
function displaceMenuOptions(mediaQuery) {
    let menuOptions = document.getElementById('menuOptions');
    let collapseContent = document.getElementById('collapse-content');
    let navbar = document.getElementById('nav-bar');

    if (mediaQuery.matches) {
        // Screen small, add element as child
        collapseContent.appendChild(menuOptions);
    } else if (isChild(collapseContent, menuOptions) && !isChild(navbar, menuOptions)) {
        navbar.append(menuOptions);
    }
}