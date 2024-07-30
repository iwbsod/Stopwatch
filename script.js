const minutesElement = document.querySelector('.js-minutes')
const secondsElement = document.querySelector('.js-seconds')
const millisecondsElement = document.querySelector('.js-milliseconds')
const startButton = document.querySelector('.js-start-button')
const resetButton = document.querySelector('.js-reset-button')
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isPlaying = false
let intervalId;

const displayStopwatch = () => {
  millisecondsElement.innerHTML = milliseconds.toString().padStart(2, '0')
  secondsElement.innerHTML = seconds.toString().padStart(2, '0')
  minutesElement.innerHTML = minutes.toString().padStart(2, '0')
}

const resetStopwatch = () => {
  resetButton.addEventListener('click', () => {
    milliseconds = 0
    seconds = 0
    minutes = 0
    displayStopwatch()
  })
}

const startStopwatch = () => {
  resetStopwatch()
  startButton.addEventListener('click', () => {
    if (!isPlaying) {
      isPlaying = true
      startButton.innerHTML = 'Stop'

      intervalId = setInterval(() => {
        if (milliseconds <= 100) {
          milliseconds++
          displayStopwatch()
        } 
        
        if (milliseconds === 100) {
          milliseconds = 0
          seconds++
          displayStopwatch()
        }
  
        if (seconds === 60) {
          seconds = 0
          minutes++
          displayStopwatch()
          console.log(minutes)
        }
      }, 10)
    } else if (isPlaying) {
      isPlaying = false
      startButton.innerHTML = 'Start'
      clearInterval(intervalId)
    }
  })
}

startStopwatch()