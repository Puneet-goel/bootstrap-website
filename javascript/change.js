
let divElement = document.getElementById("header").offsetHeight;

// margin for carousel
// Setting margin by getting navbar height 
$("#example").css("margin-top",`${divElement}px`); 

function showAlert() {
    alert(document.getElementById("search-input").value);
}