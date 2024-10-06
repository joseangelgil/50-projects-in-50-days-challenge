const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const playPauseBtn = document.getElementById('play-pause-btn')
const stopBtn = document.getElementById('stop-btn')

let isPlaying = false;
let timeRemaining = 0;
let timeInterval;

function calculateMilliseconds() {
  timeRemaining = Number(hoursEl.value) * 3600 + Number(minutesEl.value) * 60 + Number(secondsEl.value);

  if(!timeRemaining) {
    playPauseBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="white" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg> `

    clearInterval(timeInterval) 
  }

  fixDisplay()
}

function fixDisplay() {
  hoursEl.value = hoursEl.value.toString().padStart(2, '0')
  minutesEl.value = minutesEl.value.toString().padStart(2, '0')
  secondsEl.value = secondsEl.value.toString().padStart(2, '0')
}

function startCountdown() {

  timeRemaining--

  hoursEl.value = Math.floor(timeRemaining/3600);
  minutesEl.value = Math.floor((timeRemaining%3600)/60);
  secondsEl.value = Math.floor((timeRemaining%3600)%60);

  calculateMilliseconds()
}


playPauseBtn.addEventListener('click', () => {

  if(timeRemaining) {
    isPlaying = !isPlaying;

    if(!isPlaying) {
      playPauseBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="white" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg> `
      
      clearInterval(timeInterval)    

    } else {
      playPauseBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke-width="1.5" stroke="white" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
      </svg>`

      timeInterval = setInterval(startCountdown, 1000);
    }
  }  
})


stopBtn.addEventListener('click', () => {
  hoursEl.value = '00'
  minutesEl.value = '00'
  secondsEl.value = '00'

  clearInterval(timeInterval)
  calculateMilliseconds()
})


