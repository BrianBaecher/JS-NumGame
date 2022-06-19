window.onload = function main() {
  // put variables up here i suppose
  let input = document.getElementById("inputField");
  let guessButton = document.getElementById("guessButton");
  let quitButton = document.getElementById("quitButton");
  let feedback = document.getElementById("feedback");
  let clock = document.getElementById("clock");
  let gameRunning = false;
  let answer;
  let attempts = 0;
  let parent = document.getElementsByClassName("playArea")
  feedback.textContent = 'Welcome! Click "Start Game" to proceed';
  guessButton.textContent = "Start Game";
  guessButton.addEventListener("click", start);
  guessButton.removeEventListener("click", evalGuess);
  
  console.log(input);
  console.log(typeof input);
  // RESET -- clicking the quit button should be the only reason this runs
  function reset() {
    // doesn't work properly. Can't tell what's happening exactly.
    feedback.textContent = "C'mon now, don't quit!";
    guessButton.textContent = "Play Again";
    gameRunning = false;
    guessButton.addEventListener("click", start);
    answer = null;
    input.disabled = true;
  }
  // GAME START
  function start() {
    feedback.textContent = "Guess a number from 1 to 100";
    input.disabled = false;
    gameRunning = true;
    answer = Math.floor(Math.random() * 100) + 1;
    guessButton.textContent = "Guess";
    guessButton.removeEventListener("click", start);
    guessButton.addEventListener("click", submitGuess);
    quitButton.addEventListener("click", reset);
    parent[0].appendChild(quitButton);
  }

  // Game Clock - not sure how to set this up
  // const duration = setInterval(clock, 1000);

  // function timer() {
  //   if (gameRunning === true) {
  //     seconds++;
  //   }
  //   if (seconds > 59) {
  //     seconds = 0;
  //     minutes++;
  //   } else {
  //     clearInterval(duration);
  //   }

  //   playTime = `${minutes.toString().padStart(2, "0")}:${seconds
  //     .toString()
  //     .padStart(2, "0")}`;
  //   timeP.textContent = playTime;
  // }

  function submitGuess(test) {
    test = 1;
    evalGuess(input);
    input.value = "";
    attempts++;
  }

  function evalGuess(guess) {
    console.log(answer);
    if (guess.value == answer) {
      console.log("winner");
      input.disabled = true;
      guessButton.removeEventListener("click", submitGuess);
      guessButton.textContent = "Wanna play again?"
      feedback.textContent = `Congrats! You got it! The secret number was ${answer}`;
      guessButton.addEventListener("click", start);
      quitButton.removeEventListener("click", reset);
      parent[0].removeChild(quitButton)
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
// } else if (guess.value < 100 && guess.value > 1) {
//   console.log("between 1 an 100");
// }
// input for user's guesses

// some type of feedback element/function

// display number of current guesses

// clock

// BUTTON STUFF
// button to start game, then change that button into
// a way to submit guess

// button to guess again

// button to quit playing
