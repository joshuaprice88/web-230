/*
============================================
; Title:  price-assignment-5.4.js
; Author: Josh Price
; Date:   13 January 2019
; Modified By: Josh Price
; Description:  Filtering\reducing complex data structures
;===========================================
*/

//Variable to pull in header file and log it.
var header = require('../Price-header');
var displayHeader = header.display("Josh", "Price", "Exercise 5.4");
console.log(displayHeader);
console.log('\n');

//Start Program

//composer array
var animeComposer = [
  {
    firstName: 'Yoko',
    lastName: 'Kanno',
    genre: 'New Age',
    rating: 10
  },

  {
    firstName: 'Joe',
    lastName: 'Kisaishi',
    genre: 'Film Score',
    rating: 10
  },

  {
    firstName: 'Yuki',
    lastName: 'Kajiura',
    genre: 'Contemporary Classical',
    rating: 9
  },

  {
    firstName: 'Kiroyuki',
    lastName: 'Sawano',
    genre: 'Electronic',
    rating: 7
  },

  {
    firstName: 'Jun',
    lastName: 'Saeda',
    genre: 'Film Score',
    rating: 8
  },
];

//Map filter by rating
console.log('-- COMPOSER BY RATING --');
var rating = animeComposer.map(function(composer) {
  return 'Rating: ' + composer.rating +
          '\n' + 'Composer: ' + composer.lastName;
});

rating.forEach(function(composer){
  console.log(composer);
})

//Map filter by genre
console.log('')
console.log('-- COMPOSER BY GENRE --')
var genre = animeComposer.map(function(composer) {
  return 'Genre: ' + composer.genre +
          '\n' + 'Composer: ' + composer.lastName;
});

genre.forEach(function(composer) {
  console.log(composer);
});


//End Program





