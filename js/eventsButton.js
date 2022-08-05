export default function ({
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    timer,
    sound,
    minutesDisplay
}) {
    let minutes = Number(minutesDisplay.textContent)


    buttonPlay.addEventListener('click', function(){
        timer.countDown()
        sound.buttonPressAudio.play()
    })

    buttonStop.addEventListener('click', function (){
        timer.paused()
        sound.buttonPressAudio.play()
    })

    buttonPlus.addEventListener('click', function(){
        minutes += 5
        timer.updateDisplay(minutes, 0)
    })

    buttonMinus.addEventListener('click', function (){
        minutes -= 5
        timer.updateDisplay(minutes, 0)

        if(minutes <= 0 ){
            alert("não é possivel diminuir 5min")
            timer.updateDisplay(5, 0)
            return

        }
    })


}

