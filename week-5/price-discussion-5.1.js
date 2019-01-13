/*
============================================
; Title:  price-discussion-5.1.js
; Author: Professor Krasso
; Date:   09 January 2019
; Modified By: Josh Price
; Description:  Advanced Arrays
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 5.1");
console.log(displayHeader);
console.log('\n');

//variables
var ramen = newMap();
ramen.set('Tonkatsu', 'Chashu');
ramen.set('Shoyo', 'Narutomaki');
ramen.set('Spicy Miso', 'Minced Pork');
ramen.set('Shio', 'Chicken');

//for loop to  prent ramen order
for (var {key, value} of ramen) {
  console.log('I would like ' + key + ' with ' + value + ' as my topping.');
}

ramen.clear();
ramen.size
