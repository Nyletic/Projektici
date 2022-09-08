// console.log("Jožek");

/* deklariranje varijabli */
/* shift + option + a = komentar sa zvijezdicom */

// console.log(typeof true);

// Zadatak1
/* const [ime, prezime, nadimak] = ["Mihael", "Nikolić", "Nixy"];

console.log(ime, prezime, nadimak);

const istinitost = false;
let neDefkano;

console.log(istinitost, neDefkano); */

/* const zemlja = "Hrvatska";
const kontinent = "Europa";
// ovo je fora način za prikazati 3.8 milijuna
const populacija = 3.8e6;

let polaPopulacije = populacija / 2;
console.log(polaPopulacije);
polaPopulacije++;

let popSlo = 2e6;
console.log(popSlo < polaPopulacije); */

// BMI
/* const tezinaMarko = 78;
const visinaMarko = 1.69;

const tezinaJosip = 92;
const visinaJosip = 1.95;

const bmiMarko = bmi(tezinaMarko, visinaMarko);
const bmiJosip = bmi(tezinaJosip, visinaJosip);

console.log(bmi(tezinaMarko, visinaMarko));
console.log(bmi(tezinaJosip, visinaJosip));

function bmi(tezina, visina) {
  return (tezina / visina ** 2).toFixed(1);
}

if (bmiMarko > bmiJosip) {
  console.log(`Markov bmi ${bmiMarko} je veći od Josipovog bmi-ja ${bmiJosip}`);
} else {
  console.log(`Josipov bmi ${bmiJosip} je veći od Markovog bmi-ja ${bmiMarko}`);
} */

//backticks
/* const zemlja = "Hrvatska",
  kontinent = "Europa",
  populacija = 3.8e6;

const recenica = `${zemlja} ima ${populacija} stanovnika i nalazi se u ${kontinent}`;
console.log(recenica);
 */

// vjezba brojNeZnamKoliko
/* const godine = 19;
const punoljetan = godine >= 18;

if (punoljetan) {
  console.log("Mozete polagati vozacki");
} else {
  console.log("Ne mozete voziti auto");
}

const hrvatskaPop = 3.8e6;
const eurAvgPop = 33e6;
const razlikaPop = eurAvgPop - hrvatskaPop;
let prosjek;

if (hrvatskaPop >= eurAvgPop) {
  prosjek = "iznad prosjeka";
} else {
  prosjek = `za ${razlikaPop} ispod prosjeka`;
}

console.log(`Hrvatska je ${prosjek}`); */

/* let n = "1" + 1;
console.log(typeof n);
n = n - 1;
console.log(typeof n);
let m = 2 + 3 + 4 + "5";
console.log(m); */

// const godinaMa = 18;

// if (godinaMa === parseInt("18")) {
//   console.log("ma varao si me!");
// }

/* const broj = Number(prompt("Koji ti je najdrazi broj?"));
console.log(broj);
console.log(typeof broj);

const brojSusjeda = Number(prompt("Koliko susjeda ima Hrvatska?"));

if (brojSusjeda === 0) {
  console.log("Nema susjeda");
} else if (brojSusjeda === 1) {
  console.log("Ima jednog susjeda");
} else {
  console.log("ima vise od jednog susjeda");
} */

/* const avgBarca = (96 + 108 + 89) / 3;
const avgReal = (88 + 91 + 110) / 3;

if (avgBarca > avgReal && avgBarca > 95) {
  console.log("Barca je pobijedila");
} else if (avgReal > avgBarca && avgReal > 95) {
  console.log("Real je pobijedio");
} else {
  console.log("Rezultat je izjednačen");
}
 */

/* const racun = Number(prompt("Unesite iznos računa"));

let napojnica = racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;

const sumRacun = racun + napojnica;

console.log(racun, napojnica, sumRacun); */

// const lovciSredisnjaHrv = 340;
// const lovciSMZ = 50;
// const lovciDalmacija = 140;

// const brojLovaca = (brojLovaca) => (brojLovaca / 1000) * 100;
// const brojLovaca1 = brojLovaca(lovciSredisnjaHrv);
// const brojLovaca2 = brojLovaca(lovciSMZ);
// const brojLovaca3 = brojLovaca(lovciDalmacija);

// console.log(brojLovaca3);

const izracunajProsjek = (a, b, c) => (a + b + c) / 3;

// const prosjekBarca = () => (112 + 98 + 104) / 3;
// const prosjekReal = () => (108 + 89 + 95) / 3;

const prosjekBarca = 112 + 98 + 104;
const prosjekReal = 108 + 89 + 95;

const pobjednik = () => {
  if (prosjekBarca > prosjekReal && prosjekBarca > prosjekReal * 2) {
    console.log("Barca je pobijedila");
  } else if (prosjekReal > prosjekBarca && prosjekReal > prosjekBarca * 2) {
    console.log("Barca je pobijedila");
  } else {
    console.log("Nema pobjednika");
  }
};

pobjednik();
