let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}
let nav = document.querySelector("nav");
window.addEventListener("scroll", function(){
    
    const offset = window.pageYOffset;

    if(offset>75){
        nav.classList.add("scroll");
    }
    else{
        nav.classList.remove("scroll");
    }
});