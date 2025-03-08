// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Ask the user to guess the number
console.log("Guess the number:");
const guess = prompt();

// Check if the guess is correct
if (guess === randomNumber) {
  console.log("Correct! The answer was " + randomNumber);
} else {
  console.log("Incorrect, try again.");
}
