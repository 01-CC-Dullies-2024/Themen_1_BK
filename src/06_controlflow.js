// Entscheidungsstrukturen | control flow

// // Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = 31;
// // Deklaration
// let isJohnOlder, isJohnEqual;
// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

// // ja-zweig
// if (isJohnOlder)
// {
//     console.log("John is älter!");
// }
// //alternativer Zweig
// else if (isJohnEqual)
// {
//      console.log("John ist gleichalt!")
// }
// // alternativer Zweig 2
// else
// {
//     console.log("John ist jünger!")
// }

// // ternary
// // console.log (isJohnOlder? "john is older " : "Mark is older. ");


// Switch case 1

const firstName = "Jane";
let job;
let fun;

job = "driver"; // Jane fährt Taxi!
job = "diver"; // Jane taucht im Rhein!

fun = "dance"; // Jane tanzt!
fun = "frei"; // Jane hat frei!
fun = "" // leer

switch (job) 
{
    case "driver":
        console.log (firstName + " fährt Taxi.")
        break;
    case "diver":
        console.log (firstName + " taucht im Rhein.")
        break;

    default:
        break;
}

switch (fun) 
{
    case "dance":
        console.log (firstName + " tanzt.")
    break;
    case "frei":
        console.log (firstName + " hat frei.")
        break;
    default:
        console.log (firstName + " hat fun. ")
        break;
}
