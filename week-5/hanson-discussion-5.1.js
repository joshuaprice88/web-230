/*
============================================
; Title:  hanson-5.1.js
; Author: Drew Hanson
; Date:   10 January 2019
; Modified By:
; Description: Advanced arrays
;=============================== g============
*/

//var header = require('../hanson-header.js');

// Output of header.display function that accepts first name, last name, assignment name
//console.log(header.display("Drew", "Hanson", "Exercise 5.1"));


// defines array of places that hurt and resolution
var place = new Map();
place.set("head", "Doctor will talk to me about my head");
place.set("shoulders", " Doctor will talk  about my shoulders");
place.set("knees", " Doctor will talk to me about my knees");
place.set("toes", "Doctor will talk to me about my toes");
place.set("mouth", "time is up to stop talking and start moving.");


// Loops over array and console logs each iteration
for (var [key, value] of place) {
    console.log("When I touch my " + key + " it means my " + value)
}
