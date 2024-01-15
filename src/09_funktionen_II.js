
const ERR_STR_DIV = "undefined";
const ERR_STR_OPP = "Rechenart ist nur: + - * / ";
const ERR_STR_isNaN = "Bitte eine Zahl eingeben: ";
const FINUMBER = "Bitte erste Zahl eingeben: "
const SENUMBER = "Bitte zweite Zahl eingeben: "
const CHOOP1 = "Bitte Rechenart auswählen: + - * / "


/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

const prompt = require('prompt-sync')({sigint: true}); //wir brauchen prompt sync zur dateneingabe

// Dateneingabe Zahl 1 + Zahl 2

const firstnumber = prompt (FINUMBER);
let zahlA;
        while (isNaN(zahlA))
        {
			zahlA =  parseInt (prompt (ERR_STR_isNaN));
        };

const secondnumber = prompt (SENUMBER);
let zahlB;
		while (isNaN(zahlB))
		{
			zahlB =  parseInt (prompt (ERR_STR_isNaN));
		};
		
const operator = prompt (CHOOP1);
let op1;
		while (op1 != "+" , "-", "/", "*")
		{
			op1 =  parseInt (prompt (ERR_STR_OPP));
		};

// Auswahl der Rechenoperation 
// Dateneingabe

//Testdaten 
// output(add(2,2))
// output(add(2,-2))
// output(add(2,1))
// output(sub(2,2))
// output(sub(2,-2))
// output(sub(2,1))
// output(multi(2,2))
// output(multi(2,-2))
// output(multi(2,1))
// output(div(4,2))
// output(div(3,2))
// output(div(3,-2))
// output(div(0,2))
// output(div(3,0))

// rechen funktionen add/sub/multi/div
// funktion addition
function add (a, b) {
	return a + b ;
};
// funktion sub
function sub (a, b) {
	return a - b ;
};
// funktion multi
function multi (a, b) {
	return a * b ;
};
// funktion div
function div (a, b) {
	if (b == 0) {
		return ERR_STR_DIV
	}
		return a / b ;
};

// module: output | test:
function output(outputData) {
	console.log(outputData);
};
