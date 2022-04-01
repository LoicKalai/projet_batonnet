
let btn = document.querySelector('.play');
let menu = document.querySelector('.menu');
let btnregle = document.querySelector('.btnregle');
let regles = document.querySelector('.regles');
let jeux = document.querySelector('.jeux');

let tigre = document.querySelector('.tigre');
let fouras = document.querySelector('.fouras');
let fouras2 = document.querySelector('.fouras2');
let partout = document.querySelector('.partout');
let tigre2 = document.querySelector('.tigre2');

let feu = document.querySelector('.feu');
let flame = document.querySelectorAll('.flame');

let titre = document.querySelector('.titre');

window.addEventListener('load', () => {
  tigre.style.display = "block";
  btn.style.display = "block";
  btnregle.style.display = "block";
  titre.style.display = "block";

  /* border(); */
})

/* btn jouez */

btn.addEventListener('click', () => {
  tigre.style.transition = "ease-in 1s";
  tigre.style.transform = "scale(5)";
  tigre.style.opacity = "0";

  btn.style.transition = "ease-in 1s";
  
  btn.style.opacity = "0";

  btnregle.style.transition = "ease-in 1s";
  
  btnregle.style.opacity = "0";

  titre.style.transition = "ease-in 1s";
 
  titre.style.opacity = "0";
 
  menu.style.transition = "ease-out 1s";
  
  menu.style.opacity = "1";

  setTimeout(none, 2000);

  move();
})

function none() {
  tigre.style.display = "none";
  btn.style.display = "none";
  btnregle.style.display = "none";
  jeux.style.display = "block";
  menu.style.display = "block";
  titre.style.display = "none";
  feu.style.display = "block";
  feu.style.display = "flex";

  fouras2.style.display = "block";
  partout.style.display = "block";
  tigre2.style.display = "block";
}

/* fin de jouez */

/* btn accueil */

menu.addEventListener('click', () => {
  
  tigre.style.transition = "ease-in 1s";
  tigre.style.transform = "scale(1)";
  tigre.style.opacity = "1";
  
  btn.style.transition = "ease-in 1s";
  
  btn.style.opacity = "1";

  btnregle.style.transition = "ease-in 1s";
  
  btnregle.style.opacity = "1";

  titre.style.transition = "ease-in 1s";
  
  titre.style.opacity = "1";

  menu.style.transition = "ease-in 1s";
  
  menu.style.opacity = "0";

  jeux.style.transition = "ease-in 1s";
  
  jeux.style.opacity = "0";

  setTimeout(nones, 2000);
})

function nones() {
  tigre.style.display = "block";
  btn.style.display = "block";
  btnregle.style.display = "block";
  
  titre.style.display = "block";

  jeux.style.display = "none";
  menu.style.display = "none";
  feu.style.display = "none";
  feu.style.display = "block";
  feu.style.display = "none";

  fouras2.style.display = "none";
  partout.style.display = "none";
  tigre2.style.display = "none";
}

/* fin de accueil */

/* regles */

btnregle.addEventListener('click', () => {

  tigre.style.transition = "ease-in 1s";
  tigre.style.transform = "scale(5)";
  tigre.style.opacity = "0";

  btn.style.transition = "ease-in 1s";
  
  btn.style.opacity = "0";

  btnregle.style.transition = "ease-in 1s";
  
  btnregle.style.opacity = "0";

  titre.style.transition = "ease-in 1s";
  
  titre.style.opacity = "0";
 
  menu.style.transition = "ease-out 1s";
  
  menu.style.opacity = "1";

  regles.style.transition = "ease-out 1s";
  
  regles.style.opacity = "1";

  setTimeout(nonese, 2000);
})

function nonese() {
  menu.style.display = "block";
  regles.style.display = "block";
  fouras.style.display = "block";

  tigre.style.display = "none";
  btn.style.display = "none";
  btnregle.style.display = "none";
  
  titre.style.display = "none";
}

/* fin de regles */

function border () {
  btn.style.transition = "ease-in 1s";
  btn.style.border = "";
  
  menu.style.transition = "ease-in 1s";
  menu.style.border = "";

  btnregle.style.transition = "ease-in 1s";
  btnregle.style.border = "";
}

let nbr = 0;
fouras.addEventListener('mouseover', () => {
  switch (nbr) {
    case 0:
      fouras.style.transition = "ease-in .2s";
      fouras.style.top = "2vh";
      fouras.style.left = "35%";
      nbr++;
    break;
    case 1:
      fouras.style.transition = "ease-in .2s";
      fouras.style.top = "40vh";
      fouras.style.left = "5%";
      nbr++;
    break;
    case 2:
      fouras.style.transition = "ease-in .2s";
      fouras.style.top = "80vh";
      fouras.style.left = "35%";
      nbr++;
    break;
    case 3:
      fouras.style.transition = "ease-in .2s";
      fouras.style.top = "40vh";
      fouras.style.left = "70%";
      nbr = 0;
    break;
  }
})

function move() {

  setTimeout(fourasmove, 3000);

  setTimeout(partoutmove, 1000);

  setTimeout(tigremove, 1000);
  
}

function fourasmove() {
  fouras2.classList.add('anim');
  
}

function partoutmove() {
  partout.classList.add('anim');
  
}

function tigremove() {
  tigre2.classList.add('anim2');
}

let nbrbis = 0;
flame.addEventListener('click', function (element) {
  flame.forEach(element => {
    switch(nbrbis) {
      case 0:
        element.style.display = "none";
        nbrbis++;
      break;
      case 1:
        element.style.display = "block";
        nbrbis = 0;
      break;
    }
  });
})