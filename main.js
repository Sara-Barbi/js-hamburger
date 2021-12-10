const barre = document.querySelector(".fa-bars");  
const crocetta = document.querySelector(".fa-times");  
const hamburgerMenu = document.querySelector(".hamburger-menu");  

barre.addEventListener ("click", function(){
  hamburgerMenu.classList.add("active");
})
crocetta.addEventListener("click", function(){
  hamburgerMenu.classList.remove("active");
})

































