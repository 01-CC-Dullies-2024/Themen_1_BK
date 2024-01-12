/* 
funktion
*/

// funkionsaufruf | call

// test();
// ausgabeNamen()

// function test()

// {
//     console.log("Hallo, Du da. ");
// }

// 2a. Parametrisierung + Datenübergabe von INNEN

// function ausgabeNamen()

// {
//     let firstName = prompt ("Bitte Namen eingeben: ");
//     console.log("Hallo Du da, " + firstName +"!");
// }

// 2b. Parametrisierung + Datenübergabe von Außen

// ausgabeNamen2("Maria"); //Argument
// ausgabeNamen2("Marim");
// ausgabeNamen2("Madim");

// let firstName = prompt ("Bitte Namen eingeben: ");

// ausgabeNamenParams("Max", " Mütze")

// function ausgabeNamen2(firstName)
// {
// console.log("Hallo, "+ firstName + "!")
// }

const prompt = require('prompt-sync')({sigint: true});
ausgabeNamenParams(prompt ("Bitte Vornamen eingeben: "), prompt ("Bitte Nachnamen eingeben: ")); //Piping

function ausgabeNamenParams(firstName, familyName)
{
        console.log("Hallo, "+ firstName + " " + familyName + "!")
}
;
