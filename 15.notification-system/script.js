const infoBtn = document.getElementById('info')
const errorBtn = document.getElementById('error')
const warningBtn = document.getElementById('warning')
const successBtn = document.getElementById('success')
const notificationEl = document.querySelector('.notification')
const notificationText = document.querySelector('.notification p')

let timer;

const notifications = {
  info: {
    text: 'New wahtsapp message!',
    color: 'rgba(0, 255, 255, 0.3)'
  },
  error: {
    text: 'Error: Unable to download file.',
    color: 'rgba(255, 0, 0, 0.5)'
  },
  warning: {
    text: 'Battery level under 15%. Connect charger.',
    color: 'rgba(255, 255, 0, 0.5)'
  },
  success: {
    text: 'System update completed!',
    color: 'rgba(0, 128, 0, 0.5)'
  }
}

function setNotification(type) {  
  notificationText.innerText = notifications[type].text
  notificationEl.style.opacity = '1'
  notificationEl.style.top = '0'
  notificationEl.style.backgroundColor = notifications[type].color
}

function clearNotification() {
  notificationEl.style.opacity = '0'
  notificationEl.style.top = '-50px'
}

function showNotification(type) {  

  clearTimeout(timer)

  if(notificationEl.style.opacity != '0' && notificationEl.style.opacity != '') {  

    clearNotification()  
    setTimeout(() => {  
      setNotification(type)
    }, 700)

  } else {
      setNotification(type)
  }

  timer = setTimeout(() => {
    clearNotification()
  }, 3000)
}

errorBtn.addEventListener('click', () => {
  showNotification('error')
})

warningBtn.addEventListener('click', () => {
  showNotification('warning')
})

infoBtn.addEventListener('click', () => {
  showNotification('info')
})

successBtn.addEventListener('click', () => {
  showNotification('success')
})







