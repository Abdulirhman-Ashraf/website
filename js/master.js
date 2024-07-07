//start fixed navbar

let nav = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});
//end fixed navbar

//start scroll up

let scrollUp = document.querySelector("#up");
window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    scrollUp.classList.add("scroll");
  } else {
    scrollUp.classList.remove("scroll");
  }
});
// end scroll up
//start type writing effect
let typeWriterH2 = document.querySelector(".text h2");
let H2Text = `Frontend Developer`;


let i = 0;
setInterval(() => {
  if (i < H2Text.length) {
      typeWriterH2.innerHTML += H2Text[i];

    i++;
  } else {
    i = 0;
    typeWriterH2.innerHTML = [];
    
  }
}, 300);

//end type writing effect
