let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      addGuess(guess);
      displayMessage("gameover", randomNumber);
      endGame();
    } else {
      addGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("correct", guess);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("low", guess);
  } else if (guess > randomNumber) {
    displayMessage("high", guess);
  }
}

function addGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(messageType, guess) {
  let message = "";

  if (messageType === "correct") {
    const phrases = [
      `🎉 Boom! You nailed it! The number was ${guess}.`,
      `🔥 Legendary! ${guess} is spot on!`,
      `🥳 You win! ${guess} was the magic number!`
    ];
    message = phrases[Math.floor(Math.random() * phrases.length)];
  } 
  
  else if (messageType === "low") {
    const phrases = [
      `📉 Oops, ${guess} is too low. Aim higher! 🚀`,
      `🤔 ${guess}? That’s kinda tiny… Think bigger!`,
      `😅 Nope! ${guess} is undercooked. Try hotter! 🔥`
    ];
    message = phrases[Math.floor(Math.random() * phrases.length)];
  } 
  
  else if (messageType === "high") {
    const phrases = [
      `📈 Whoa, ${guess} is too high! Come back down 🌍`,
      `🙃 ${guess}? That’s way over the top!`,
      `😲 Careful! ${guess} overshot the target 🎯`
    ];
    message = phrases[Math.floor(Math.random() * phrases.length)];
  } 
  
  else if (messageType === "gameover") {
    message = `💀 Game Over! The number was ${randomNumber}. Better luck next time! 🍀`;
  }

  lowOrHi.innerHTML = `<p>${message}</p>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id="newGame" class="newGameBtn">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

