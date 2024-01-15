/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/

//wir brauchen prompt sync zur dateneingabe
const prompt = require('prompt-sync')({sigint: true});
// strings für prompt

const ERR_STR_DIV = "undefined";
const ERR_STR_OP1 = "Rechenart ist nur: + - * / ";
const ERR_STR_isNaN = "Bitte eine Zahl eingeben: ";
const FI_NUMBER = "Bitte erste Zahl eingeben: ";
const SE_NUMBER = "Bitte zweite Zahl eingeben: ";
const CHO_OP1 = "Bitte Rechenart auswählen: + - * / : ";
const ERR_STR_GEN = "Irgendwas ging schief.";

// App
// function startApp() {
// 	startApp(calculator(3,2,"+"))
// }

function calculator(a,b,op1) {
	switch (op1) {
		case "+": {
			return(add(a,b))
		}	//add()
		case "-": {
			return(sub(a,b))
		}	//sub()	
		case "/", ":":{
			return(multi(a,b))
		}	//multi()
		case "*":	{
			return(div(a,b))
		}	//div()
		default: // error
			return ERR_STR_GEN;
	}
}

// Dateneingabe Zahl 1 + Zahl 2

const firstnumber = prompt (FI_NUMBER);
let a;
        while (isNaN(a))
        {
			a =  parseInt (prompt (ERR_STR_isNaN));
        };

const secondnumber = prompt (SE_NUMBER);
let b;
		while (isNaN(b))
		{
			b =  parseInt (prompt (ERR_STR_isNaN));
		};
		
const operator = prompt (CHO_OP1);
let op1;
		while (op1 !== "+" , "-", "/", ":", "*")
		{
			op1 = String(prompt (ERR_STR_OP1));
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
