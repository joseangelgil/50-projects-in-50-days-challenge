const message = document.getElementById('message');
const counterEl = document.getElementById('char-counter');

let counter = 200;

message.addEventListener('keyup', () => {
  counter = 200 - Number(message.value.length)
  counterEl.innerText = counter;
})