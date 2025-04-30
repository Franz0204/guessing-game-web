const lowestNum = 1;
const highestNum = 100;
const answer = Math.floor(Math.random() * (highestNum - lowestNum + 1)) + lowestNum;
let guesses = 0;
const maxGuesses = 5;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = Number(guessInput.value);

  if (isNaN(guess) || guess < lowestNum || guess > highestNum) {
    message.textContent = `Please enter a number between ${lowestNum} and ${highestNum}.`;
    return;
  }

  guesses++;

  if (guess === answer) {
    message.textContent = `Correct! The number was ${answer}. You won in ${guesses} guesses.`;
    guessInput.disabled = true;
  } else if (guesses >= maxGuesses) {
    message.textContent = `Game Over! The correct number was ${answer}.`;
    guessInput.disabled = true;
  } else if (guess < answer) {
    message.textContent = "Too low!";
  } else {
    message.textContent = "Too high!";
  }
}
