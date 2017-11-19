function hangman() {

//creates an array for the words the computer chooses from
var words = ["Spitfire", "Panther", "Patton", "Midway", "Enterprise",
			"Barbarossa", "Lexington", "Hawaii", "Montgomery",
			"Eisenhower", "Berlin", "Tokyo", "London", 
			"Rommel", "Overlord", "Moscow", "Guadalcanal", 
			"Stalingrad", "Zhukov", "Normandy", "Dunkirk",
			"Blitzkrieg", "Yamamoto", "Zero", "Hiroshima"];

//computer randomly chooses a word from the words array
var computerChoice = words[Math.floor(Math.random()
		* words.length)].toLowerCase();

		console.log(computerChoice);

//put the random word in an array of its own separating the letters
//into the elements of the array
var answer = [];
answer = computerChoice.split("");
var numBlanks = [];
console.log(answer);
console.log(numBlanks);
//replacing the letters of the unknown word with underscores
for (var i = 0; i < answer.length; i++) {
	numBlanks[i] = "_";
}

function displayGuessedWord () {	
document.getElementById("demo").innerHTML = numBlanks.join(" ");
};
displayGuessedWord();
var guessesRemaining = 12;
var lettersRemain = answer.length;
	console.log("letters Remain " + lettersRemain);

var incorrectGuess = [];

var guess;

var wins = 0;

var losses = 0;


//capture the letter the user inputs
	document.onkeyup  = function(event){
	 guess = event.key;
	console.log(guess);
	startGame();
}

//the game code and loops

function startGame() {
	console.log("works");
	
	if (lettersRemain > 0) {

	//compare the letter guessed to the letter in the array of the picked word		
	for (var j = 0; j < answer.length; j++) {
		if (guessesRemaining === 0) {
			document.getElementById("outcome").innerHTML = 
			("Sorry, but you lose. The correct word is " + 
				computerChoice + ".");
			}
		if (lettersRemain === 0) {
			document.getElementById("outcome").innerHTML = 
			("You win!");
			wins++;
			document.getElementById("wins").innerHTML = 
			(wins);
			console.log("lettersRemain");
		}

		//if guessed letter is in the unknown word
		if (answer[j] === guess) {
			numBlanks[j] = guess;
			displayGuessedWord();
			console.log('These are our numblanks', numBlanks);
			lettersRemain--;
			console.log("lettersRemain " + lettersRemain);
		}
		//if guessed letter is not in the unknown word
		else if (answer[j] !== guess ) {
			if (incorrectGuess.indexOf(guess) === -1 && answer.indexOf(guess) === -1) {
			incorrectGuess.push(guess);
			document.getElementById("lettersUsed").innerHTML = 
			incorrectGuess.join(', ');
			}

			}
			
		 
		
	}

	}
			//decrease the number of guesses left to the user
			guessesRemaining--;
			document.getElementById("guessesLeft").innerHTML = 
				(guessesRemaining);
			
	}
	//reset the game with a new word
	document.getElementById("reset").onclick = function() {
		//clear the variables used in the game
		computerChoice = null;
		answer = null;
		numBlanks = null;
		guessesRemaining = null;
		lettersRemain = null;
		incorrectGuess = null;
		guess = null;
		console.log(computerChoice);
		console.log(answer);
	}
}
//restart with new word
hangman();
