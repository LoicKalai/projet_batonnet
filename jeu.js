const baton1 = document.querySelector('.baton1');
const baton2 = document.querySelector('.baton2');
const baton3 = document.querySelector('.baton3');
const baton4 = document.querySelector('.baton4');
const baton5 = document.querySelector('.baton5');
const baton6 = document.querySelector('.baton6');
const baton7 = document.querySelector('.baton7');
const baton8 = document.querySelector('.baton8');
const baton9 = document.querySelector('.baton9');
const baton10 = document.querySelector('.baton10');
const baton11 = document.querySelector('.baton11');
const baton12 = document.querySelector('.baton12');
const baton13 = document.querySelector('.baton13');
const baton14 = document.querySelector('.baton14');
const baton15 = document.querySelector('.baton15');

let arrayBaton = [baton1, baton2, baton3, baton4, baton5, baton6, baton7, baton8, baton9, baton10, baton11, baton12, baton13, baton14, baton15];
let arrayBatonSave = [baton1, baton2, baton3, baton4, baton5, baton6, baton7, baton8, baton9, baton10, baton11, baton12, baton13, baton14, baton15];

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

/* Enlever un baton */
btn1.addEventListener('click', function(){
    arrayBaton[0].style.opacity = "0";
    arrayBaton.splice(0,1);
    if (arrayBaton.length == 1){
        win();
    }

    window.setTimeout(ordi, 1000)
    btn1.setAttribute("disabled","");
    btn2.setAttribute("disabled","");
    btn3.setAttribute("disabled","");
})
/* Enlever deux baton */
btn2.addEventListener('click', function(){
    arrayBaton[0].style.opacity = "0";
    arrayBaton[1].style.opacity = "0";
    arrayBaton.splice(0,2);
    if (arrayBaton.length == 1){
        win();
    }

    window.setTimeout(ordi, 1000)
    btn1.setAttribute("disabled","");
    btn2.setAttribute("disabled","");
    btn3.setAttribute("disabled","");
})
/* Enlever trois baton */
btn3.addEventListener('click', function(){
    arrayBaton[0].style.opacity = "0";
    arrayBaton[1].style.opacity = "0";
    arrayBaton[2].style.opacity = "0";
    arrayBaton.splice(0,3);
    if (arrayBaton.length == 1){
        win();
    }

    window.setTimeout(ordi, 1000)
    btn1.setAttribute("disabled","");
    btn2.setAttribute("disabled","");
    btn3.setAttribute("disabled","");
})

/* Ordinateur */
function ordi() {
    let randomBaton = getRandomArbitrary(0, 3)
    console.log(randomBaton);
    for (let i = 0; i < randomBaton; i++) {
        arrayBaton[0].style.opacity = "0";
        arrayBaton.splice(0,1);
    }

    btn1.removeAttribute("disabled","");
    btn2.removeAttribute("disabled","");
    btn3.removeAttribute("disabled","");
}


/* Random entre min et max */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function win() {
    console.log("win");
    /* Message de win */
    /* Btn pour reset */
    arrayBaton = arrayBatonSave;
    baton1.style.opacity = "100";
    baton2.style.opacity = "100";
    baton3.style.opacity = "100";
    baton4.style.opacity = "100";
    baton5.style.opacity = "100";
    baton6.style.opacity = "100";
    baton7.style.opacity = "100";
    baton8.style.opacity = "100";
    baton9.style.opacity = "100";
    baton10.style.opacity = "100";
    baton11.style.opacity = "100";
    baton12.style.opacity = "100";
    baton13.style.opacity = "100";
    baton14.style.opacity = "100";
    baton15.style.opacity = "100";
}
if(arrayBaton == []){
    console.log("lose");
    /* Message de lose */
    /* Btn pour reset */
}