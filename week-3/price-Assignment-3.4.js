/*
============================================
; Title:  price-exercise-3.4.js
; Author: Josh price
; Date:   15 Dec 2018
; Modified By: Josh Price
; Description: Exercise 3.4 Loops
;===========================================
*/

//Start Program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 3.4");
console.log(displayHeader);
console.log('\n');

//Variable for programs
var num = 7;

 //Functions
function match(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function logMismatch(x, y) {
  console.log(x + " does not match " + y);
}

function logMatch(x, y) {
  console.log(x + " does match " + y);
}

function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

//Creating for loop to match our variable against a random number.
for (var i = 0; i < 10; i++) {
  let random = randomNumber();
  if (match(num, random)) {
    logMatch(num, random);
  } else {
    logMismatch(num, random);
  }
}


