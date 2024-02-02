// Probeklausur

console.log("Hello, world!");
/*
Aufgabe 1 (2 Punkte)
Erzeugen Sie ein Array testArr mit 4 beliebigen Elementen vom Datentyp String.
Geben Sie anschließend das letzte Element in die JS-Konsole aus. 
*/

let testArr = ["Eins", "Zwei", "Drei", "Vier"];
console.log(testArr);


/*
Aufgabe 2 (4 Punkte)
Sie sehen folgende Struktur in Ihrem JS-Editor und 
geben Sie jeweils den Inhalt der property param1 und param2 in die JS-Console aus.:
*/
var struc =
    {
    level1:
        {
        level2:
            {
            param1: 3.14,
            param2: 10.01
            }
        }
    };
console.log(struc.level1.level2.param1);
console.log(struc.level1.level2.param2);

/*
Aufgabe 3 (3 Punkte)
a)Wie nennt man die in Aufgabe 2 verwendete Struktur? 
b)Im Zusammenhang mit der
Entwicklung von Webseiten mit HTML/JS ist Ihnen eine ähnliche Struktur bekannt -
b1)wie nennt man diese (Abkürzung) ? b2) Wann wird diese Struktur vom Browser angelegt? 
*/
/*
Antwort zu 3a) Objekt
Antwort zu 3b) 1. Document Object Modell oder DOM 2. beim parsen von HTML
*/

