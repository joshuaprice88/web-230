/*
============================================
; Title:  Arrays
; Author: Professor Krasso
; Date:   6 January 2019
; Modified by: Andrew Hemminger
; Description: Sample program with errors.
;===========================================

var header = require('../hemminger-header.js');
console.log(header.display("Andrew", "Hemminger", "Exercise 4.1"));
console.log('\n');
*/
// Start program


var sample = [ null, "Hi", 3.14, 0, false, 5];//Extra Comma in Array variable as well as New Array needs to be removed
//remove a[1]; this does not remove anything from an array.
sample.shift(); // to remove something from the front of an array you need to do variable.shift();
sample.length = 6;
console.log(sample);// added this which shows the original Array length but only shows the 5 you want.
//End program
