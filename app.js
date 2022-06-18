window.onload = function main() {
  // put variables up here i suppose
  let input = document.getElementById("inputField");
  let guessButton = document.getElementById("guessButton");
  let quitButton = document.getElementById("quitButton");
  let gameRunning = false;
  guessButton.textContent = "Start Game";
  guessButton.addEventListener("click", start);
  guessButton.removeEventListener("click", evalGuess);

  console.log(input);
  console.log(typeof input);

  function reset() {
    guessButton.textContent = "Play Again";
    gameRunning = false;
    guessButton.addEventListener("click", start);
    guessButton.removeEventListener("click", evalGuess);
    answer = null;
    input.disabled = true;
  }

  function start() {
    input.disabled = false;
    console.log(input);
    gameRunning = true;
    var answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
    guessButton.textContent = "Guess";
    guessButton.removeEventListener("click", start);
    guessButton.addEventListener("click", submitGuess);
    quitButton.addEventListener("click", reset);
  }

  function submitGuess(test) {
    test = 1;
    evalGuess(input);
    input.value = "";
  }

  function evalGuess(guess) {
    console.log(guess.value);
    if (guess.value == answer) {
      console.log("winner");
    } else if (guess.value > 100 || guess.value < 1) {
      console.log("invalid numma");
    } else if (guess.value < 100 && guess.value > 1) {
      console.log("between 1 an 100");
    }
  }
};

// input for user's guesses

// some type of feedback element/function

// display number of current guesses

// clock

// BUTTON STUFF
// button to start game, then change that button into
// a way to submit guess

// button to guess again

// button to quit playing
