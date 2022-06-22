window.onload = function main() {
  // put variables up here i suppose
  let input = document.getElementById("inputField");
  let guessButton = document.getElementById("guessButton");
  let quitButton = document.getElementById("quitButton");
  let feedback = document.getElementById("feedback");
  let clock = document.getElementById("clock"); // not sure if you need this
  let minutes = 0;
  let minutesP = document.getElementById("minutes")
  let seconds = 0;
  let secondsP = document.getElementById("seconds");
  let gameRunning = false;
  let answer;
  let attempts = 0;
  let attemptsP = document.getElementById("attempts")
  let parent = document.getElementsByClassName("playArea");
  feedback.textContent = 'Welcome! Click "Start Game" to proceed';
  guessButton.textContent = "Start Game";
  guessButton.addEventListener("click", start);
  guessButton.removeEventListener("click", evalGuess);

  console.log(gameRunning);

  // RESET -- clicking the quit button should be the only reason this runs
  function reset() {
    // doesn't work properly. Can't tell what's happening exactly.
    gameRunning = false;
    attempts = 0;
    attemptsP.textContent = `${attempts.toString()}`
    feedback.textContent = "C'mon now, don't quit!";
    guessButton.textContent = "Play Again";
    guessButton.addEventListener("click", start);
    answer = null;
    input.disabled = true;
  }
  // GAME START
  function start() {
    attempts = 0;
    let gameRunning = true;
    console.log(gameRunning);
    feedback.textContent = "Guess a number from 1 to 100";
    input.disabled = false;
    answer = Math.floor(Math.random() * 100) + 1;
    guessButton.textContent = "Guess";
    guessButton.removeEventListener("click", start);
    guessButton.addEventListener("click", submitGuess);
    quitButton.addEventListener("click", reset);
    parent[0].appendChild(quitButton);

    // ---- Game Clock ---- can't get to stop :|
    let duration = setInterval(timer, 1000);

    function timer() {
      if (gameRunning === true) {
        seconds++;
        secondsP.textContent = `${seconds.toString().padStart(2, "0")}`;
      }
      if (seconds > 59) {
        seconds = 0;
        minutes++;
        secondsP.textContent = `${seconds.toString().padStart(2, "0")}`
        minutesP.textContent = `${minutes.toString().padStart(2, "0")}`
      } else if (gameRunning === false) {
        clearInterval(duration);
      }
    }
  }

  function submitGuess(test) {
    test = 1;
    evalGuess(input);
    input.value = "";
    attempts++;
    console.log(attempts)
    attemptsP.textContent = `${attempts.toString()}`
  }

  function evalGuess(guess) {
    console.log(answer);
    if (guess.value == answer) {
      console.log("winner");
      input.disabled = true;
      guessButton.removeEventListener("click", submitGuess);
      guessButton.textContent = "Wanna play again?";
      feedback.textContent = `Congrats! You got it! The secret number was ${answer}`;
      guessButton.addEventListener("click", start);
      quitButton.removeEventListener("click", reset);
      parent[0].removeChild(quitButton);
      gameRunning = false;

      return;
    } else if (guess.value > 100 || guess.value < 1) {
      console.log("invalid input");
      feedback.textContent = "You've got to enter a NUMBER between 1 and 100";
    } else if (guess.value > answer) {
      feedback.textContent = `${guess.value} is too HIGH of a number!`;
    } else if (guess.value < answer) {
      feedback.textContent = `${guess.value} is too LOW of a number!`;
    }
  }
};
