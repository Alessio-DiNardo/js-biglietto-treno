//dichiaro una variabile CONST per l'età del passeggero
// dichiaro una seconda variabile CONST per il numero di kilometri

const userAge = parseInt(prompt("Insert your age"));

const currentYear = 2023;

let yearOfBirth = currentYear - userAge;

console.log(yearOfBirth);

const distance = parseInt(prompt("insert your kilometers"))

const priceForKm = 0.21;


let price = priceForKm * distance;

console.log(price);


if (userAge < 18) {
        console.log((20 / 100) * price.toFixed);
} else if (firstAge > 65){
        console.log((40 / 100) * price.toFixed);
}