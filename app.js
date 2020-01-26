let min = 1,
    max = 10,
    winningNum = randomNumber(min, max);
    guessesLeft = 3;

const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input')
      guessBtn = document.querySelector('#guess-btn');
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);


    if (isNaN(guess) || guess < min || guess > max) {
        showMessage(`Please Enter a Number between ${min} and ${max}`, 'red')
    }


    if (guess === winningNum) {

        gameOver(true, 'Congratulation, you have Won!');

        // guessInput.disabled = true;
        // guessInput.style.borderColor = 'green'
        // showMessage('Congratulation, you have Won!', 'green');
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0) {

            gameOver(false, `Game Over, you Lost! The correct answer was ${winningNum}`)
            // guessInput.disabled = true;
            // guessInput.style.borderColor = 'red';
            // showMessage(`Game Over, you Lost! The correct answer was ${winningNum}`, 'red')
        } else {

            guessInput.style.borderColor = 'red'
            guessInput.value = '';
            showMessage(`${guess} is inccorect, ${guessesLeft} guesses left`, 'red');
        }
    }
})

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    showMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function showMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}

function randomNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

console.log(winningNum)