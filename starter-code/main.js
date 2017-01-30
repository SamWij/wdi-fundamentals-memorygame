console.log("JS file is connected to HTML! Woo!");


var board = document.getElementById('game-board');

var cards = ['queen', 'queen', 'king', 'king', 'queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var buttonPlayGame = document.getElementById ('playGame')


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



function isMatch() {

	if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}



function isTwoCards () {

cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = '<img src="images/king.png">'; // king
	} else {
		this.innerHTML = '<img src="images/queen.png">'; //queen
	}
  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {
    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);
    // clear cards in play array for next try
    cardsInPlay = [];
  }
}

createBoard(cards);




buttonPlayGame.addEventListener('click', playGame);

	function playGame() {

		
		window.location.reload();
		
	}


