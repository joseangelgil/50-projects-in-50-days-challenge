const itemsEl = document.querySelectorAll('.item');
const listNumber = document.getElementById('list-number');
const totalItemsEl = document.getElementById('total-items');
const cart = document.getElementById('cart')
const cancelBtn = document.getElementById('cancel')
const clearBtn = document.getElementById('clear')
const shoppingListEl = document.querySelector('.shopping-list')
const shoppingListContentEl = document.querySelector('.shopping-list-content')
const shoppingListItemsEl = document.querySelector('.shopping-list-items')

let numberOfItems = 0;

let itemSelection = {
  cyan: 0,
  red: 0,
  green: 0,
  yellow: 0,
  pink: 0,
  orangered: 0,
  grey: 0
}

function updateCartContent() {
  totalItemsEl.innerText = numberOfItems;
  itemsEl.forEach(item => {
    let itemNumber = itemSelection[item.innerText.toLowerCase()]
    if(itemNumber > 0) {
      shoppingListItemsEl.innerHTML += `<p>${itemNumber} x ${item.innerText}</p>`
    }
  })
}

itemsEl.forEach(item => {
  item.style.backgroundColor = `${item.innerText}`
  item.addEventListener('click', () => {
    numberOfItems++
    listNumber.innerText = numberOfItems
    itemSelection[item.innerText.toLowerCase()] += 1
  })
})

cart.addEventListener('click', () => {
  updateCartContent()
  shoppingListEl.style.display = 'block';
})

cancelBtn.addEventListener('click', () => {
  shoppingListEl.style.display = 'none';  
  shoppingListItemsEl.innerHTML = '';
})

clearBtn.addEventListener('click', () => {
  numberOfItems = 0;
  listNumber.innerText = '';
  shoppingListEl.style.display = 'none';
  shoppingListItemsEl.innerHTML = '';
  itemSelection = {
    cyan: 0,
    red: 0,
    green: 0,
    yellow: 0,
    pink: 0,
    orangered: 0,
    grey: 0
  }
})