/*
============================================
; Title:  price-assignment-6.4.js
; Author: Josh Price
; Date:   19 January 2019
; Modified By: Josh Price
; Description:  nested Object Literals
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Assignment 6.4");
console.log(displayHeader);
console.log('\n');

//Begin Program

//Define Nested Object
var ticket = {
  id: 105,
  name: "Object Literals",
  dateCreated: new Date().toLocaleDateString(),
  priority: 3,

  person: {
    id: 1,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "(Programmer I)"
  }
};

//Var for Name and Job Title
var name = ticket.person.firstName + ' ' + ticket.person.lastName + ' ' + ticket.person.jobTitle;

//Output
console.log("Ticket " + ticket.id + " was created on " +
              ticket.dateCreated + " and assigned to employee " + name);

//end program
