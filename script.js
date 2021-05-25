'use strict';

//This function changes the background color to signfy a win/loss
function colorChanger(value) {
  if (value == 1) {
    //Change to Green
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (value == 0) {
    //Change to Red
    document.querySelector('body').style.backgroundColor = '#ff0000';
  }
}

//Message Display
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

//Create Random Number to Guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Score starts out at 20
let currentScore = 20;

//Highscore
let highScore = 0;

//Event Listener for "Check!" button
document.querySelector('.check').addEventListener('click', function () {
  //Retrieve input from the Webpage
  const guessValue = Number(document.querySelector('.guess').value);

  //If no number inputed
  if (!guessValue) {
    displayMessage('No Number Inputed');

    //If Player Wins
  } else if (guessValue === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number ✨');

    //Change Background Color
    colorChanger(1);

    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    //If Guess wrong
  } else if (guessValue != secretNumber) {
    if (currentScore > 1) {
      displayMessage(
        guessValue > secretNumber ? 'Guess Too High 📈' : 'Guess Too Low 📈'
      );

      currentScore--;
      document.querySelector('.score').textContent = currentScore;
    } else {
      displayMessage('Game Over 😢');
      document.querySelector('.score').textContent = 0;

      //Change Background Color
      colorChanger(0);
    }
  }
});

//Event Listener for "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  //Reset Score
  currentScore = 20;
  document.querySelector('.score').textContent = currentScore;

  //Reset Random Number
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Reset Text
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';

  //Reset Input Area
  document.querySelector('.guess').value = '';

  //Reset Background Color
  document.querySelector('body').style.backgroundColor = '#000000';

  //Reset Mystery Box Width
  ddocument.querySelector('.number').style.width = '15rem';
});
