var menus = document.getElementsByClassName("main-nav");
var menuBtns = document.getElementsByClassName("menu-btn");



for (let i = 0; i < menuBtns.length; i++) {
    let menuBtn = menuBtns[i];
    menuBtn.addEventListener("click", function (e) {
        for (let j = 0; j < menus.length; j++) {
            let menu = menus[j];
            document.body.innerHTML+="<span class=\"debug-text\">clicked</span>"
            document.body.innerHTML+="<span class=\"debug-text\">"+menu.style.display+"</span>";
            if (getComputedStyle(menu).display == "none") {
                menu.style.display = "block";
                document.body.innerHTML+="<span class=\"debug-text\">displaying</span>"
            } else {
                menu.style.display = "none";
                document.body.innerHTML+="<span class=\"debug-text\">hiding</span>"
            }
        }
    });
}