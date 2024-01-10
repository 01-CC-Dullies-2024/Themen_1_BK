/*
Berechnung Alter
*/

// Deklaration

let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;

// Berechnung Alter

let date = new Date(); // Systemfunktion Datum
let year = date.getFullYear(); // Daten liefern lassen!!

ageJohn = year - birthYearJohn 
ageMark = year - birthYearMark

console.log("John's Age is: " + ageJohn);
console.log("Mark's Age is: " + ageMark);
console.log("Datum: " + date);
