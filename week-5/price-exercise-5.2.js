/*
============================================
; Title:  price-assignment-5.2.js
; Author: Josh Price
; Date:   13 January 2019
; Modified By: Josh Price
; Description:  Advanced Arrays
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 5.2");
console.log(displayHeader);
console.log('\n');

//Start Program

var food = ['Ramen', 'Sushi', 'Tacos', 'Pizza', 'BBQ'];

food.forEach(function(food) {
  console.log(food);
})
