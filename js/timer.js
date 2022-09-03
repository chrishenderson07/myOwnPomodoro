import Sounds from "myOwnPomodoro/js/sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2,'0')
  }

  function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
  }

  function countdown() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    timerTimeOut = setTimeout(function() {

    if(minutes <= 0 && seconds == 0) {
      updateDisplay()
      resetControls()
      Sounds().timeEnd()
      return
    }
    updateDisplay(minutes, String(seconds - 1))
    
    if(seconds <= 0 ) {
      seconds = 60 - 1
      updateDisplay(String(minutes - 1), seconds)
    }

  countdown()
  }, 1000)

  }

  function hold() {
  clearTimeout(timerTimeOut)
  }

 return {
  updateDisplay,
  countdown,
  reset,
  hold
 }
}
