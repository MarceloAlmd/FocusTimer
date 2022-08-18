import Timer from "./timer.js"
import Sound from "./sounds.js"
import { elements } from "./elements.js"
import Events from "./eventsCards.js"
import EventsButton from "./eventsButton.js"
const {
    buttonPlay,
    buttonPlay2,
    buttonStop,
    buttonPlus,
    buttonMinus,
    minutesDisplay,
    secondsDisplay,
    florestOn,
    florestOff,
    rainOn,
    rainOff,
    shopOn,
    shopOff,
    fireOn,
    fireOff,
    timerOut
} = elements
const sound = Sound()

const timer = Timer({secondsDisplay, 
    minutesDisplay, 
    timerOut, 
    sound,
    florestOn,
    florestOff
})
Events({
    florestOn,
    florestOff,
    rainOn,
    rainOff,
    shopOn,
    shopOff,
    fireOn,
    fireOff,
    sound,
    event
})

EventsButton({
    buttonPlay,
    buttonPlay2,
    buttonStop,
    buttonPlus,
    buttonMinus,
    timer,
    sound,
    minutesDisplay
})






