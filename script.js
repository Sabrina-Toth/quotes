const quotes = [
{
    name: 'Selena Gomez',
    quote: "If you are broken, you don't have to stay broken."
},
{
    name: 'Tom Hiddleston',
    quote:"Make love not war. Unless your Loki then do what you want."
},
{
    name: 'Pewdiepie',
    quote:"Don't be a salad. Be the best god darn broccili you can ever be."
},
{
    name: 'Loki',
    quote: "I am burden with glurious purpose."
},
{
    name: 'Captain James Kirk',
    quote: "I have no idea what I'm supposed to do, I only know what I can do."
},

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote () {

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;




}