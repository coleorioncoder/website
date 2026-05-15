var menus = document.getElementsByClassName("main-nav");
var menuBtns = document.getElementsByClassName("nav-btn");

menuBtns.forEach(btn => btn.addEventListener("click", (e) => {
    menus.forEach(menu => {
        if (menu.style.display == "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
}));