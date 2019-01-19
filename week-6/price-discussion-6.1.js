/*
============================================
; Title:  price-discussion-6.1.js
; Author: Josh Price
; Date:   17 January 2019
; Modified By: Josh Price
; Description:  Object Collections
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Discussion 6.1");
console.log(displayHeader);
console.log('\n');

//Begin Program

// Objects
var bab = {
  fullName: 'Bob Smith',
  age: 45,
  height: 6.4,
  calcYear: function() {
    this.year = 2019 - this.age;
    return this.year;
  }
};

var matt = {
  fullName: 'Matt Smith',
  age: 35,
  height: 6.9,
  calcYear: function () {
    this.year = 2019 - this.age;
    return this.birthYear;
  }
};

//if state to output who's older
if(matt.calcYear() > bob.calcYear()) {
  console.log(bob.fullName + ' is older he was born in ' + bob.year);
} else if (matt.year < bob.year) {
  console.log(matt.fullName + ' is older he was born in ' + matt.year);
} else {
  console.log('They are the same age');
}

//Output
//Bob Smith is older he was born in 1974

//end program
