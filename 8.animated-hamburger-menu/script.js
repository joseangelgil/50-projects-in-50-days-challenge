const menuBtn = document.getElementById('hm-btn');
const tabs = Array.from(document.getElementsByClassName('tab'));

menuBtn.addEventListener('click', () => {  
  menuBtn.classList.toggle('active');
  tabs.forEach((tab, index) => {
    if(tab.classList.contains('open')){
      tab.style.transitionDelay = `${0.4-(index/10)}s`;
    } else {
      tab.style.transitionDelay = `${1.2*(index/10)}s`;
    }
    tab.classList.toggle('open');
  })
})