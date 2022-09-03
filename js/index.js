// Pegar os elementos html (ok)
// Fazer aparecer ou sumir os botões conforme o click (OK)
// Implementar o contador regressivo (ok)
// Aplicar como função, modules, factory (ok)

import Controls from "/js/controls.js"
import Sounds from "/js/sounds.js"
import Timer from "/js/timer.js"
import Events from "/js/events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,
} from "/js/elements.js"


const sounds = Sounds()

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})


/* buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sounds.pressButton()

})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()
  sounds.pressButton()

})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sounds.pressButton()

})

buttonSet.addEventListener('click', function() {
  newMinutes = controls.getMinutes()
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  
})

buttonSoundOn.addEventListener('click', function() {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sounds.bgAudio.pause()
})

buttonSoundOff.addEventListener('click', function() {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
  sounds.bgAudio.play()
}) */


Events({controls, timer, sounds})

