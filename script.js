'use strict';

//Project #1 - Guesss My Number
//Class = . / ID = #
console.log(document.querySelector('.message').textContent);

///What is DOM and DOM Manipulation
//DOM = Document Object Model - Allows to use Javascript to manipulate/access HTML and CSS.

//API = Application Program Interface

//Selecting and Manipulating Elements

//Change the text content in the HTML
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//To set value
document.querySelector('.guess').value = 23;

//To get the value in the input
console.log(document.querySelector('.guess').value);
