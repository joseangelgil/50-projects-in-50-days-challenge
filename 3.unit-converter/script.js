const typeDropdownEl = document.getElementById('type-dropdown')
const inputBtn = document.getElementById('input-btn')
const outputBtn = document.getElementById('output-btn')
const changeBtn = document.getElementById('change-btn')
const inputEl = document.getElementById('input')
const outputEl = document.getElementById('output')


const units = [
  'Tonne',
  'Kilogram',
  'Gram',
  'Milligram',
  'Microgram',
  'Stone',
  'Pound',
  'Once'
]


// create object with conversions table
/* create an object with units
units = {
mass: []}
and use units[typeDrodownEl.value].forEach...
*/




function createAndAppendOption(element, inputButton, outputButton){
  const createOption = () => {
    const option = document.createElement('option')
    option.value = element
    option.innerText = element
    return option
  }

  inputButton.appendChild(createOption())
  outputButton.appendChild(createOption())
}

function imprime(){

  inputBtn.innerHTML = '';
  outputBtn.innerHTML = '';

  units.forEach(el => {
    createAndAppendOption(el, inputBtn, outputBtn)
  })

}

function convert() {
  switch(inputBtn.value) {
    case 'Tonne':
      switch(outputBtn.value) {
        case 'Tonne':
          outputEl.innerText = inputEl.value;
          break;
        case 'Kilogram':
          outputEl.innerText = (inputEl.value * 1000) || '';
          break;
        case 'Gram':
          outputEl.innerText = (inputEl.value * 1000000) || '';
          break;
        case 'Milligram':
          outputEl.innerText = (inputEl.value * 1000000000) || '';
          break;
        case 'Microgram':
          outputEl.innerText = (inputEl.value * 1000000000000) || '';
          break;
        case 'Stone':
          outputEl.innerText = (inputEl.value * 157.473) || '';
          break;
        case 'Pound':
          outputEl.innerText = (inputEl.value * 2204.62) || '';
          break;
        case 'Once':
          outputEl.innerText = (inputEl.value * 35274) || '';
          break;
        default:
          outputEl.innerText = '';
          break;
      }
      break;
    case 'Kilogram':
      switch(outputBtn.value) {
        case 'Tonne':
          outputEl.innerText = (inputEl.value / 1000) || '';
          break;
        case 'Kilogram':
          outputEl.innerText = inputEl.value;
          break;
        case 'Gram':
          outputEl.innerText = (inputEl.value * 1000) || '';
          break;
        case 'Milligram':
          outputEl.innerText = (inputEl.value * 1000000) || '';
          break;
        case 'Microgram':
          outputEl.innerText = (inputEl.value * 1000000000) || '';
          break;
        case 'Stone':
          outputEl.innerText = (inputEl.value * 0.157473) || '';
          break;
        case 'Pound':
          outputEl.innerText = (inputEl.value * 2.20462) || '';
          break;
        case 'Once':
          outputEl.innerText = (inputEl.value * 35.274) || '';
          break;
        default:
          outputEl.innerText = '';
          break;
      }
    case 'Gram':
      console.log('length');
      break;
    case 'Milligram':
      console.log('volume');
      break;
    case 'Microgram':
      console.log('length');
      break;
    case 'Stone':
      console.log('time');
      break;
    case 'Pound':
      console.log('speed');
      break;
    case 'Once':
      console.log('speed');
      break;
    default:
      alert('Please, select a type of unit to convert.')
      break;
  }

  if(outputEl.innerText.match(/\./)) outputEl.innerText = Number(outputEl.innerText).toFixed(2)

}

inputEl.addEventListener('keyup', convert)












































// const units = [
//   {
//     Tonne,
//     Kilogram,
//     Gram,
//     Milligram,
//     Microgram,
//     Stone,
//     Pound,
//     Once

//   },
//   {
//     Liter,
//     Milliliter,
//     Centiliter,
//     CubicMeter,
//     Paint
//   },
//   {
//     Meter,
//     Kilometer,
//     Centimeter,
//     Millimeter,
//     Micrometer,
//     Nanometer,
//     Mile,
//     Yard,
//     Foot,
//     Inch,
//     NauticalMile
//   },
//   {
//     Day,
//     Week,
//     Month,
//     Year,
//     Decade,
//     Century,
//     Hour,
//     Minute,
//     Second
//   },
//   {
//     KilometerPerHour,
//     MeterPerSecond,
//     MilePerHour,
//     FootPerSecond,
//     Knot
//   }
// ]