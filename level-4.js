// controllo delle variabili
const donkey = document.querySelector('.monkey')
let jumping = false

const barrel1 = document.querySelector('.barrelsLevel4')
let moving1 = false

let countBarrels = 0 
const goal = 10
const difficulty = .8
// when the user press the spacebar
document.onkeydown = (e) => {
    console.log(e.code)
    if (e.code == "ArrowUp"){
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
},500)