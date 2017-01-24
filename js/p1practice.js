var quotes = [   // an array of quote objects, one of which will display its values when printQuote() is called.
  {quote: "A man away from home need feel no shame.", source: "Mozart", year: "1780", tag: "| inspirational", seen: false},
  {quote: "Don't train alone - it only embeds your errors.", source: "Giralt of Rivia", citation: "The Witcher 3", tag: "| gaming", seen: false},
  {quote: "Perseverance is failing 19 times and succeeding the 20th.", source: "Julie Andrews", tag: "| inspirational", seen: false},
  {quote: "That's the thing that you see about great business owners..is this...undying optimism. They're realistic, but they're optimistic. Ooh, that rhymes!", source: "Robert Herjavec", citation: "Shark Tank", year: "2014", tag: "| television", seen: false},
  {quote: "You test people under pressure. And under pressure, he was a dud.", source: "Donald J. Trump", citation: "The Apprentice", tag: "| television", seen: false},
  {quote: "Why are dingleberries brown? That's just the way shit is.", source: "Abraham", citation: "The Walking Dead", tag: "| television", seen: false} 
  ];

  var counter=0;
  var chosenQuote;
  var randomNumber;



  function getQuote() {
  	randomNumber = Math.floor(Math.getRandomNumber() * quotes.length);
  	chosenQuote = quotes[randomNumber];
  	while (quotes[randomNumber].seen) {
  		if (counter = quotes.length) {
  			for (var i = 0; i < quotes.length; i++) {
  					quotes[i].seen = false;
  				}	
  				counter = 0;
  			}
			randomNumber = Math.floor(Math.getRandomNumber() * quotes.length);
		}
		return chosenQuote;
	}

function printQuote() {
	vsource = 


	if (vsource !== undefined) {
do
	}
}

quotes[randomNumber].seen = true;
counter++;

 
