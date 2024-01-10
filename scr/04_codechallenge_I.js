
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let a = parseInt(prompt ("Wie Groß ist die Zahl a? "));
let b = parseInt(prompt ("Wie Groß ist die Zahl b? "));
let sumab = parseInt(a+b)

console.log ("Die Summe der Zahlen " + a + " und " + b + " ist " + (a+b));
console.log (sumab)
