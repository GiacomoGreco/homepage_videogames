// controllo delle variabili
const donkey = document.querySelector('.monkey')
let jumping = false

const barrel4 = document.querySelector('.barrelsLevel4')
let moving1 = false

let countBarrels = 0 
const goal = 10
const difficulty = .8
// when the user press the spacebar
document.onkeydown = (e) => {
    console.log(e.code)
    if (e.code == "Space"){
        e.preventDefault()
        if (jumping == false){
            donkey.classList.add('jump')
            jumping = true
            setTimeout(() => {
                donkey.classList.remove('jump')
                jumping = false
            }, 2000) 
        }

    }
}



//now detect when enemy start
setInterval(() => {
    const random = Math.random()
    console.log(random)
    if (random < difficulty && moving1 == false){
        barrel1.classList.add('moving')
        moving1 = true
        setTimeout(() => {
            barrel1.classList.remove('moving')
            moving1 = false
            countBarrels++
            if (countBarrels == goal){
                alert("You won")
                location.href= window.destination
            }
        },window.enemyTiming) 
    }
},200)

setInterval(() => {
    if (isCollide(donkey, barrel4)){
        alert("YOU lost")
        location.href="GAME-OVER_level2.html"
    }
},30)

function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}