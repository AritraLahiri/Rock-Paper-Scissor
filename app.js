const game = () => {
	let playerScore = 0,
		rivalScore = 0;
	const winner = document.querySelector('.winner');

	// Start the Game
	const startGame = () => {
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEventListener('click', () => {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};

	// Play Match

	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player__hand');
		const rivalHand = document.querySelector('.computer__hand');
		const rivalOptions = [ 'Rock', 'Paper', 'Scissor' ];

		const hands = document.querySelectorAll('.hands img');

		hands.forEach((hand) => {
			hand.addEventListener('animationend', function() {
				this.style.animation = '';
			});
		});

		options.forEach((option) => {
			option.addEventListener('click', function() {
				setTimeout(() => {
					//Computer Choice
					const rivalIndex = Math.floor(Math.random() * 3);
					const rivalChoose = rivalOptions[rivalIndex];

					compareHands(this.textContent, rivalChoose);

					// updating Images
					playerHand.src = `./assets/${this.textContent.toLowerCase()}.png `;
					rivalHand.src = `./assets/${rivalChoose.toLowerCase()}.png `;
				}, 2000);

				playerHand.src = `./assets/rock.png `;
				rivalHand.src = `./assets/rock.png `;
				winner.textContent = '';
				playerHand.style.animation = 'shakePlayerHands 2.0s ease';
				rivalHand.style.animation = 'shakeComputerHands 2.0s ease';
			});
		});
	};

	const compareHands = (pChoice, rChoice) => {
		const winner = document.querySelector('.winner');
		if (pChoice === rChoice) {
			winner.textContent = 'Its a tie !';
			winner.style.color = ' #e8ddb5';
			return;
		}

		// Player Chooses Rock
		if (pChoice === 'Rock') {
			if (rChoice === 'Scissor') {
				winner.textContent = 'You Win ! ';
				winner.style.color = '#adf7b6';
				playerScore++;
				updateScore();

				return;
			} else {
				winner.textContent = 'You Lose !';
				winner.style.color = ' #b80c09';

				rivalScore++;
				updateScore();
				return;
			}
		}
		// Player Chooses Paper
		if (pChoice === 'Paper') {
			if (rChoice === 'Scissor') {
				winner.textContent = 'You Lose ! ';
				winner.style.color = ' #b80c09';
				rivalScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'You Win !';
				winner.style.color = '#adf7b6';
				playerScore++;
				updateScore();

				return;
			}
		}

		// Player Chooses Scissors
		if (pChoice === 'Scissor') {
			if (rChoice === 'Rock') {
				winner.textContent = 'You Lose ! ';
				winner.style.color = ' #b80c09';
				rivalScore++;
				updateScore();
				return;
			} else {
				winner.textContent = 'You Win !';
				winner.style.color = '#adf7b6';
				playerScore++;
				updateScore();
				return;
			}
		}
	};

	const updateScore = () => {
		const pScore = document.querySelector('.player__score p');
		const cScore = document.querySelector('.computer__score p');

		pScore.textContent = playerScore;
		cScore.textContent = rivalScore;
	};

	startGame();
	playMatch();
};

game();
