const ageEl = document.getElementById('age');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate');
const clearBtn = document.getElementById('clear');
const bmiNumber = document.getElementById('bmi-number');
const bmiStatus = document.getElementById('bmi-status');
const arrowEl = document.getElementById('arrow');

let timeInterval;
let intervalRunning = false;
let lastMedition = Number(bmiNumber.innerText);

calculateBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if(!heightEl.value || !weightEl) {
    alert('Please enter height and weight values to calculate.')
    return
  }

  if(intervalRunning) return;

  let bmi = parseFloat(weightEl.value) / (parseFloat(heightEl.value)/100)**2;

  let animationTime = 2000 / (Math.abs(bmi - lastMedition) * 10);

  let statusText;
  let statusColor;

  if(bmi < 18.5) {
    statusText = 'Underweight';
    statusColor = 'orange';
  } else if(bmi < 25) {
    statusText = 'Healthy';
    statusColor = 'green';
  } else if(bmi < 30) {
    statusText = 'Overweight';
    statusColor = 'orange';
  } else if(bmi < 35) {
    statusText = 'Overweight';
    statusColor = 'orangered';
  } else {    
    statusText = 'Obesity';
    statusColor = 'red';
  }

  let deg = (180 - (bmi*180/60)) < 0 ? 1 : (180 - (bmi*180/60));
  arrowEl.style.transform = `rotate(-${deg}deg)`;

  timeInterval = setInterval(() => {
    if(Math.abs(lastMedition - bmi) < 0.05) {  
      intervalRunning = false; 
      bmiStatus.innerText = statusText;
      bmiStatus.style.color = statusColor;   
      clearInterval(timeInterval)
    } else if(lastMedition < bmi) {  
      intervalRunning = true;      
      lastMedition += 0.1;    
      bmiNumber.innerText = lastMedition.toFixed(1);
    } else if(lastMedition > bmi) {
      intervalRunning = true;              
      lastMedition -= 0.1;    
      bmiNumber.innerText = lastMedition.toFixed(1);
    } 
  }, animationTime)
  
})

clearBtn.addEventListener('click', (e) => {
  e.preventDefault()
  clearInterval(timeInterval)
  intervalRunning = false;
  lastMedition = 0;
  bmiStatus.innerText = '';
  arrowEl.style.transform = 'rotate(-180deg)';
  bmiNumber.innerText = '0'
  heightEl.value = '';
  weightEl.value = '';
  ageEl.value = '';
})