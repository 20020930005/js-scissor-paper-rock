
      

         
let Score = JSON.parse(localStorage.getItem('Score')) || {
wins: 0,
losses: 0,
ties: 0
};

updateScoreElement();



function playGame(playerMove) {
const computerMove = pickComputerMove();

let result = '';

if (playerMove === 'scissors') {
 if (computerMove === 'rock') {
   result = 'You lose.';
 } else if (computerMove === 'paper') {
   result = 'You win.';
 } else {
   result = 'Tie.';
 }
} else if (playerMove === 'paper') {
 if (computerMove === 'rock') {
   result = 'You win.';
 } else if (computerMove === 'paper') {
   result = 'Tie.';
 } else {
   result = 'You lose.';
 }
} else if (playerMove === 'rock') {
 if (computerMove === 'rock') {
   result = 'Tie.';
 } else if (computerMove === 'paper') {
   result = 'You lose.';
 } else {
   result = 'You win.';
 }
}

// Update the score
if (result === 'You win.') {
 Score.wins += 1;
} else if (result === 'You lose.') {
 Score.losses += 1;
} else if (result === 'Tie.') {
 Score.ties += 1;
}

// Save updated score to localStorage
localStorage.setItem('Score', JSON.stringify(Score));


updateScoreElement();




document.querySelector('.js-result').innerHTML=`${result}`;

document.querySelector('.js-move').innerHTML=`you 
<img src="Images/${playerMove}-emoji.png" class="move-icon">
<img src="Images/${computerMove}-emoji.png" class="move-icon">
computer`;
}




function pickComputerMove() {
const randomNumber = Math.random();

if (randomNumber < 1 / 3) {
 return 'rock';
} else if (randomNumber < 2 / 3) {
 return 'paper';
} else {
 return 'scissors';
}
}

function resetScore() {
// Reset the score
Score = { wins: 0, losses: 0, ties: 0 };

// Update localStorage
localStorage.setItem('Score', JSON.stringify(Score));

alert('Score has been reset.');
}

function updateScoreElement(){
document.querySelector('.js-score').innerHTML=`Wins: ${Score.wins}, Losses: ${Score.losses}, Ties: ${Score.ties}`;
}


