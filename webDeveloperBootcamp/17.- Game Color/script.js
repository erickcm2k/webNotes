const squares = document.getElementsByClassName("square");
const rgbColorLabel = document.querySelector("span");
const message = document.getElementById("message");
const resetButton = document.querySelector("button");
const easyButton = document.getElementById("easy-btn");
const hardButton = document.getElementById("hard-btn");

easyButton.addEventListener("click", function () {
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  easyMode();
});
hardButton.addEventListener("click", function () {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  hardMode();
});

var colors = newColors(6);
var randomPosition = guessColorValue(5);
var randomColor = colors[randomPosition];

startGame();

rgbColorLabel.textContent = `${randomColor} Hint: ${
  Number(randomPosition) + 1
}`;
resetButton.addEventListener("click", resetGame);

function startGame() {
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
  if (easyButton.classList.contains("selected")) {
    easyMode();
  } else if (hardButton.classList.contains("selected")) {
    hardMode();
  } else {
    // Hard mode by default
    hardMode();
  }
}

function hardMode() {
  colors = newColors(6);

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }

  randomPosition = guessColorValue(5);
  randomColor = colors[randomPosition];
  rgbColorLabel.textContent = `${randomColor} Hint: ${
    Number(randomPosition) + 1
  }`;
}

function easyMode() {
  colors = newColors(3);

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  randomPosition = guessColorValue(2);
  randomColor = colors[randomPosition];
  rgbColorLabel.textContent = `${randomColor} Hint: ${
    Number(randomPosition) + 1
  }`;
}

function guessColorValue(num) {
  return Math.round(Math.random() * num);
}

function newColors(num) {
  let colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(getRandomRGB());
  }
  return colors;
}

function getRandomRGB() {
  let R = Math.round(Math.random() * 255);
  let G = Math.round(Math.random() * 255);
  let B = Math.round(Math.random() * 255);
  return `rgb(${R}, ${G}, ${B})`;
}
