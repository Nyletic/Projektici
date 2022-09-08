"use strict";

// const prijatelji = ["Igor", "Petar", "Marko"];

// prijatelji[1] = "Joža";

// console.log(prijatelji);

/* const igor = {
  firstName: "Igor",
  secondName: "Jevremović",
  godinaRođenja: 1983,
};

igor.Lokacija = "Hrvatska";
igor["Hobi"] = "ribolov";
console.log(igor); */

// pokusati napraviti preko objekti unutar objekta
// const bmiO = {
//   imena: {
//     ime1: "Marko",
//     ime2: "Joža",
//   },
//   tezine: { tezina1: 78, tezina2: 92 },
//   visine: { visina1: 1.69, visina2: 1.95 },

//   calcBmi: function () {
//     this.bmi = this.tezine.tezina1 / this.visine.visina1 ** 2;
//     return this.bmi;
//   },
// };

// bmiO.calcBmi();
// console.log(bmiO);

/* const marko = {
  ime: "Marko",
  težina: 78,
  visina: 1.69,
  calcBMI: function () {
    this.bmi = this.težina / this.visina ** 2;
    return this.bmi;
  },
};

const josip = {
  ime: "Josip",
  težina: 92,
  visina: 1.95,
  calcBMI: function () {
    this.bmi = this.težina / this.visina ** 2;
    return this.bmi;
  },
};

josip.calcBMI();
console.log(marko.calcBMI(), josip.bmi); */

const temperatura = [-2, -1, -6, -1, "error", 9, 13, 15, 16, 18, 14, 9, 5];
console.log(temperatura.sort());
