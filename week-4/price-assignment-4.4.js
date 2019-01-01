/*
============================================
; Title:  price-assignment-4.4.js
; Author: Josh price
; Date:    1 Jan 2019
; Modified By: Josh Price
; Description: Exercise 4.4 Predicates
;===========================================
*/

//start program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Assignment 4.4 - Predicates");
console.log(displayHeader);
console.log('\n');

//Array Variables
var states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];

//function to print array
function ogArray(states) {
  for (var i = 0; i < states.length; i++) {
    console.log(states[i]);
  }
}

//function to sort array
function sort(states) {
  var sortStates = states.sort();
  for (var i = 0; i < sortStates.length; i++) {
    console.log(sortStates[i]);
  }
}

//function to compare two state names
function getState(array, search) {
  if (array === search) {
    return true;
  }
}

//create another array from original that will find a match to the state name I'm looking for
var stateSearch = states.filter(
  function (n) {
    return getState(n, 'Iowa');
  }
)

//Output
console.log('-- ORIGINAL ARRAY --');
ogArray(states);

console.log('');

console.log('-- SORTED ARRAY --');
sort(states);

console.log('');

console.log('-- SELECTED VALUE --')
console.log(stateSearch[0]);

//end program
