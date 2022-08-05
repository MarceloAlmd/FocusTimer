codigo antes da bagunça kkkkk


const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


const florestOn = document.querySelector('.florestOn')
const florestOff = document.querySelector('.florestOff')

const rainOn = document.querySelector('.rainOn')
const rainOff = document.querySelector('.rainOff')

const shopOn = document.querySelector('.shopOn')
const shopOff = document.querySelector('.shopOff')

const fireOn = document.querySelector('.fireOn')
const fireOff = document.querySelector('.fireOff')

const soundFlorest = new Audio("sounds/Floresta.wav")
const soundRain = new Audio("sounds/Chuva.wav")
const soundShop = new Audio("sounds/Cafeteria.wav")
const soundFire = new Audio("sounds/Lareira.wav")
soundFlorest.loop = true
soundRain.loop = true
soundShop.loop = true
soundFire.loop = true

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


let timerOut
let minutes = Number(minutesDisplay.textContent)
function updateDisplay (minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}
function countDown (){
    timerOut = setTimeout(function(){
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if(minutes <= 0 && seconds <= 0 ){
            updateDisplay(25, 0)
            kitchenTimer.play()
            return
        }

        if(seconds <= 0 ){
            seconds = 2
            --minutes
        }

        updateDisplay(minutes, seconds - 1) 

        countDown()
    }, 1000)
}

florestOn.addEventListener('click', function(){
    florestOn.classList.add('hide')
    florestOff.classList.remove('hide')
    soundFlorest.play()
})
florestOff.addEventListener('click', function(){
    florestOff.classList.add('hide')
    florestOn.classList.remove('hide')
    soundFlorest.pause()
})

rainOn.addEventListener('click', function(){
    rainOn.classList.add('hide')
    rainOff.classList.remove('hide')
    soundRain.play()
})
rainOff.addEventListener('click', function(){
    rainOff.classList.add('hide')
    rainOn.classList.remove('hide')
    soundRain.pause()
})

shopOn.addEventListener('click', function(){
    shopOn.classList.add('hide')
    shopOff.classList.remove('hide')
    soundShop.play()
})
shopOff.addEventListener('click', function(){
    shopOff.classList.add('hide')
    shopOn.classList.remove('hide')
    soundShop.pause()
})

fireOn.addEventListener('click', function(){
    fireOn.classList.add('hide')
    fireOff.classList.remove('hide')
    soundFire.play()
})
fireOff.addEventListener('click', function(){
    fireOn.classList.remove('hide')
    fireOff.classList.add('hide')
    soundFire.pause()
})



buttonPlay.addEventListener('click', function(){
    countDown()
    buttonPressAudio.play()
})

buttonStop.addEventListener('click', function (){
    clearTimeout(timerOut)
    buttonPressAudio.play()
})

buttonPlus.addEventListener('click', function(){
    minutes += 5
    updateDisplay(minutes, 0)
})

buttonMinus.addEventListener('click', function (){
    minutes -= 5
    updateDisplay(minutes, 0)

    if(minutes <= 0 ){
        alert("não é possivel diminuir 5min")
        updateDisplay(5, 0)
        return

    }
})