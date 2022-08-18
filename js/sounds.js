

export default function () {
    const florest = new Audio("sounds/Floresta.wav")
    const rain = new Audio("sounds/Chuva.wav")
    const shop = new Audio("sounds/Cafeteria.wav")
    const fire = new Audio("sounds/Lareira.wav")
    florest.loop = true
    rain.loop = true
    shop.loop = true
    fire.loop = true

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    

    
    function timerEnd(){
        florest.pause()
        rain.pause()
        shop.pause()
        fire.pause()
    }

    return {
        florest,
        rain,
        shop,
        fire,
        buttonPressAudio,
        kitchenTimer,
        timerEnd
    }

}