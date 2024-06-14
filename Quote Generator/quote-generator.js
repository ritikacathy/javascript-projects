quote_array = [
    '“Life is 10% what happens to us and 90% how we react to it.”\n– Charles R. Swindoll',
'“The greatest glory in living lies not in never falling, but in rising every time we fall.”\n– Nelson Mandela',
'“The only way to achieve the impossible is to believe it is possible.”\n– Charles Kingsleigh',
'“The best preparation for tomorrow is doing your best today.”\n– H. Jackson Brown Jr.',
'“The future depends on what you do today.”\n– Mahatma Gandhi',
'“Every moment is a fresh beginning.”\n– T.S. Eliot',
'“You are never too old to set another goal or to dream a new dream.”\n– C.S. Lewis',
'“The only limit to our realization of tomorrow will be our doubts of today.”\n– Franklin D. Roosevelt',
'“Believe you can and you’re halfway there.”\n– Theodore Roosevelt',
'“Success is not final, failure is not fatal: It is the courage to continue that counts.”\n– Winston Churchill',
'“The only way to do great work is to love what you do.”\n– Steve Jobs',
'“Happiness is not something readymade. It comes from your own actions.”\n– Dalai Lama',
'“Be yourself; everyone else is already taken.”\n– Oscar Wilde',
'“Strive not to be a success, but rather to be of value.”\n– Albert Einstein',
'“You miss 100% of the shots you don’t take.”\n– Wayne Gretzky'
];

function randomQuotes(arr1){
    return arr1[Math.floor(Math.random()*arr1.length)];
} // this will fetch a quote from array

function displayQuotes(){
    const quote = randomQuotes(quote_array);
    document.getElementById('quote').innerText = quote;
} // html id='quote'. JavaScript generates a random quote and assigns it to the innerText property of the <span> element.
// <span> is a place holder


document.addEventListener('DOMContentLoaded', function(){
    displayQuotes()

    document.getElementById('regenerate-button').addEventListener('click', displayQuotes); // addEventlistener(type, listener)
});

/*

DOMContentLoaded is an event in JavaScript that is fired when the initial HTML document has been completely 
loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This means that 
all the DOM (Document Object Model) elements are accessible and can be manipulated.
*/