/*
============================================
; Title:  price-exercise-5.2.js
; Author: Josh Price
; Date:   13 January 2019
; Modified By: Josh Price
; Description:  Built-in function
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 5.2");
console.log(displayHeader);
console.log('\n');

//Start Program

//Array
var food = ['Ramen', 'Sushi', 'Tacos', 'Pizza', 'BBQ'];

//Array foreach
food.forEach(function(food) {
  console.log(food);
});

//End Programs
