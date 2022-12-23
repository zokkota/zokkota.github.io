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