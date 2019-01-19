/*
============================================
; Title:  Discussion 5.1
; Author: Griselda Balmaceda
; Date:   9 January 2019
; Description: discussion challenge using arrays
;===========================================
*/


//array of objects with properties
var magicians= [
  {
      lastName:'ColdWater',
      firstName:'Quentin',
      age:19

  },

  {
      lastName:"Quinn",
      firstName:'Alice',
      age:22
  },

  {
      lastName:'Waugh',
      firstName:'Elliot',
      age:24
  },
  {
      lastName:'Adiyodi',
      firstName:'Penny',
      age:22
  },
  {
      lastName:'Hanson',
      firstName:'Margo',
      age:24
  }
]

//function to see who is over 21

/*
function ofAge(magician){
  if(magician.age>=21) {
    return true
  } else
    return false
}*/

var legalMagicians = magicians.map(function(magician) {
  if (magician.age >= 21) {
    return magician.firstName
  } else
    return console.log(magician.firstName + 'is not of age');

});



legalMagicians.forEach(function(x){
  console.log(x + ' is able to drink.');
});

//output should be
// Quentin is not of age
// Alice is able to drink
// Elliot is able to drink
// Penny is able to drink
// Margo is able to drink
