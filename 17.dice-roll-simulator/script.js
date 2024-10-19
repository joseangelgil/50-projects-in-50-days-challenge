const rollBtn = document.getElementById('roll-btn')
const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')

let timeInterval;
let throwing = false;

const diceFaces = {
  1: '<i class="fa-solid fa-dice-one"></i>',
  2: '<i class="fa-solid fa-dice-two"></i>',
  3: '<i class="fa-solid fa-dice-three"></i>',
  4: '<i class="fa-solid fa-dice-four"></i>',
  5: '<i class="fa-solid fa-dice-five"></i>',
  6: '<i class="fa-solid fa-dice-six"></i>'
}

function collectDice() {
  dice1.style.top = '200%'
  dice1.style.left = '48%'
  dice1.style.textShadow = 'none'
  dice2.style.top = '200%'
  dice2.style.left = '48%'
  dice2.style.textShadow = 'none'
  setTimeout(() => {    
    dice1.style.transform = 'rotate(0deg)'
    dice2.style.transform = 'rotate(0deg)'    
    timeInterval = setInterval(randomizeDice, 250) 
  }, 1000)
}

function randomizeDice() {
  dice1.innerHTML = diceFaces[Math.floor(Math.random()*6 + 1)]
  dice2.innerHTML = diceFaces[Math.floor(Math.random()*6 + 1)]
}

function throwDice() {
  dice1.style.top = `${Math.floor(Math.random()*75 + 10)}%`;
  dice1.style.left = `${Math.floor(Math.random()*75 + 10)}%`
  dice1.style.textShadow = '0 0 7px black';
  dice1.style.transform = `rotate(${Math.floor(Math.random()*1000 + 720)}deg)`  
  dice2.style.top = `${Math.floor(Math.random()*75 + 10)}%`;
  dice2.style.left = `${Math.floor(Math.random()*75 + 10)}%`;
  dice2.style.textShadow = '0 0 7px black';  
  dice2.style.transform = `rotate(${Math.floor(Math.random()*1000 + 720)}deg)`
}


rollBtn.addEventListener('click', () => {
  if(throwing) return 
  throwing = true;
  collectDice()  
  setTimeout(() => {        
    throwDice()
  }, 2000)
  setTimeout(() => {      
    clearInterval(timeInterval)
    throwing = false;
  }, 3200)
})