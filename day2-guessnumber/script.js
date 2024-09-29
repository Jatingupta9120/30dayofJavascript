const userInput = document.querySelector('.user-input');
const form = document.querySelector('form');
let randomNumber = Math.round(Math.random() * 100);
const result = document.getElementById('result');
const allGuessDisplay = document.querySelector('.all-guesses');
const allGuessArray = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let userNumber = parseInt(userInput.value);

    if (userNumber < randomNumber) {
        result.innerText = 'Your guess is too low';
    } else if (userNumber > randomNumber) {
        result.innerText = 'Your guess is too high';
    } else {
        result.innerText = 'Congrats! You guessed it right!';
        randomNumber = Math.round(Math.random() * 100);
        allGuessArray.length = 0;
        
    }

    allGuessArray.push(userNumber);
    allGuessDisplay.innerText = 'Your Previous Guesses: ' + allGuessArray.join(', ');

    form.reset();
});

const inputField = document.querySelector('.user-input');
const startButton = document.getElementById('start-button');

inputField.addEventListener('input', () => {
    startButton.disabled = inputField.value === '';
});
