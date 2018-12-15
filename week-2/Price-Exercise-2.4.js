//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 2.4");
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

//Begin Program

// Function My Name
function fullName(firstName, lastName) {
  let name = 'Hello my name is ' + firstName + ' ' + lastName + '!';
  return name
}

//Logging My name
console.log('\n');
console.log(fullName('Josh', 'Price'));

//variable declaration for fixedPositions
let temp = 28;
let place = 1;

//Function dateWriter to define date
function dateWriter(year, month, day) {
  let date = "Today's date is " + year + '/' + month + '/' + day + ' and the current temperature is';
  return date
}

//Function to Define Temperature
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions)
}

// Logging Date and Temperature
console.log(dateWriter('2018', '12' , '8'), formatNumber(temp, place) + ' degrees.');


//Variable Declarations for age and savings
let age = '30';
let save = '20,000';

//ParseInt function
function convertToInt() {
  return parseInt(age);
}

//ParseFloat funciton
function convertToFloat() {
  return parseFloat(save);
}

// Logging Age and saving Goals
console.log('I am ' + convertToInt() + ' years old and my savings account goal is ' + convertToFloat() + ' thousand dollars.');

// End Program
