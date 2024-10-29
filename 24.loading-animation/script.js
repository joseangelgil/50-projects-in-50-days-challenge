const loadingNumber = document.getElementById('loading-number')
const loadingBar = document.querySelector('.loading-bar')
const loadingText = document.querySelector('.container h2')

let percentage = 0
let loadingInterval

window.addEventListener('load', () => {
  loadingInterval = setInterval(() => {
    if(loadingNumber.innerText < 100) {      
      percentage++
      loadingNumber.innerHTML = percentage
      loadingBar.style.width = `${percentage}%`
    } else {
      loadingText.innerHTML = 'Load Completed!'
      clearInterval(loadingInterval)
    }    
  }, 15)
})