let statusNav = false;
let toggle = function() {
    let getSideMenu = document.querySelector(".side-menu");
    let getSideMenuUL = document.querySelector(".side-menu ul");
    let getSideMenuTitle = document.querySelector(".side-menu span");
    let getSideMenuLinks = document.querySelectorAll(".side-menu a");

    if (statusNav === false) {
        getSideMenuUL.style.visibility = "visible";
        getSideMenu.style.width = "272px";
        if(getSideMenuTitle) {
            getSideMenuTitle.style.opacity = "0.5";
        }
        let arrLen = getSideMenuLinks.length;
        for (let i = 0; i < arrLen; i++) {
            getSideMenuLinks[i].style.opacity = "1";
        }
        statusNav = true;
    }
    else  if (statusNav === true) {
        getSideMenu.style.width = "50px";
        if(getSideMenuTitle) {
            getSideMenuTitle.style.opacity = "0";
        }
        let arrLen = getSideMenuLinks.length;
        for (let i = 0; i < arrLen; i++) {
            getSideMenuLinks[i].style.opacity = "0";
        }

          getSideMenuUL.style.visibility = "hidden";
        statusNav = false;
    }
}