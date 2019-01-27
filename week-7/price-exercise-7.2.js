/*
============================================
; Title:  price-exercise-7.2.js
; Author: Josh price
; Date:   27 Jan 2019
; Modified By: Josh Price
; Description: Exercise 7.2 Constructor Objects
;===========================================
*/

//start program

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 7.2");
console.log(displayHeader);
console.log('\n');

//Start Program

//Define Constructor Object
function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

//Array with Employee Information
var employees = [
  new employee(1, "Thomas Edison", "Software Engineer"),
  new employee(2, "Benjamin Franklin", "Programmer"),
  new employee(3, "Nikola Tesla", "Project Manager"),
  new employee(4, "Charles Babbage", "Product Manager"),
  new employee(5, "Alexander Bell", "Business Analyst")
];

//Function to output list of employees
function listNames(employees) {
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].id, employees[i].firstName, employees[i].lastName, employees[i].title,);
  }
};

//output
listNames(employees);
//End Program
