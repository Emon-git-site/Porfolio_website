let tabLinks =  document.getElementsByClassName("about_tab_link");
let tabContents = document.getElementsByClassName("about_tab_content");

function opentab(tabname){

    for(let tablink of tabLinks){
        tablink.classList.remove("active_link");
     
    }

    for(let tabcontent of tabContents){
        tabcontent.classList.remove("active_tab");
    }
    event.currentTarget.classList.add("active_link");
    document.getElementById(tabname).classList.add("active_tab");
   console.log(document.getElementById(tabname))
}