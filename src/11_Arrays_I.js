/* Die Satzbau-Maschine | Arrays */

/***   THEORIE *  */

/***   PRAXIS *  */

/*** 01. Funktionalität mit Einzelparametern | test: "Ich bin Max Mütze." */

// output(getSentence("Ich","bin","Max","Mütze"));
output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));

function getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   arr[0] + GAP +
                arr[1] + GAP +
                arr[2] + GAP +
                arr[3] + GAP +
                arr[4] + GAP +
                arr[5] + GAP +
                arr[6] +
                PUNCT;

    return str;
}

/*** 02. Array ***/

// let arr; 
// arr =new array(); //Konstruktor
// arr =[]; // Literal
// arr =[2,1,7,8,10];

// output(arr);
// output(arr.length);
// output(arr[0]);
// output(arr[4]);
// output(arr[arr.length-1]);


// Modul: Ausgabe in Konsole : Test
// output("hi");
function output(outputStr) {
    console.log(outputStr);
}
