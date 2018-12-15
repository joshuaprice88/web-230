/*
============================================
; Title:  price-exercise-3.1.js
; Author: Professor Krasso
; Date:   11 Dec 2018
; Modified By: Josh Price
; Description: Fix my broken code
;===========================================
*/

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJosh = calculateAge(1988);
var ageIan = calculateAge(1999);
var ageCollin = calculateAge(2013);

console.log(ageJosh, ageIan, ageCollin);

function yearsUntilGraduation(year, firstName) {
    var age = calculateAge(year);
    var graduation = 18 - age;

    if(graduation > 0){
        console.log(firstName + ' graduates in ' + 
        graduate + ' years.');
    } else {
        console.log(firstName + ' has already graduated.');
    }
  


yearsUntilGraduation(1988, 'Josh');
yearsUntilGraduation(1999, 'Ian');
yearsUntilGraduation(2013, 'Collin');