/*
============================================
; Title:  Price-header-test.js
; Author: Josh Price
; Date:   7 December 2018
; Modified By: Josh Price
; Description: Displays a formatted header
;===========================================
*/

//Variable to pull in header file
const header = require('../Price-header');

//Creating Variable to display header
var displayHeader = header.display("Josh", "Price", "Exercise 2.2");

//Console.log to display formatted header
console.log(displayHeader);
