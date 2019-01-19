/*
============================================
; Title:  price-discussion-6.3.js
; Author: Josh Price
; Date:   19 January 2019
; Modified By: Josh Price
; Description:  Object Literals
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 6.3");
console.log(displayHeader);
console.log('\n');

//Start Program

//Creating Object for ticketing system
var ticket = {
  id: "101",

  name: "Help Desk Support",

  requestor: "Bob Jones"
};

console.log(ticket);

// End Program
