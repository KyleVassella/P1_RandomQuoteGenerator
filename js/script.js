/***********************************************************
This project was tested on Google Chrome, Safari & Firefox
***********************************************************/
(function() {
  'use strict';   //  tells the JavaScript interpreter to run this program in a strict variant.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);  // event listener to respond to clicks on the page. When user clicks anywhere on the page, the printQuote() function is called.

var intervalTimer = window.setInterval(printQuote, 15000);  //  automatically displays a new quote every 15 seconds.

var quotes = [   // an array of quote objects, one of which will display its values when printQuote() is called.
  {quote: "A man away from home need feel no shame.", source: "Mozart", year: "1780", tag: "| inspirational", seen: false},
  {quote: "Don't train alone - it only embeds your errors.", source: "Giralt of Rivia", citation: "The Witcher 3", tag: "| gaming", seen: false},
  {quote: "Perseverance is failing 19 times and succeeding the 20th.", source: "Julie Andrews", tag: "| inspirational", seen: false},
  {quote: "That's the thing that you see about great business owners..is this...undying optimism. They're realistic, but they're optimistic. Ooh, that rhymes!", source: "Robert Herjavec", citation: "Shark Tank", year: "2014", tag: "| television", seen: false},
  {quote: "You test people under pressure. And under pressure, he was a dud.", source: "Donald J. Trump", citation: "The Apprentice", tag: "| television", seen: false},
  {quote: "Why are dingleberries brown? That's just the way shit is.", source: "Abraham", citation: "The Walking Dead", tag: "| television", seen: false} 
  ];

//  variables to represent the values of each quotes array object's properties - for use in displaying only those properties that each object has. The j at start of the name is to help differentiate them from the quotes[] properties/keys.
var jQuote;
var jSource;
var jCitation;
var jYear;
var jTag;   // extra credit property/key.
var quoteObj; //  variable to hold the results (return) of the getRandomQuote() function.
var randomNumber; //  variable to hold a randomly generated number.
var counter = 0;  //  counter to keep track of how many individual quotes.seen properties have been displayed.

  function clearInterval() {  //  resets the 15 second countdown every time the loadQuote button is pressed - this ensures that the 15 second countdown stays consistent (restarts) each time the loadQuote button is pressed.
    window.clearInterval(intervalTimer);  //  clears the 15 second countdown.
    intervalTimer = window.setInterval(printQuote, 15000); // immediately re-establishes the 15 second countdown.
  }

function getRandomQuote () {    // generates a random number, increments counter, sets quotes.seen to 'true' and returns it. If quotes.seen is already true, while loop activates.


randomNumber = Math.floor(Math.random() * quotes.length);    // generates and asigns a random number to a variable, to serve as the index of the quotes array.

  while (quotes[randomNumber].seen) {    // if quotes.seen is false, while loop never runs. If quotes.seen is true, while loop generates a new random number and repeats until quotes.seen is false, preventing the same quote from running twice before all quotes have run.
    if (counter == quotes.length){    // once each quote has displayed (aka all quotes.seen set to true), for loop runs which resets all quotes.seen to false and resets counter to 0.
      for (var i=0; i < quotes.length; i++) {
        quotes[i].seen = false;
      }
      counter = 0;    // reset of counter after it has reached quotes.length. This reset is critical because it prevents an endless loop. Resetting counter here prevents all quotes.seen from being perpetually true.
    }
    randomNumber = Math.floor(Math.random() * quotes.length);    // resets randomNumber if a quote w/ a .seen value of true appears, since a true value would mean a quote which already appeared.
  }
    counter++;     // increments the counter
    quotes[randomNumber].seen = true;    // sets selected quote's 'seen' property to a value of true - for use in while loop.
    return quotes[randomNumber];         
}


function printQuote () {    // calls the getRandomQuote() function and stores the returned quote object in a variable (var quoteObj). Constructs a string using the different properties of the quote object. Manipulates the DOM to display the final HTML string ot the page.

    clearInterval();  //calls the clearInterval function which resets the 15 second countdown each time the loadQuote button is pressed, improving UX.

  quoteObj = getRandomQuote();
  jQuote = quoteObj.quote;
  jSource = quoteObj.source;
  jCitation = quoteObj.citation;
  jYear = quoteObj.year;
  jTag = quoteObj.tag;
    
var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
var col = "rgb(" + r + "," + g + "," + b + ")";
document.body.style.backgroundColor = col;  // background color generator which randomly selects a background color


  if (jCitation != null && jYear != null){        // conditional statements which print only those properties/values that the selected quote object has.
      document.getElementById("quote-box").innerHTML = '<p class="quote">' + jQuote + '</p>' + '<p class = "source"> ' + jSource + '<span class = "citation"> ' + jCitation + '</span><span class="year"> ' + jYear + ' </span> <span class="tag"> ' + jTag + ' </span></p>';
  } else if (jCitation != null) {
      document.getElementById("quote-box").innerHTML = '<p class="quote">' + jQuote + '</p>' + '<p class = "source"> ' + jSource + '<span class = "citation"> ' + jCitation + ' </span> <span class="tag"> ' + jTag + ' </span></p>';
  } else if (jYear !== null) {
      document.getElementById("quote-box").innerHTML = '<p class="quote">' + jQuote + '</p>' + '<p class = "source"> ' + jSource + '<span class="year"> ' + jYear + ' </span> <span class="tag"> ' + jTag + ' </span></p>';
  } else {
      document.getElementById("quote-box").innerHTML = '<p class="quote">' + jQuote + '</p>' + '<p class = "source"> ' + jSource + '<span class="tag"> ' + jTag + ' </span></p>';
  }
}

  })();

