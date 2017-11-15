//creates an array for the words the computer chooses from
var words = ["Spitfire", "Panther", "Patton", "Midway", "Enterprise",
			"Barbarossa", "Lexington", "Pearl Harbor", "Montgomery",
			"Eisenhower", "Berlin", "Tokyo", "Enola Gay", 
			"Rommel", "Overlord", "Coral Sea", "Guadalcanal", 
			"El Alamein", "Zhukov", "Normandy", "Dunkirk",
			"Blitzkrieg", "Yamamoto", "Zero", "Hiroshima"];

//computer randomly chooses a word from the words array
var computerChoice = words[Math.floor(Math.random()
		* words.length)].toLowerCase();

		console.log(computerChoice);

//display the random word using blanks to take the place of letters
var choiceBlanks = [];
for (var i = 0; i < computerChoice.length; i++) {
	choiceBlanks[i] = "_";
}
	console.log(choiceBlanks);
	
document.getElementById("demo").innerHTML = choiceBlanks.join(" ");



//capture the letter the user inputs
document.onkeyup = function () {
	var userGuess = String.fromCharCode(event.keyCode).
	toLowerCase();
	console.log(userGuess);
}