import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} from "/js/elements.js"


export default function({timer, controls, sounds,}) {

buttonPlay.addEventListener('click', function() {

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
  let newMinutes = controls.getMinutes()
/*   minutesDisplay.textContent = String(newMinutes).padStart(2, '0')*/  
  timer.updateDisplay(newMinutes,0)
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

})

}

