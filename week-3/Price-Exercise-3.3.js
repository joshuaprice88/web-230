/*
============================================
; Title:  price-exercise-3.3.js
; Author: Professor Krasso
; Date:   15 Dec 2018
; Modified By: Josh Price
; Description: Exercise 3.3 Switch Statements
;===========================================
*/

//Start Program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 3.3");
console.log(displayHeader);
console.log('\n');


//Variable Decleration
let eventKeyCode = 13;

//Switch Statement
switch (eventKeyCode) {
  case 16:
    console.log('The shift key was pressed.')
    break;
  case 32:
    console.log('The spacebar key was pressed.')
    break;
  case 13:
    console.log('The enter key was pressed')
    break;
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;
  default:
    console.log("Keys not recognized")
}

//End Program
