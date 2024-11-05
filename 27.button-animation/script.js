const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
  button.style.top = `${Math.floor(Math.random() * 80)}%`
  button.style.left = `${Math.floor(Math.random() * 80)}%`
})