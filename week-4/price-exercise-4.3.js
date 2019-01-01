/*
============================================
; Title:  price-exercise-4.3.js
; Author: Josh price
; Date:    1 Jan 2019
; Modified By: Josh Price
; Description: Ecercise 4.3 Filtering
;===========================================
*/

//start program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 4.3 - Filtering");
console.log(displayHeader);
console.log('\n');

//Array declaration
var vehicle = ['Car', 'Truck', 'Motorcycle', 'Airplane', 'Bus'];

//Function
function getValue(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      console.log(arr[i]);
    }
  }
}

//Logging Output
console.log('-- DISPLAYING ARRAY ITEMS --');
for (var n = 0; n < vehicle.length; n++) {
  console.log(vehicle[n]);
}

// new line
console.log("");

console.log('-- SELECTED VALUE --');
getValue(vehicle, "Motorcycle");

// new line
console.log("");

console.log('-- SELECTED VALUE --');
getValue(vehicle, "Bus");

//end program
