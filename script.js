'use strict';

//Project #1 - Guesss My Number
//Class = . / ID = #
console.log(document.querySelector('.message').textContent);

///What is DOM and DOM Manipulation
//DOM = Document Object Model - Allows to use Javascript to manipulate/access HTML and CSS.

//API = Application Program Interface

//Selecting and Manipulating Elements

/*
//Change the text content in the HTML
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//To set value
document.querySelector('.guess').value = 23;

//To get the value in the input
console.log(document.querySelector('.guess').value);
*/

//Handling Click Events
//Implementing the Game Logic
//Manipulating CSS Styles

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //If there is no input = 0 = false
  if (!guess) {
    displayMessage('No Number!');
  }
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    //CSS Manipulation = Always String
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When Guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

//Reset Button
document.querySelector('.again').addEventListener('click', function () {
  //Return Background Color to Default
  document.querySelector('body').style.backgroundColor = '#222';

  //Hide Secret Number and change value
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Return Box Size
  document.querySelector('.number').style.width = '15rem';

  //Clear Answer Box
  document.querySelector('.guess').value = '';

  //Revert Original Message
  displayMessage('Start guessing...');

  //Reset Score
  score = 20;
  document.querySelector('.score').textContent = score;
});

/*
Coding Challenge #1
Implement a game reset functionality, so that the player can make a new guess!

GOOD LUCK 😀
*/

//Refactoring - Eliminate duplicate codes without changing the functionality.
