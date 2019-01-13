/*
============================================
; Title:  price-exercise-5.3.js
; Author: Josh Price
; Date:   13 January 2019
; Modified By: Josh Price
; Description:  Object Collections
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 5.3");
console.log(displayHeader);
console.log('\n');

//Start Program

//Array
var animeComposer = [
  {

    firstName: 'Yoko',

    lastName: 'Kanno',

    genre: 'New Age',

    rating: 10,

  },

  {

    firstName: 'Joe',

    lastName: 'Kisaishi',

    genre: 'Film score',

    rating: 10,

  },

  {

    firstName: 'Yuki',

    lastName: 'Kajiura',

    genre: 'Contemporary Classical',

    rating: 9,

  },

  {

    firstName: 'Kiroyuki',

    lastName: 'Sawano',

    genre: 'Electronic',

    rating: 7,

  },

  {

    firstName: 'Jun',

    lastName: 'Saeda',

    genre: 'Film Score',

    rating: 8,

  },
];

//Output forEach function
console.log('-- COMPOSERS --');
animeComposer.forEach(function(composer) {
  console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating);
});

//End Program
