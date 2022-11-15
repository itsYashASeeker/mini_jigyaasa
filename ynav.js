window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("ynav").style.padding = "30px 10px";
        document.getElementById("logoimg").style.height = "20px";
    } 
    else {
        document.getElementById("navbar").style.padding = "80px 10px";
        document.getElementById("logoimg").style.height = "30px";
    }
}