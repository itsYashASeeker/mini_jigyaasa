// HOME
var inav = document.getElementById("idnav");
let subMenu = document.getElementById("subManu");
var ifullbg = document.getElementById("idfullbg");

// About US
var idesc1 = document.getElementById("iddesc1");
var idev_card = document.querySelectorAll("#iddev_card");

// Footer ids
var ifooter = document.getElementById("idfooter");
var ifooter_desc3 = document.getElementById("idfooter_desc3");
var ifooter_desc1 = document.getElementById("idfooter_desc1");
var ifooter_desc12 = document.getElementById("idfooter_desc12");
var ifooter_desc21 = document.getElementById("idfooter_desc21");



function handlereload(){
    if(localStorage.getItem("lbooltheme")==="true"){
        localStorage.setItem("lbooltheme","false");
    }
    else if(localStorage.getItem("lbooltheme")==="false"){
        localStorage.setItem("lbooltheme","true");
    }
    uptheme_aboutus();
}

function uptheme_aboutus(){
    if(localStorage.getItem("lbooltheme")==="false"){
        blacknav();
        blackbody();
        blackfooter();
    }
    else if(localStorage.getItem("lbooltheme")==="true"){
        whitenav()
        whitebody();
        whitefooter();
    }
}



// Handle Refresh
window.onload = handlereload;

// Navbar Starts
// User toggle
var ibuttonuser1 = document.getElementById("idbuttonuser1");
ibuttonuser1.addEventListener("click", function(){
    console.log("iuser");
    subMenu.classList.toggle("openmanu");
});

window.addEventListener("click",function(e){
    if(e["path"][1]!=ibuttonuser1){
        console.log(e["path"]);
        subMenu.classList.remove("openmanu");
    }
    
});

var isubmanulink = document.querySelectorAll("#idsubmanulink");

function whitenav(){
    inav.classList.remove("blacknav");
    inav.classList.remove("navbar-dark");
    for(var m=0;m<isubmanulink.length;m++){
        isubmanulink[m].classList.remove("blacksubmanulink");
    }
}

function blacknav(){
    inav.classList.add("blacknav");
    inav.classList.add("navbar-dark");
    for(var m=0;m<isubmanulink.length;m++){
        isubmanulink[m].classList.add("blacksubmanulink");
    }
}
// Scrolling effect
let nav = document.querySelector("nav");
let buttno = document.getElementById("idbuttno");
window.addEventListener("scroll", function () {

    const offset = window.pageYOffset;

    if (offset > 60) {
        nav.classList.add("scroll");
        buttno.classList.add("scrollbuttno");
    }
    else {
        nav.classList.remove("scroll");
        buttno.classList.remove("scrollbuttno");
    }
});

// Navbar Ends



// Body Starts

function whitebody(){
    ifullbg.classList.remove("blackfullbg");
    idesc1.classList.remove("blackdesc1");
    for(var i=0;i<idev_card.length;i++)
    {
        idev_card[i].classList.remove("blackdev_card");
    }
    localStorage.setItem("lbooltheme","false");   
}

function blackbody(){
    ifullbg.classList.add("blackfullbg");
    idesc1.classList.add("blackdesc1");
    for(var i=0;i<idev_card.length;i++)
    {
        idev_card[i].classList.add("blackdev_card");
    }
    localStorage.setItem("lbooltheme","true");
}

// Body Ends



// Footer STart

function handle_einstein(){
    var einstein_says = "The important thing is not to stop questioning";
    var einstein_utter = new SpeechSynthesisUtterance(einstein_says);
    einstein_utter.pitch = 2;
    einstein_utter.volume = 0.8;
    speechSynthesis.speak(einstein_utter);
}
// White footer
function whitefooter(){
    console.log("white footer");
    ifooter.classList.remove("blackfooter");
    ifooter_desc1.classList.remove("blackfooter_desc1");
    ifooter_desc12.classList.remove("blackfooter_desc12");
    ifooter_desc21.classList.remove("blackfooter_desc21");
    ifooter_desc3.classList.remove("blackfooter_desc3");
}
// Black footer
function blackfooter(){
    console.log("black footer");
    ifooter.classList.add("blackfooter");
    ifooter_desc1.classList.add("blackfooter_desc1");
    ifooter_desc12.classList.add("blackfooter_desc12");
    ifooter_desc21.classList.add("blackfooter_desc21");
    ifooter_desc3.classList.add("blackfooter_desc3");
}

// Footer End

// Vanilla Tilt
VanillaTilt.init(document.querySelectorAll(".dev_card"), {
    max: 25,
    speed: 400
});