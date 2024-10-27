const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let minutes = 0;
let hours = 0;
let seconds = 0;

function getTime() {
  const date = new Date();

  currentSeconds = date.getSeconds();
  currentMinutes = date.getMinutes();
  currentHours = date.getHours();

  seconds = currentSeconds * 6;
  minutes = currentMinutes * 6 + seconds / 60;
  hours = (currentHours % 12) * 30 + minutes / 12;

  secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds}deg)`;  
  minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutes}deg)`;  
  hoursEl.style.transform = `translate(-50%, -100%) rotate(${hours}deg)`;
}

getTime()


function updateTime() {

  seconds += 6;
  minutes += 0.1;
  hours += 0.0083333333;

  secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds}deg)`;  
  minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutes}deg)`;  
  hoursEl.style.transform = `translate(-50%, -100%) rotate(${hours}deg)`;
}

setInterval(() => {  
  updateTime();
}, 1000)

