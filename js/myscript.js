//dichiaro una variabile CONST per l'età del passeggero
// dichiaro una seconda variabile CONST per il numero di kilometri

let firstAge = prompt("Insert your age");
const discount = prompt("65");

const userAge = parseInt(prompt("Insert your age"));

const currentYear = 2023;

let yearOfBirth = currentYear - userAge;

console.log(yearOfBirth);

//const underAge = 20%;

//const overAge = 40%;


if (firstAge < discount) {
        console.log("avra il 20% di sconto");
} else if (firstAge > discount){
        console.log("avrà il 40% di sconto");
}