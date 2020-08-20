const playerOneButton = document.getElementById('playerOneButton');
const playerTwoButton = document.getElementById('playerTwoButton');
const playerOneDisplay = document.getElementById('playerOneScore');
const playerTwoDisplay = document.getElementById('playerTwoScore');
const resetButton = document.getElementById('resetButton');
const gameState = document.getElementById('game-state');
const winningScoreInput = document.querySelector('input');
var winningScoreLabel = document.getElementById('winning-score-label');
// Game Logic
var playerOneScore = 0;
var playerTwoScore = 0;
var winningScore = 5;
var gameOver = false;

winningScoreInput.value = winningScore;

winningScoreInput.addEventListener('change', function() {
        if(playerOneScore !== 0 || playerTwoScore !==0) {
            alert('New winning value detected. Restarting game...');
        }
        resetGame();
        winningScore = parseInt(winningScoreInput.value);
        winningScoreLabel.textContent = winningScore;
});

playerOneButton.addEventListener('click', function() {
    if(!gameOver) {
        playerOneScore++;
        playerOneDisplay.textContent = playerOneScore;
        if(playerOneScore === winningScore) {
            gameState.textContent = 'Player one wins!';
            gameOver = true;
        }
    }
});

playerTwoButton.addEventListener('click', function() {
    if(!gameOver) {
        playerTwoScore++;
        playerTwoDisplay.textContent = playerTwoScore;
        if(playerTwoScore === winningScore) {
            gameState.textContent = 'Player two wins!';
            gameOver = true;
        }
    }
});

resetButton.addEventListener('click', resetGame);

function resetGame() {
    gameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.textContent = playerOneScore;
    playerTwoDisplay.textContent = playerTwoScore;
    gameState.textContent = '';
}