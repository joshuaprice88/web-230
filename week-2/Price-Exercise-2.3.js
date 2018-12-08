//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 2.3");
console.log(displayHeader);

/*
============================================
; Title:  Price-2.3.js
; Author: Josh Price
; Date:   8 December 2018
; Modified By: Josh Price
; Description: Function properties
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// Function Property
myName.Josh = 'Josh';
lastName.Price = 'Price!';

// Function to declare First Name
function myName() {
  return myName.Josh;
}
// Function to declare Last Name
function lastName() {
  return lastName.Price;
}

// output
console.log('\n');
console.log('Hello ' + myName() + ' ' + lastName());

//end Programs
