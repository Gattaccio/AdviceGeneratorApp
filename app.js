var quote = document.querySelector('.advice');
let dice = document.querySelector('#dice');
var nadvice = document.querySelector('#nadvice');

var idrand = Math.floor(Math.random() * 220) + 1;
getQuote(idrand);

async function getQuote (idrand) {
 var random_quote = 'https://api.adviceslip.com/advice/'+idrand;
 console.log(random_quote);
 const response = await fetch (random_quote); 
 const data = await response.json(); 
 quote.innerHTML=data.slip.advice;
 nadvice.innerHTML=data.slip.id;
}

dice.addEventListener('click', ()=> {
    var idrand = Math.floor(Math.random() * 220) + 1;
    getQuote(idrand);
})
