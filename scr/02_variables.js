// Zeilenkommentar

/*
Blockkommentar
this is a very long commentary
this is a very long commentary
this is a very long commentary
this is a very long commentary
*/

/* variables 01*/

// console.log("Hello, World!") //Ausgabe

let Hi;
Hi = "Hello, World!";
console.log(Hi);

let firstName; //declaration
firstName = "Max" //assignment
// console.log(firstName); //output

let famName = "Imal"; // declaration and assignment
// console.log(famName); //output

console.log("Name: " + firstName + " " + famName); //output von var String, firstName, leerzeichen, famName

/* 
Wertzuweisung II + Datentypen
JS ist eine untypisierte Sprache
*/
let test; //decl
test = "hello";
console.log("Datentyp: " + typeof test); // "string" mit doppelten Anführungszeichen oben
test = 2;
console.log("Datentyp: " + typeof test);
test = true;
console.log("Datentyp: " + typeof test);
test = false;
console.log("Datentyp: " + typeof test);

/* 
Variablen vs Konstanten
 */

let ok;
ok = "okay";
ok = "bad";
console.log("status: " + ok);

const home = 1;
console.log("status: " + home);