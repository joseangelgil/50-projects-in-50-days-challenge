const passwordLength = document.getElementById('password-length');
const generateBtn = document.getElementById('generate-btn');
const newPassword = document.getElementById('new-password');

const passwordCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

generateBtn.addEventListener('click', () => {

  let chosenLength = parseInt(passwordLength.value);

  if(passwordLength.value === '' || chosenLength < 8 || chosenLength > 20) {
    alert('Please, introduce a valid length between 8 and 20.')
    return 
  }
  
  let generatedPassword = '';

  for(let i = 0; i < chosenLength; i++) {
    generatedPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
  }

  newPassword.innerText = generatedPassword;

})