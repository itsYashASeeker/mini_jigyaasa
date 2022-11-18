// HOME
let subMenu = document.getElementById("subManu");
var ifullbg = document.getElementById("idfullbg");
var inav = document.getElementById("idnav");
var ifullbg = document.getElementById("idfullbg");
var iycard = document.getElementById("idycard");
var iquestion = document.querySelectorAll("#idquestion");
var ians_ycard = document.querySelectorAll("#idans_ycard");
var ianswer = document.querySelectorAll("#idanswer");
// localStorage.setItem("lbooltheme","false");
var whooshcard = document.querySelectorAll("#idycard");

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
    changetheme();
}


function changetheme(){
    if(localStorage.getItem("lbooltheme")==="true"){
        whitenav();
        whitebody();
        whitecard();
        whitefooter();
        localStorage.setItem("lbooltheme","false");
    } 
    else{
        blacknav();
        blackbody();
        blackcard();
        blackfooter();
        localStorage.setItem("lbooltheme","true");
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
var inavul = document.getElementById("idnavul");

function whitenav(){
    inav.classList.remove("blacknav");
    inav.classList.remove("navbar-dark");
    for(var m=0;m<isubmanulink.length;m++){
        isubmanulink[m].classList.remove("blacksubmanulink");
    }
    inavul.classList.remove("blacknavul");
}

function blacknav(){
    inav.classList.add("blacknav");
    inav.classList.add("navbar-dark");
    for(var m=0;m<isubmanulink.length;m++){
        isubmanulink[m].classList.add("blacksubmanulink");
    }
    inavul.classList.add("blacknavul");
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
}

function blackbody(){
    ifullbg.classList.add("blackfullbg");
}

// Body Ends



// Question and ans cards Start

function whitecard(){
    for(var i=0;i<whooshcard.length;i++)
    {
        whooshcard[i].classList.remove("blackycard");
    }
    for(var j=0;j<iquestion.length;j++)
    {
        iquestion[j].classList.remove("blackquestion");
    }
    for(var k=0;k<ians_ycard.length;k++)
    {
        ians_ycard[k].classList.remove("blackans_ycard");
    }
    for(var l=0;l<ianswer.length;l++)
    {
        ianswer[l].classList.remove("blackanswer");
    }
}

function blackcard(){
    for(var i=0;i<whooshcard.length;i++)
    {
        
        whooshcard[i].classList.add("blackycard");
    }
    for(var j=0;j<iquestion.length;j++)
    {
        iquestion[j].classList.add("blackquestion");
    }
    for(var k=0;k<ians_ycard.length;k++)
    {
        console.log("1");
        ians_ycard[k].classList.add("blackans_ycard");
    }
    for(var l=0;l<ianswer.length;l++)
    {
        console.log("1");
        ianswer[l].classList.add("blackanswer");
    }
}

// Question and ans cards End



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