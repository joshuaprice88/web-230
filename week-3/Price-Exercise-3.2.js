/*
============================================
; Title:  price-exercise-3.2.js
; Author: Professor Krasso
; Date:   15 Dec 2018
; Modified By: Josh Price
; Description: Exercise 3.2 Pattern Matching
;===========================================
*/

//Start Program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 3.2");
console.log(displayHeader);
console.log('\n');

//Variables
var var1 = "Truck";
var var2 = "Car";
var var3 = "Bike";
var var4 = "Four";
var var5 = "Three";
var var6 = "Bike";


//Functions
function match(x, y) {
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function logMismatch(x, y) {
  console.log(x + " and " + y + " do not match!");
}

function logMatch(x, y) {
  console.log(x + " and " + y + " do match!")
}

//Conditional statements.
if (match(var1, var2)) {
  logMatch(var1, var2);
} else {
  logMismatch(var1, var2);
}

if (match(var3, var6)) {
  logMatch(var3, var6)
} else {
  logMismatch(var3, var6)
}

if (match(var4, var5)) {
  logMatch(var4, var5)
} else {
  logMismatch(var4, var5)
}

// Output from match() funciton
console.log(match('A', 'B'));
console.log(match(7, 7));



//End Program






