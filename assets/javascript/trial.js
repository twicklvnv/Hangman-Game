//creates an array for the words the computer chooses from
var words = ["Spitfire", "Panther", "Patton", "Midway", "Enterprise",
			"Barbarossa", "Lexington", "Hawaii", "Montgomery",
			"Eisenhower", "Berlin", "Tokyo", "London", 
			"Rommel", "Overlord", "Moscow", "Guadalcanal", 
			"Stalingrad", "Zhukov", "Normandy", "Dunkirk",
			"Blitzkrieg", "Yamamoto", "Zero", "Hiroshima"];

//computer randomly chooses a word from the words array
var word = words[Math.floor(Math.random()
		* words.length)].toLowerCase();
	var answerArray=[];
	for(var i=0; i<word.length; i++) {
		answerArray[i]="_";
	}
	var remainingLetters=word.length;

	while (remainngLetters>0) {
		alert(answerArray.join(" "));
		var guess = prompt("guess a letter");
		if(guess===null) {
			break;
		}else if (guess.length!--1){
			alert("enter single letter"0);
		}else{
			for (var j=0; j<word.length; j++) {
				if(word[j]===guess) {
					answerArray[j]=guess;
					remainingLetters--;
				}
			}
		}

	}