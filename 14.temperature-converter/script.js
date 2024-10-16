const containerEl = document.querySelector('.container');
const celsiusEl = document.getElementById('celsius');
const kelvinEl = document.getElementById('kelvin');
const fahrenheitEl = document.getElementById('fahrenheit');

let celsius = 0;
let kelvin = 0;
let fahrenheit = 0;

function checkCelsius() {
  let color;
  if(celsius > 60) {
    color = 'purple';
  } else if(celsius > 50) {
    color = 'red';
  } else if(celsius > 40) {
    color = 'orangered';
  } else if(celsius > 30) {
    color = 'orange';
  } else if(celsius >= 20) {
    color = 'cyan';
  } else if(celsius > 10) {
    color = 'blue';
  } else {
    color = 'darkblue';
  }
  containerEl.style.background = `linear-gradient(to bottom, ${color}, white)`;
}

function calculateConversions(unit) {
  switch(unit) {
    case 'celsius':
      celsius = parseFloat(celsiusEl.value);
      kelvin = 273.15 + celsius;
      fahrenheit = 32 + 1.8 * celsius;
      kelvinEl.value = kelvin === Math.floor(kelvin) ? kelvin : kelvin.toFixed(2);
      fahrenheitEl.value = fahrenheit === Math.floor(fahrenheit) ? fahrenheit : fahrenheit.toFixed(2)
      break;
    case 'kelvin':
      kelvin = parseFloat(kelvinEl.value);
      celsius = -273.15 + kelvin;
      fahrenheit = -459.67 + 1.8 * kelvin;
      celsiusEl.value = celsius === Math.floor(celsius) ? celsius : celsius.toFixed(2);
      fahrenheitEl.value = fahrenheit === Math.floor(fahrenheit) ? fahrenheit : fahrenheit.toFixed(2)
      break;
    case 'fahrenheit':
      fahrenheit = parseFloat(fahrenheitEl.value);
      celsius = -17.7778 + 0.5556 * fahrenheit;
      kelvin = 255.372 + 0.5556 * fahrenheit;
      celsiusEl.value = celsius === Math.floor(celsius) ? celsius : celsius.toFixed(2);
      kelvinEl.value = kelvin === Math.floor(kelvin) ? kelvin : kelvin.toFixed(2)
      break;
  }  

  checkCelsius()
}

celsiusEl.addEventListener('change', () => {
  calculateConversions('celsius')
})
kelvinEl.addEventListener('change', () => {
  calculateConversions('kelvin')
})
fahrenheitEl.addEventListener('change', () => {
  calculateConversions('fahrenheit')
})