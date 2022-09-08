// const abeceda = ["a", "b", "c", "d", "e"];
// const brojevi = ["1", "2", "3", "4", "5"];

// const [a, ,...rest] = abeceda;

// console.log(rest);

// const newArray = [...abeceda,...brojevi]

// console.log(newArray);

// function sumAndMultiply(a, b) {
//   return [a + b, a * b, a / b];
// }

// const [sum, multiply, division = "default"] = sumAndMultiply(2, 3);

// console.log(sum, multiply, division);

const person = {
    ime: "Mihael",
    godine: 25,
    adresa: {
        ulica: "Vinogradska",
        broj: 8
    }
}

const person2 = {
    ime: "Dobrijko",
    godine: 37,
    stan: "da",
    adresa: {
        ulica: "Djebormanska",
        broj: 433
    }
}

const {ime: firstName, stan = "ne", adresa: {broj}} = person2;

console.log(broj);


function printUser({ime, godine}){
    console.log(`Ime je ${ime} i ima ${godine} godina`);
}

printUser(person2)
