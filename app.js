const navButton = document.querySelector(".nav-toggler")
const nav = document.querySelector("nav")

nav.addEventListener("click",toggleNav)
navButton.addEventListener("click", toggleNav)

function toggleNav(){
    navButton.classList.toggle("active")
    nav.classList.toggle("active")
}

const txtAnim = document.querySelector('.anim')

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 50
})
.typeString("<strong>FRANOS THEO</strong>")
.pauseFor(2000)
.deleteChars(11)
.typeString("DEVELOPPEUR FULLSTACK")
.pauseFor(1500)
.deleteChars(15)
.start()


let slider = document.getElementsByClassName('text');

let etape = 0;

let nbr_slide = slider.length;

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

function enleverActiveText() {
    for(let i = 0 ; i < nbr_slide ; i++) {
        slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= nbr_slide) {
        etape = 0;
    }
    enleverActiveText();
    slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if(etape < 0) {
        etape = nbr_slide - 1;
    }
    enleverActiveText();
    slider[etape].classList.add('active');
})