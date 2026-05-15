var menus = document.getElementsByClassName("main-nav");
var menuBtns = document.getElementsByClassName("menu-btn");

for (let i = 0; i < menuBtns.length; i++) {
    let menuBtn = menuBtns[i];
    menuBtn.addEventListener("click", function (e) {
        for (let j = 0; j < menus.length; j++) {
            let menu = menus[j];
            if (menu.style.display == "none") {
                menu.style.display = "block";
            } else {
                menu.style.display = "none";
            }
        }
    });
}