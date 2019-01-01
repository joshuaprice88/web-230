/*
============================================
; Title:  price-discussion-4.1.js
; Author: Josh price
; Date:    1 Jan 2019
; Modified By: Josh Price
; Description: Discussion 4.1 fix my broken code
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Discussion 4.1 - Arrays
  Today's Date

  Your tip amounts are 22.2, 8.4, 22.6 and total with tips are 170.2, 64.4, 248.6
*/


//start program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Discussion 4.1 - Arrays");
console.log(displayHeader);
console.log('\n');


//function to create a tip calculator
function calculator(check) {
  var percentage;
  if (check < 50) {
    percentage = .2;
  } else if ( check >= 50 && check < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * check;
}

//arrays with check total and out final amounts
var checks = [148, 56, 226];
var tips = [calculator(checks[0]), calculator(checks[1]), calculator(checks[2])];
var finalTotal = [checks[0] + tips[0], checks[1] + tips[1], checks[2] + tips[2]];
var total = "Your tip amounts are " + tips.join(", ") + " " + "and total with tips are " + finalTotal.join(", ");

//console.log to output the tip amount
console.log(total);
