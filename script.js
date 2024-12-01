// HAMBURGER MENU

const nav = document.getElementById("nav");
let c = 0; 

function openNav() {
  if ((c === 0)) {
    nav.style.width = "200px";
    c++;
  } else{
    nav.style.width = "0px"
    c--;
  }
}

// FAQ CODE

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
