"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName;            // Deklaration (Definition)
// firstName = "Uwe";        // Wertzuweisung
// console.log(firstName);   // Ausgabe

// let familyName;
// familyName = "Unruh";
// console.log(familyName);

/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");

// console.log(firstName + " " + familyName);

/* JS ist eine untypisierte Sprache! */

// let test;
// test = "Carla";
// test = 2;
// test = false;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);


// const firstName = "Uwe";            // Variable mit KOSTANTEM Inhalt
// firstName = "Carla";                // verursacht Laufzeitfehler
// console.log(firstName);             // Ausgabe

/**** 04 Beispiele Berechnung *****/

// Deklaration
// let ageAndy, ageMicha;
// const birthYearAndy = 1985;
// const birthYearMicha = 1989;

// let year = 2023;
// ageAndy = year - birthYearAndy;
// ageMicha = year - birthYearMicha;

// console.log("Alter Andy: " + ageAndy);
// console.log("Alter Micha: " + ageMicha);

// let date = new Date();
// let year = date.getFullYear();
// console.log(date);
// console.log(year);


let ageAndy, ageMicha;
const birthYearAndy = 1985;
const birthYearMicha = 1989;

let date = new Date();                  // Systemfunktion Datum
let year = date.getFullYear();          // Daten liefern lassen
ageAndy = year - birthYearAndy;
ageMicha = year - birthYearMicha;

console.log("Alter Andy: " + ageAndy);
console.log("Alter Micha: " + ageMicha);