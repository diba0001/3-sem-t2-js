/*  console.log("Math.random", Math.floor(Math.random() * 100));

   
        const randomNumber = Math.floor(Math.random() * 100);

     
        console.log("Math.random", randomNumber);

  
        document.getElementById("random-number").textContent = "ran.num: " + randomNumber;
 
/* node --watch "filnavn" */ 

// gæt et nummmer mellem 0 - 100
let randomNumber = Math.floor(Math.random() * 101);
let attempts = 10; //

/* constanter */
const userGuessInput = document.getElementById('userGuess');
const submitGuessButton = document.getElementById('submitGuess');
const restartGameButton = document.getElementById('restartGame');
const resultMessage = document.getElementById('resultMessage');
const remainingAttempts = document.getElementById('remainingAttempts');

/* antal liv */
remainingAttempts.textContent = `Attempts remaining: ${attempts}`;

/* function der leder efter korrekt tal */
function checkGuess() {
    const userGuess = Number(userGuessInput.value);

    if (userGuess < 0 || userGuess > 100 || isNaN(userGuess)) {
        resultMessage.textContent = 'Please enter a valid number between 0 and 100!';
        return;
    }

    attempts--; 
    remainingAttempts.textContent = `Attempts remaining: ${attempts}`;

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Gratz!: ${randomNumber}`;
        endGame();
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Yikes, too high! Try again O_o';
    } else {
        resultMessage.textContent = 'Waaaaay tooooo low! Try again d-_-b';
    }

/* afslutningsmelodi */
    if (attempts === 0) {
        resultMessage.textContent = `Game over! The correct number was ${randomNumber}`;
        endGame();
    }
}





submitGuessButton.addEventListener('click', checkGuess);
restartGameButton.addEventListener('click', restartGame);

