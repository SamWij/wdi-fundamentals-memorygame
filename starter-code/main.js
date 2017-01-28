console.log("JS file is connected to HTML! Woo!");
// var cardOne = "queen";
// var cardTwo = "queen" ;
// var cardThree = "king";
// var cardFour = "king";

/*if (cardOne === cardTwo) {
alert("you found a match")
} else if (cardOne === cardThree) {
alert("Sorry Try Again")
}*/

var board = document.getElementById('game-board');
function createCard() {
	for (var x = 1; x <= 4; x += 1) {
		var createDiv = document.createElement('div');
		createDiv.className = 'card';
		board.appendChild(createDiv);
		console.log(createDiv);
	}
};
createCard();
