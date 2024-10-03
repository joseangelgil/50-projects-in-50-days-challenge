const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const btn = document.getElementById('btn');

async function generateNewQuote() {

  let data;

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    data = await response.json();
  } catch(error) {
    console.error(error);
  }

  quoteEl.innerText = data.quote;
  authorEl.innerText = `-- ${data.author}`;
}

window.addEventListener('load', generateNewQuote);
btn.addEventListener('click', generateNewQuote);