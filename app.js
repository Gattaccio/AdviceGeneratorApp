let quote = document.querySelector('.advice');
let dice = document.querySelector('#dice');

getQuote();

async function getQuote () {
 const response = await fetch ('https://api.adviceslip.com/advice'); 
 const data = await response.json(); 
 quote.innerHTML=data.slip.advice;
 console.log(data.slip.advice);
}

dice.addEventListener('click', ()=> {
    location.reload();
})



