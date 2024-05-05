// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Track the number of attempts
let attempts = 0;

function checkGuess() {
    // Get user's guess from input
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Increment attempt count
    attempts++;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        document.getElementById('message').innerHTML = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('message').style.color = 'green';
    } else if (userGuess < randomNumber) {
        document.getElementById('message').innerHTML = 'Too low. Try again.';
        document.getElementById('message').style.color = 'red';
    } else {
        document.getElementById('message').innerHTML = 'Too high. Try again.';
        document.getElementById('message').style.color = 'red';
    }
}
