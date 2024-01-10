/*
Prompt
*/

const prompt = require('prompt-sync')({sigint: true});

let firstName = prompt("Vorname? ");
let familyName = prompt ("Nachname? ")
console.log ("Hallo, " + firstName + " " + familyName + "! " + "Willkommen in der Welt.");
