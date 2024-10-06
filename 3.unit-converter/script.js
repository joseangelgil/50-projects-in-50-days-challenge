const typeDropdownEl = document.getElementById('type-dropdown')
const inputBtn = document.getElementById('input-btn')
const outputBtn = document.getElementById('output-btn')
const changeBtn = document.getElementById('change-btn')
const inputEl = document.getElementById('input')
const outputEl = document.getElementById('output')


const units = {
  'mass': [
    'Tonne',
    'Kilogram',
    'Gram',
    'Milligram',
    'Microgram',
    'Stone',
    'Pound',
    'Once'
  ],
  'volume': [
    'Liter',
    'Milliliter',
    'Centiliter',
    'Cubic Meter',
    'Pint'
  ],
  'length': [
    'Meter',
    'Kilometer',
    'Centimeter',
    'Millimeter',
    'Micrometer',
    'Nanometer',
    'Mile',
    'Yard',
    'Foot',
    'Inch',
    'Nautical Mile'
  ],
  'time': [
    'Day',
    'Week',
    'Month',
    'Year',
    'Decade',
    'Century',
    'Hour',
    'Minute',
    'Second'
  ],
  'speed': [
    'Kilometer per Hour',
    'Meter per Second',
    'Mile per Hour',
    'Foot per Second',
    'Knot'
  ]
}

const baseUnits = {
  // base unit for mass = Gram
    'Tonne': 0.000001,
    'Kilogram': 0.001,
    'Gram': 1,
    'Milligram': 1000,
    'Microgram': 1000000,
    'Stone': 0.000157473,
    'Pound': 0.00220462,
    'Once': 0.035274,

  // base unit for volume = Liter
    'Liter': 1,
    'Milliliter': 1000,
    'Centiliter': 100,
    'Cubic Meter': 0.001,
    'Pint': 1.75978,
    
  // base unit for length = meter
    'Meter': 1,
    'Kilometer': 0.001,
    'Centimeter': 100,
    'Millimeter': 1000,
    'Micrometer': 1000000,
    'Nanometer': 1000000000,
    'Mile': 0.000621371,
    'Yard': 1.09361,
    'Foot': 3.28084,
    'Inch': 39.3701,
    'Nautical Mile': 0.000539957,

  // base unit for time = day
    'Day': 1,
    'Week': 0.142857,
    'Month': 0.0328767,
    'Year': 0.00273973,
    'Decade': 0.000273973,
    'Century': 0.0000273973,
    'Hour': 24,
    'Minute': 1440,
    'Second': 86400,
  
  // base unit for speed = Meters per Second
    'Kilometer per Hour': 3.6,
    'Meter per Second': 1,
    'Mile per Hour': 2.23694,
    'Foot per Second': 3.28084,
    'Knot': 1.94384
}


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

function createOptions(){

  inputBtn.innerHTML = '';
  outputBtn.innerHTML = '';

  units[typeDropdownEl.value].forEach(el => {
    createAndAppendOption(el, inputBtn, outputBtn)
  })

  convert(inputEl.value, inputBtn.value, outputBtn.value)
}

function convert(value, fromUnit, toUnit) {
  // Convert to baseUnit:
  const baseValue = value / baseUnits[fromUnit]
  // Then convert to expected unit from baseUnit:
  const convertedValue = baseValue * baseUnits[toUnit];

  outputEl.innerText = convertedValue || '';

  outputEl.innerText = outputEl.innerText.length <= 10 ? outputEl.innerText : Number(outputEl.innerText).toPrecision(4);
}


// LISTENERS

inputEl.addEventListener('keyup', () => {
  convert(inputEl.value, inputBtn.value, outputBtn.value)
})

inputEl.addEventListener('change', () => {
  convert(inputEl.value, inputBtn.value, outputBtn.value)
})

inputBtn.addEventListener('change', () => {
  convert(inputEl.value, inputBtn.value, outputBtn.value)
})

outputBtn.addEventListener('change', () => {
  convert(inputEl.value, inputBtn.value, outputBtn.value)
})

changeBtn.addEventListener('click', () => {
  const savedInput = inputBtn.value;
  inputBtn.value = outputBtn.value;
  outputBtn.value = savedInput;
  convert(inputEl.value, inputBtn.value, outputBtn.value);
})