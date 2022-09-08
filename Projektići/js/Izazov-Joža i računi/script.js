let racuni = [];

for (let i = 0; i < 10; i++) {
  racuni.push(Math.ceil(Math.random() * 400));
}

let napojnice = [];
let total = [];

const napojnica = (racun) =>
  racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;

for (let i = 0; i < racuni.length; i++) {
  napojnice.push(napojnica(racuni[i]));
  total.push(napojnice[i] + racuni[i]);
}

const napojnicaProsjek = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(napojnicaProsjek(napojnice));
