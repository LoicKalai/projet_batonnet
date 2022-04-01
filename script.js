
let btn = document.querySelector('.play');
let menu = document.querySelector('.menu');
let jeux = document.querySelector('.jeux');
let tigre = document.querySelector('.tigre');
let acc = document.querySelector('.acc');

window.addEventListener('load', () => {
  tigre.style.display = "block";
  btn.style.display = "block";
})

btn.addEventListener('click', () => {
  tigre.style.transition = "ease-in 1s";
  tigre.style.transform = "scale(5)";
  tigre.style.opacity = "0";

  btn.style.transition = "ease-in 1s";
  btn.style.transform = "scale(5)";
  btn.style.opacity = "0";

 
  menu.style.transform = "scale(1)";
  menu.style.opacity = "1";
  menu.style.transition = "ease-out 1s";

  setTimeout(none, 2000);
})

function none() {
  tigre.style.display = "none";
  btn.style.display = "none";
  jeux.style.display = "block";
}

menu.addEventListener('click', () => {
  
  tigre.style.transition = "ease-out 1s";
  tigre.style.transform = "scale(1)";
  tigre.style.opacity = "1";
  
  btn.style.transition = "ease-out 1s";
  btn.style.transform = "scale(1)";
  btn.style.opacity = "1";

  menu.style.transition = "ease-out 1s";
  menu.style.transform = "scale(0)";
  menu.style.opacity = "0";

  setTimeout(nones, 2000);
})

function nones() {
  tigre.style.display = "block";
  btn.style.display = "block";
  jeux.style.display = "none";
}