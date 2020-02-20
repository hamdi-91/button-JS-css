
const Quotes = [{
   name: 'Hamdi Doss',
   quote: 'get busy living or get busy dying.'
},
{
   name: 'Okpoto gueros',
   quote: 'those who dare to fail miserably can achieve greatly.'
},
{
   name: 'maurice fubert',
   quote: 'Folks are usually about as happy as they make their minds up to be.'
},
{
   name: 'Cristiano porto ',
   quote: 'Do I not destroy my enemies when I make them my friends?'
}, {
   name: 'Migalo Zlatan ',
   quote: 'My Best Friend is a person who will give me a book I have not read.'
}]


const QuoteBtn = document.querySelector('.QuoteBtn');
const Quote = document.querySelector('#Quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

QuoteBtn.addEventListener('click', displayQuote);
function displayQuote() {
   let number = Math.floor(Math.random() * Quotes.length);
   quoteAuthor.innerHTML = Quotes[number].name;
   Quote.innerHTML = Quotes[number].quote;

}


const hexBTn = document.querySelector('.hexBTn');
const bodyBcg = document.querySelector('body');
const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hex = document.querySelector('.hex');

hexBTn.addEventListener('click', getHex);
function getHex() {
   let hexCol = '#';
   for (let i = 0; i < 6; i++) {
      let rando = Math.floor(Math.random() * hexNumber.length);
      hexCol += hexNumber[rando];
      console.log(hexCol) ;
   }
   bodyBcg.style.backgroundColor = hexCol;
   hex.innerHTML = hexCol;
}