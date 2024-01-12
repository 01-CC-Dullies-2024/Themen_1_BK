/* 
funktion
*/

// funkionsaufruf | call

// test();
const prompt = require('prompt-sync')({sigint: true});
ausgabeNamen()

// function test()

// {
//     console.log("Hallo, Du da. ");
// }


// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen()

{
    let firstName = prompt ("Bitte Namen eingeben: ");
    console.log("Hallo Du da, " + firstName +"!");
}
