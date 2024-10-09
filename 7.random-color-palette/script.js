const generateBtn = document.getElementById('generate-btn');
const colors = Array.from(document.getElementsByClassName('color'));

function generateRandomColor() {
  let codes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  let randomCode = '#';

  while (randomCode.length < 7) {
    randomCode += codes[Math.floor(Math.random() * codes.length)]
  }

  return randomCode;
}

function setColors() {
  colors.forEach(color => {    
    const generatedColor = generateRandomColor()
    color.style.backgroundColor = generatedColor
    color.innerHTML = `<span>${generatedColor}</span>`
  })
}

setColors()

generateBtn.addEventListener('click', setColors)

