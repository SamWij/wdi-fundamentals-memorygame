console.log("JS file is connected to HTML! Woo!");

var board = document.getElementById('game-board');

var cards = ['queen', 'queen', 'king', 'king','queen', 'king'];

var cardsInPlay = [];

var buttonSingleGame = document.getElementById ('newGame')

//create the board
function createBoard() {


	for (var i = 0; i < cards.length; i ++) {
		var cardElement = document.createElement('div');

		cardElement.className = 'card';

		board.appendChild(cardElement);

		cardElement.setAttribute('data-card', cards[i]);

		cardElement.addEventListener('click', isTwoCards);

		console.log(cardElement);

	}

};

createBoard(cards);

function isMatch() {

	if (cardsInPlay[0].charAt(0) === cardsInPlay[1].charAt(0)) {
    alert("You found a match!");

  } else {
    alert("Sorry, try again.");

  }

	window.location.reload();
}

//randomize the array
cards.sort(function() { return 0.5 - Math.random() });


//display the cards clicked and display the image
function isTwoCards () {

cardsInPlay.push(this.getAttribute('data-card'));

console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {

		this.innerHTML = '<img src="images/king.png">';

		} else {

		this.innerHTML = '<img src="images/queen.png">';
	}

  	if (cardsInPlay.length === 2) {

    	isMatch(cardsInPlay);

    	cardsInPlay = [];
  		}
	}




//on button click call newGame button which resets the board.
buttonSingleGame.addEventListener('click', newGame);



function newGame() {

	window.location.reload();

}
