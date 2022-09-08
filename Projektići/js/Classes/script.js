class Osoba {
  constructor(ime, dob) {
    this.ime = ime;
    this.dob = dob;
  }
  uvodniPozdrav() {
    console.log(`Pozdrav ${this.ime}. Imaš ${this.dob} godina`);
  }
}

class Student extends Osoba {
  constructor(ime, dob, prosjek) {
    super(ime, dob);
    this.prosjek = prosjek;
  }
  pozdrav() {
    super.uvodniPozdrav();
    console.log(`Tvoj prosjek je : ${this.prosjek}`);
  }
}

class Ucitelj extends Osoba {
  constructor(ime, dob, velicinaRazreda) {
    super(ime, dob);
    this.velicinaRazreda = velicinaRazreda;
  }
  pozdrav() {
    super.uvodniPozdrav();
    console.log(`Broj ucenika je ${this.velicinaRazreda}`);
  }
}

let osoba = new Osoba("Darko", 25);
let student = new Student("Marko", 20, 3.14);
let ucitelj = new Ucitelj("Farko", 34, 30);

student.pozdrav();
ucitelj.pozdrav();
osoba.uvodniPozdrav();
