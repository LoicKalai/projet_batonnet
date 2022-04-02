
/* btn première page*/
let btn = document.querySelector('.play');
let btnregle = document.querySelector('.btnregle');

/* btn retour */
let menu = document.querySelector('.menu');
let menu2 = document.querySelector('.menu2');

/* trois page */
let regles = document.querySelector('.regles');
let jeux = document.querySelector('.jeux');
let acc = document.querySelector('.acc');

/* img */
let fouras = document.querySelector('.fouras');
let back = document.querySelector('.back');
let fouras2 = document.querySelector('.fouras2');
let partout = document.querySelector('.partout');
let tigre = document.querySelector('.tigre');

/* flambeau */
let feu = document.querySelector('.feu');
let flame = document.querySelectorAll('.flame_container');

/* titre */
let titre = document.querySelector('.titre');

/* au chargement de la page */
window.addEventListener('load', () => {

  acc.style.display ="block";
  acc.style.transition = "ease-in 1s";

  jeux.style.display = "none";
  jeux.style.transition = "ease-in 1s";

  regles.style.display = "none";
  regles.style.transition = "ease-in 1s";

  /* border(); */ //test . . . (1)
})

/* btn jouez */
btn.addEventListener('click', () => {

  acc.style.transform = "scale(5)";
  acc.style.opacity = "0";

  jeux.style.transform = "scale(1)";
  jeux.style.opacity = "1";

  setTimeout(none, 1000);
})

function none() {
  
  acc.style.display = "none";

  jeux.style.display = "block";

  feu.style.display = "block";
  feu.style.display = "flex";
  feu.style.justifyContent = "space-between";

}
/* fin de jouez */

/* btn retour */
menu.addEventListener('click', () => {

  jeux.style.transform = "scale(5)";
  jeux.style.opacity = "0";

  acc.style.transform = "scale(1)";
  acc.style.opacity = "1";

  setTimeout(nones, 2000);

})

function nones() {

  feu.style.display = "block";

  jeux.style.display = "none";

  acc.style.display = "block";

}
/* fin de btn retour */

/* regles */
btnregle.addEventListener('click', () => {

  acc.style.transform = "scale(5)";
  acc.style.opacity = "0";

  regles.style.transform = "scale(1)";
  regles.style.opacity = "1";

  setTimeout(nonese, 2000);
})

function nonese() {

  acc.style.display = "none";

  regles.style.display = "block";

}
/* fin de regles */

/* btn retour regles */
menu2.addEventListener('click', () => {

  regles.style.transform = "scale(5)";
  regles.style.opacity = "0";

  acc.style.transform = "scale(1)";
  acc.style.opacity = "1";

  setTimeout(noneses, 2000);
})

function noneses() {

  regles.style.display = "none";

  acc.style.display = "block";

}
/* fin de btn retour regles */

/* . . . */
function border () {

  btn.style.border = "";
  
  menu.style.border = "";

  btnregle.style.border = "";

}
/* . . . */

/* animation hover fouras */
let nbr = 0;
fouras2.addEventListener('mouseover', () => {
  switch (nbr) {
    case 0:
      fouras2.style.transition = "ease-in .2s";
      fouras2.style.top = "2vh";
      fouras2.style.left = "35%";
      nbr++;
    break;
    case 1:
      fouras2.style.transition = "ease-in .2s";
      fouras2.style.top = "40vh";
      fouras2.style.left = "5%";
      nbr++;
    break;
    case 2:
      fouras2.style.transition = "ease-in .2s";
      fouras2.style.top = "80vh";
      fouras2.style.left = "35%";
      nbr++;
    break;
    case 3:
      fouras2.style.transition = "ease-in .2s";
      fouras2.style.top = "40vh";
      fouras2.style.left = "70%";
      nbr = 0;
    break;
  }
})
/* fin de animation hover fouras */

/* animation courses poursuite */
function fourasmove() {
  fouras.classList.add('anim');
  
}

function partoutmove() {
  partout.classList.add('anim');
  
}

function tigremove() {
  tigre.classList.add('anim2');
}

function move() {

  setTimeout(fourasmove, 2500);

  setTimeout(partoutmove, 1000);

  setTimeout(tigremove, 1000);
  
}

move();
/* fin de animation course poursuite */

/* . . . */
let nbrbis = 0;
flame.addEventListener('click', () => {
  flame.forEach(element => {
    let fire = element;
    switch(nbrbis) {
      case 0:
        fire.style.opacity = "0";
        nbrbis++;
      break;
      case 1:
        fire.style.opacity = "1";
        nbrbis = 0;
      break;
    }
  });
})
/* . . . */