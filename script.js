// typing animation js cdn

var typed = new Typed("#element", {
  strings: ["Web Developer.", "Web Designer.", "Web Developer."],
  typeSpeed: 50,
});


const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");

hamburger.addEventListener('click', function(){
  navMenu.classList.toggle("active");


  if(navMenu.classList.contains("active")){
    hamburger.textContent = "X";

  }else{
    hamburger.textContent = "☰";   
  }

});