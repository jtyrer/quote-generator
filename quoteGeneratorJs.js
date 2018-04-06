$('document').ready(function () {

//Store all quotes    
var quoteArray = ['“Help me, Obi-Wan Kenobi. You’re my only hope.” — Leia Organa', '“I find your lack of faith disturbing.” — Darth Vader', '“The Force will be with you. Always.” — Obi-Wan Kenobi', '“Never tell me the odds!” — Han Solo', '“Do. Or do not. There is no try.” — Yoda', '“When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned.” — Yoda', '“I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.” — Luke Skywalker', '"Do it." - Emperor Palpatine', '“Now, young Skywalker, you will die.” — Emperor Palpatine', '“There’s always a bigger fish.” — Qui-Gon Jinn', '“Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you.” — Yoda', '“Power! Unlimited power!” — Darth Sidious'];

//Generate random number and assign it to the array index    
var arrIndex = Math.floor(Math.random()*quoteArray.length);
 
var randomQuote = quoteArray[arrIndex]; 

//Display quote on load    
$('#quote').html(randomQuote);

//Generate a different random number for the quote array index    
$('#newQuoteBtn').click(function(){
  arrIndex = Math.floor(Math.random()*quoteArray.length);
  randomQuote = quoteArray[arrIndex];
  $('#quote').html(randomQuote);
//Change Twitter button link to the current quote    
  $("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text="+randomQuote);
});
$("#tweetBtn").attr("href", "https://twitter.com/intent/tweet?text="+randomQuote);
});  