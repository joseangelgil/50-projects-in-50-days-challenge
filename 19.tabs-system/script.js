const tabs = document.querySelectorAll('.tab');
const content = document.querySelector('.content')

const colors = ['blue', 'red', 'green', 'yellow', 'purple']

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    tab.style.setProperty('--color', `${colors[idx]}`)
    content.style.backgroundColor = `${colors[idx]}`;    
  })
})