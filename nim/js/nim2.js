// Javascript file for Game of Nim Version 2

// Ben Collins 2/17/2015

// setup empty game score array
var currentGame = [];

// access the variables in local storage from game start page
for (var i = 0; i < 3; i++) {
		currentGame.push(Number(localStorage.getItem('pile'+i)));
		document.getElementById("pile" + i).innerHTML = currentGame[i];
}

document.getElementById("new_game").style.display = "none";

// function to initiate new game
function newGame() {
	location.href='nim2_start.html';
}

function playerTurn() {
	// get the pile number selected by player and the number to pick up
	var player_pile = document.getElementById("pile_select").value - 1;
	var player_turn = document.getElementById("amount_selected").value;

	// setup variable to hold the pile score from the pile selected by the player
	var currentPileScore = currentGame[player_pile];
	
	// conditional to account for situation where user choice is greater than pile
	if (player_turn > currentPileScore) {
		currentPileScore = 0;
		document.getElementById("pile" + player_pile).innerHTML = currentPileScore;
		alert("You cannot pick up more than " + currentPileScore + ". Pile is now zero.")
	}
	else {
		currentPileScore -= player_turn; // remove the amount entered by player
		document.getElementById("pile" + player_pile).innerHTML = currentPileScore;	
	};

	// update the current Game score and the values showing on the webpage
	currentGame[player_pile] = currentPileScore;

	// declare winner if total game score is zero
	if (sumArray(currentGame) == 0) {
		console.log("computer wins!")
		declareWinner(0);
	}
	// else continue with the computer turn
	else {
		// reset the pile and amount inputs
		document.getElementById("pile_select").value = 0;
		document.getElementById("amount_selected").value = "";

		// hide the player options line
		document.getElementById("player_go").style.display = "none";

		// show the computer turn button
		document.getElementById("computer_button").style.display = "block";
	}
}

function randomPile() {
	// returns a number 0, 1 or 2
	var piles = [0,1,2];
	var pile = piles[Math.floor(Math.random() * 3)];
	
	// check that the pile picked is not zero and the total score is not zero
	while (currentGame[pile] == 0) {
		pile = piles[Math.floor(Math.random() * 3)];	
	}

	return pile;
}

function computerTurn() {
	// computer chooses which pile to pick from
	var computerPile = randomPile();

	// computer picks random number from chosen pile
	var currentPileScore = currentGame[computerPile];
	var computerChoice = (Math.random() * (currentPileScore) | 0) + 1;

	// update the game stack
	currentPileScore -= computerChoice;
	currentGame[computerPile] = currentPileScore;

	// update the score pile shown on screen
	document.getElementById("pile" + (computerPile)).innerHTML = currentPileScore;

	// show the computer choice
	document.getElementById("computer_go").innerHTML = "Computer chose pile " + (computerPile + 1) + " and value " + computerChoice;
	document.getElementById("computer_go").style.display = "inline";

	// show the ok button for user to click
	document.getElementById("ok_button").style.display = "inline";

	// hide the computer turn button
	document.getElementById("computer_button").style.display = "none";

	// if game score = 0 then declare the player as winner
	if (sumArray(currentGame) == 0) {
		// console.log("player wins!")
		declareWinner(1);
	}

}

// ok button function
function ok_go() {
	// show the player options line
	document.getElementById("player_go").style.display = "block";

	// hide the computer button and the ok button
	document.getElementById("computer_go").style.display = "none";
	document.getElementById("ok_button").style.display = "none";
}

// function to sum the game score array
function sumArray(array) {
	var total = 0;
	for (var i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}

// function to declare the winner and hide unecessary elements
function declareWinner(number) {
	if (number == 1) {
		// document.getElementById("computer_go").style.visibility='hidden';
		document.getElementById("computer_go").style.display = "none";
		document.getElementById("ok_button").style.display = "none";
		document.getElementById("new_game").style.display = "block";
		alert("You win!");
	}
	else {
		document.getElementById("player_go").style.display = "none";
		document.getElementById("computer_go").style.display = "none";
		document.getElementById("new_game").style.display = "block";
		alert("Computer wins!");
	}
}