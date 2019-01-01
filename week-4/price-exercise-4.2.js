/*
============================================
; Title:  price-exercise-4.2.js
; Author: Josh price
; Date:    1 Jan 2019
; Modified By: Josh Price
; Description: Ecercise 4.2 Arrays
;===========================================
*/


/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

//start program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 4.2 - Arrays");
console.log(displayHeader);
console.log('\n');

//create string array
let fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//function
function getFruit(fruit) {
  for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
  }
}

//getFruit output
getFruit(fruits);
