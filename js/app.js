function getRandomInt (min, max) {
	return Math.floor(Math.random()* (max - min +1)) + min;
}

function getCard() {
	var cards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	return cards[getRandomInt(0, cards.length -1)];
}

function getStatus () {
	return 'Dealer: ' + dealer.join(',') + ' Player: ' + player.join(',') + '.'
}

function getSum (hand) {
	var sum = 0;

	for (var i = 0; i < hand.length; i++) {
		var card = hand[i];
		if (card != 'A') {
			if (card == 'J' || card == 'Q' || card == 'K') {
				sum = sum + 10;
			} else {
				sum = sum + parseInt(card);
			}
		}
	}

	for (var i = 0; i < hand.length; i++) {
		var card = hand[i];
		if (card == 'A') {
			if (sum > 10) {
				sum = sum + 1;
			} else {
				sum = sum + 11;
			}
		}
	}

	return sum;
}

var dealer = [getCard()];
var player = [getCard(), getCard()];

if (getSum(player) == 21) {
	console.log('Lucky Bastard! Black Jack! $_$')
} else {
	var answer = '';
	
	do {
		answer = prompt(getStatus() + ' One more card? 1 - Yes, anykey - No');
		if (answer == '1') {
			player.push(getCard());
			sum = getSum(player);
			if (sum > 21) {
				console.log('Perebor X_X ' + getStatus());
				break;
			} else if (sum == 21) {
				console.log('Black Jack! :P ' + getStatus());
			}
		} else {
			while (getSum(dealer) < 17) {
				dealer.push(getCard());
			}
		}

		var sumDealer = getSum(dealer);
		var sumPlayer = getSum(player);

		if (sumDealer == 21) {
			console.log('Dealer has Black Jack! ' + getStatus());
		} else if (sumDealer > 21) {
			console.log('Dealer has perebor! ' + getStatus());
		} else if (sumPlayer == sumDealer) {
			console.log('Draw! ' + getStatus());
		} else if (sumPlayer > sumDealer) {
			console.log('Win! ' + getStatus());
		} else {
			console.log('Lose! :( ' + getStatus);
		};

	} while (answer == '1');
}