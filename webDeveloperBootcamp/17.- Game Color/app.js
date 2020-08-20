const squares = document.getElementsByClassName("square");
const rgbColorLabel = document.querySelector("span");
const message = document.getElementById("message");
const resetButton = document.querySelector("button");

var colors = generateRandomColors(6);
var randomPosition = pickColor();
var randomColor = colors[randomPosition];

initializeGame();

rgbColorLabel.textContent = `${randomColor} Hint: ${
  Number(randomPosition) + 1
}`;
resetButton.addEventListener("click", resetGame);

function initializeGame() {
  for (var i = 0; i < squares.length; i++) {
    // Add initial colors
    squares[i].style.background = colors[i];

    // Add event listeners
    squares[i].addEventListener("click", function () {
      // Grab color of picked square and compare it to the random color
      let clickedColor = this.style.background;

      if (clickedColor === randomColor) {
        alert("You win!");
        alert("Restarting the game...");
        resetGame();
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Wrong! Try Again";
      }
    });
  }
}

function resetGame() {
  colors = generateRandomColors(6);

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }

  randomPosition = pickColor();
  randomColor = colors[randomPosition];
  rgbColorLabel.textContent = `${randomColor} Hint: ${
    Number(randomPosition) + 1
  }`;
}

function pickColor() {
  return Math.round(Math.random() * 5);
}

function generateRandomColors(num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(getRandomColor());
  }
  return colors;
}

function getRandomColor() {
  let R = Math.round(Math.random() * 255);
  let G = Math.round(Math.random() * 255);
  let B = Math.round(Math.random() * 255);
  return `rgb(${R}, ${G}, ${B})`;
}
