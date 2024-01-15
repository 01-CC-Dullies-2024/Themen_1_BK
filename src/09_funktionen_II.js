

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

// const firstnumber = prompt ("Bitte erste Zahl eingeben: ");
// let zahlA;
//         while (isNaN(zahlA))
//         {
// 			zahlA =  parseInt (prompt ("Bitte eine Zahl eingeben: "));
//         };

// const secondnumber = prompt ("Bitte zweite Zahl eingeben: ");
// let zahlB;
// 		while (isNaN(zahlB))
// 		{
// 			zahlB =  parseInt (prompt ("Bitte eine Zahl eingeben: "));
// 		};

// Auswahl der Rechenoperation 
// Dateneingabe
const ERR_STR_DIV = "undefined";
// function add //
// output(sub)
// output(multi)
// output(div)


// output(add(2,2))
// output(add(2,-2))
// output(add(2,1))

// output(sub(2,2))
// output(sub(2,-2))
// output(sub(2,1))

// output(multi(2,2))
// output(multi(2,-2))
// output(multi(2,1))

output(div(4,2))
output(div(3,2))
output(div(3,-2))
output(div(0,2))
output(div(3,0))

// function add (a, b) {
// 	return a + b ;
// };

// function sub (a, b) {
// 	return a - b ;
// };

// function multi (a, b) {
// 	return a * b ;
// };

function div (a, b) {
	if (b == 0) {
		return ERR_STR_DIV
	}
		return a / b ;
};

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
};

