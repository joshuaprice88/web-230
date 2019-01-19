/*
============================================
; Title:  price-discussion-6.2.js
; Author: Josh Price
; Date:   19 January 2019
; Modified By: Josh Price
; Description:  Exception Handling
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 6.2");
console.log(displayHeader);
console.log('\n');

//Start Program

// Creating Exception handling Statement
try {
  var x = 5;
  var y = 10;
  var sum = x * y;

  if (sum > 10) throw "DoesNotEqual50";
    console.log(sum);
} catch (err) {
  console.log("Catch clause: " + err);
} finally {
  console.log("Finally clause reached...")
}

//End Program
