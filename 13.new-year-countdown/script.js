const hoursNumber = document.querySelector(".hours h1")
const hoursText = document.querySelector(".hours p")
const minutesNumber = document.querySelector(".minutes h1")
const minutesText = document.querySelector(".minutes p")
const secondsNumber = document.querySelector(".seconds h1")
const secondsText = document.querySelector(".seconds p")
const daysNumber = document.querySelector(".days h1")
const daysText = document.querySelector(".days p")

let timeInterval;

function countdown() {
  const date = new Date();
  const newYear = new Date(2025, 0, 1)

  let timeDifference = newYear.getTime() - date.getTime(); // In milliseconds.

  let days = Math.floor(timeDifference / (3600000 * 24))
  let hours = Math.floor(timeDifference % (3600000 * 24) / 3600000)
  let minutes = Math.floor(timeDifference % (3600000*24) % 3600000 / 60000)
  let seconds = Math.floor(timeDifference % (3600000*24) % 3600000 % 60000 / 1000)

  hoursNumber.innerText = hours < 10 ? `0${hours}` : hours;
  minutesNumber.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secondsNumber.innerText = seconds < 10 ? `0${seconds}` : seconds;
  daysNumber.innerText = days < 10 ? `0${days}` : days;

  hoursText.innerText = hours === 1 ? 'hour' : 'hours';
  minutesText.innerText = minutes === 1 ? 'minute' : 'minutes';
  secondsText.innerText = seconds === 1 ? 'second' : 'seconds';
  daysText.innerText = days === 1 ? 'day' : 'days';
}

countdown();

timeInterval = setInterval(countdown, 1000)