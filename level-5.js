// controllo delle variabili
const donkey = document.querySelector('.monkey-diamond')
let jumping = false

const browser = document.querySelector('.browser')
let moving1 = false

let countBrowser = 0 
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
        browser.classList.add('moving')
        moving1 = true
        setTimeout(() => {
            browser.classList.remove('moving')
            moving1 = false
            countBrowser++
            if (countBrowser == goal){
                alert("You won")
                location.href= window.destination
            }
        },window.enemyTiming) 
    }
},500)