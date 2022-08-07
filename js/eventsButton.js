export default function ({
    buttonPlay,
    buttonPlay2,
    buttonStop,
    buttonPlus,
    buttonMinus,
    timer,
    sound,
    minutesDisplay
}) {
    let minutes = Number(minutesDisplay.textContent)


    buttonPlay.addEventListener('click', function(){
        buttonPlay.classList.add('hide')
        buttonPlay2.classList.remove('hide')
        timer.countDown()
        sound.buttonPressAudio.play()
    })
    buttonPlay2.onclick = () => {
        sound.buttonPressAudio.play()
    }

    buttonStop.addEventListener('click', function (){
        buttonPlay.classList.remove('hide')
        buttonPlay2.classList.add('hide')
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

