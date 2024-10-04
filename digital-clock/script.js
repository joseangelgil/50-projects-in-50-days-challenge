const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  hoursEl.innerText = hours;
  minutesEl.innerText = minutes < 10 ? minutes.toString().padStart(2, '0') : minutes;
}

getTime();

setInterval(getTime, 1000);
