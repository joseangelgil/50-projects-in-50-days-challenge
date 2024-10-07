const btns = [...document.getElementsByClassName('btn')];
const answers = [...document.getElementsByClassName('answer')];

btns.forEach((btn, btnIndex) => {
  btn.addEventListener('click', () => {
    btns.forEach(btn => btn.classList.remove('active'))
    btn.classList.add('active')
    if(answers[btnIndex].classList.contains('open')) {
      answers[btnIndex].classList.remove('open')
      btn.classList.toggle('active')
      return
    } 
    answers.forEach(answer => {
      answer.classList.remove('open')
    })
    answers[btnIndex].classList.add('open');
  })
})