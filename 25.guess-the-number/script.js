const numberToGuess = document.getElementById('number-to-guess')
const questionMark = document.getElementById('question-mark')
const options = document.querySelectorAll('.option')
const result = document.getElementById('result')
const resultContainer = document.querySelector('.result-container')
const replayBtn = document.getElementById('replay')
  
let computerNumber = 0;
let playerTurn = 1;
let numberOfAttempts = 0;

window.addEventListener('load', () => {
  startGame()
})

function startGame() {
  playerTurn = 1;
  numberOfAttempts = 0;
  computerNumber = Math.floor(Math.random() * 10)
  numberToGuess.innerText = computerNumber;
  replayBtn.setAttribute('disabled', true);
}

function finishGame() {  
  options.forEach(option => option.classList.remove('active'))
  questionMark.style.opacity = 0;
  numberToGuess.style.opacity = 1;  
  playerTurn = numberOfAttempts % 2 === 0 ? 1 : 2;  
  result.innerText = `Player ${playerTurn} wins!`
  resultContainer.style.opacity = 1;  
  replayBtn.removeAttribute('disabled')
}
  

options.forEach(option => {
  option.addEventListener('click', () => {
    if(option.classList.contains('active')){
      option.classList.remove('active')
      if(option.innerText != computerNumber) {
        option.classList.add('wrong')
        numberOfAttempts++
      } else {
        option.classList.add('right')
        finishGame()
      }
    }    
  })
})

replayBtn.addEventListener('click', () => {
  resultContainer.style.opacity = 0;
  options.forEach(option => {
    option.classList.remove('wrong', 'right')
    option.classList.add('active')
  })
  questionMark.style.opacity = 1;
  numberToGuess.style.opacity = 0;
  startGame()
})