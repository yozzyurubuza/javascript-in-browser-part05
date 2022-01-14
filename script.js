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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //If there is no input = 0 = false
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    //CSS Manipulation = Always String
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //When Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //When Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
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
  document.querySelector('.message').textContent = 'Start guessing...';

  //Reset Score
  score = 20;
  document.querySelector('.score').textContent = score;
});

/*
Coding Challenge #1
Implement a game reset functionality, so that the player can make a new guess!


GOOD LUCK 😀
*/
