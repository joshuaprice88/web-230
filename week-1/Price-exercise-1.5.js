/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   25 June 2017
; Modified By: Josh Price
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Josh";
var myLastName = "Price";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line

var firstName = "Bob";
var lastName = "Smith";
var street = "505 Main Street";
var city = "Omaha";
var state = "NE";
var number = 10.5;
var pay = '$' + number.toFixed(2);
var date = new Date(2016, 4, 22);
var hire = date.toLocaleDateString();

var output =  "\n" + "\nFirst Name: " + firstName + "\n"
    + "Last Name: " + lastName + "\n"
        + "Address: " + street + " " + city + ", " + state + "\n"
            + "Pay Rate: " + pay + "\n"
                + "Hire Date: " + hire;

console.log(output);    

// end of program 

