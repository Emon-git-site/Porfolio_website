
// about tab section function
let tabLinks = document.getElementsByClassName("about_tab_link");
let tabContents = document.getElementsByClassName("about_tab_content");

function opentab(tabname) {

    for (let tablink of tabLinks) {
        tablink.classList.remove("active_link");

    }

    for (let tabcontent of tabContents) {
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab");
    console.log(document.getElementById(tabname))
}

// menu bar open and close system
menuClose = document.getElementsByClassName("menu_close");
menuOpen = document.getElementsByClassName("menu_bar")[0]; // Select the first element with the class "menu_bar"


function closeMenu() {
    for (close of menuClose) {
        close.style.visibility = "hidden";
    }
    menuOpen.style.display  = "block"; // Show the "menu_open" button
}

function openMenu() {
    for (close of menuClose) {
        close.style.visibility = "visible";
    }
    menuOpen.style.display  = "none"; // Hide the "menu_open" button
}
