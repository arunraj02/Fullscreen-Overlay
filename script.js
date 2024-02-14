//To get the HTML Elements
var btnOpen = document.querySelector(".open");
var btnClose = document.querySelector(".close");
var nav = document.querySelector(".navbar");

//function for show and hide
function show(){
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
    nav.style.width = "100%";
}

function hide(){
    btnOpen.style.display = "block";
    btnClose.style.display = "none";
    nav.style.width = "0%";
}

btnOpen.addEventListener("click",show);
btnClose.addEventListener("click",hide);