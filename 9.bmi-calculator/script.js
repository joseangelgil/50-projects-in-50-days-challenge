const ageEl = document.getElementById('age');
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const calculateBtn = document.getElementById('calculate');
const clearBtn = document.getElementById('clear');
const bmiNumber = document.getElementById('bmi-number');
const bmiStatus = document.getElementById('bmi-status');
const arrowEl = document.getElementById('arrow');

let timeInterval;

calculateBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if(!heightEl.value || !weightEl) {
    alert('Please enter height and weight values to calculate.')
    return
  }

  let bmi = parseFloat(weightEl.value) / (parseFloat(heightEl.value)/100)**2;
  let statusText;
  let statusColor;

  if(bmi < 18.5) {
    statusText = 'Underweight';
    statusColor = 'orange';
  } else if(bmi < 26) {
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
  
  let dynamicText = 0;

  timeInterval = setInterval(() => {
    if(dynamicText < bmi) {        
      dynamicText += 0.1;    
      bmiNumber.innerText = dynamicText.toFixed(1);
    } else {   
      bmiStatus.innerText = statusText;
      bmiStatus.style.color = statusColor;   
      clearInterval(timeInterval)
    }
  }, 7)
  
})

clearBtn.addEventListener('click', (e) => {
  e.preventDefault()
  clearInterval(timeInterval)
  bmiStatus.innerText = '';
  arrowEl.style.transform = 'rotate(-180deg)';
  bmiNumber.innerText = '0'
  heightEl.value = '';
  weightEl.value = '';
})