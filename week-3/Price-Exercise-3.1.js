/*
============================================
; Title:  price-exercise-3.1.js
; Author: Professor Krasso
; Date:   11 Dec 2018
; Modified By: Josh Price
; Description: Fix my broken code
;===========================================
*/

//Start Program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 3.3");
console.log(displayHeader);
console.log('\n');

//Variable Decleration
var ageJosh = calculateAge(1988);
var ageIan = calculateAge(1999);
var ageCollin = calculateAge(2013);

//Functions
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

function yearsUntilGraduation(year, firstName) {
    var age = calculateAge(year);
    var graduation = 18 - age;

    if(graduation > 0){
        console.log(firstName + ' graduates in ' +
        graduation + ' years.');
    } else {
        console.log(firstName + ' has already graduated.');
    }

  }

//Output
console.log(ageJosh, ageIan, ageCollin);
yearsUntilGraduation(1988, 'Josh');
yearsUntilGraduation(1999, 'Ian');
yearsUntilGraduation(2013, 'Collin');

//end program
