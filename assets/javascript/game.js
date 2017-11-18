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

//display the random word using blanks to take the place of letters
var answer = [];
//var numBlanks = answer.length;
answer = computerChoice.split("");
var numBlanks = [];
console.log(answer);
console.log(numBlanks);
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

//capture the letter the user inputs
	document.onkeyup  = function(event){
	 guess = event.key;
	console.log(guess);
	startGame();
}

//the game code and loops
//document.getElementById("demo").innerHTML = computerChoice.join(" ");

function startGame() {
	console.log("works");
	// while (lettersRemain > 0) {
	//get the letter input guess from the user	
	//document.onkeyup = function(event) {
		//guess = event.key.toLowerCase();
		//console.log(guess);
	//}
	if (lettersRemain > 0) {
			
	for (var j = 0; j < answer.length; j++) {
		if (guessesRemaining === 0) {
			document.getElementById("outcome").innerHTML = 
			("Sorry, but you lose.");
			}
		if (lettersRemain === 0) {
			document.getElementById("outcome").innerHTML = 
			("You win!");
		}
		if (answer[j] === guess) {
			numBlanks[j] = guess;
			displayGuessedWord();
			console.log('These are our numblanks', numBlanks);
			lettersRemain--;
			console.log(lettersRemain);
		}
		else if (answer[j] !== guess ) {
			if (incorrectGuess.indexOf(guess) === -1 && answer.indexOf(guess) === -1) {
			incorrectGuess.push(guess);
			document.getElementById("lettersUsed").innerHTML = 
			incorrectGuess.join(', ');
			}
			console.log("guesses remaining " + incorrectGuess);
			}
			
		 
		
	}
			guessesRemaining--;

	}
	}







