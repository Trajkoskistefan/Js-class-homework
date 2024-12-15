// 1

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
    console.log("----------------------");
  }
}

const person1 = new Person("Alice", 30, "USA");
const person2 = new Person("Bob", 25, "Canada");
const person3 = new Person("Rocky", 30, "France");

person1.displayDetails();
person2.displayDetails();
person3.displayDetails();

class guitars {
  constructor(brand, year, origin) {
    this.brand = brand;
    this.year = year;
    this.origin = origin;
  }
  displayGuitars() {
    console.log(`Name:${this.brand}`);
    console.log(`Year:${this.year}`);
    console.log(`Origin:${this.origin}`);
    console.log(`---------------------`);
  }
}

const guitar1 = new guitars(`Gibson`, 100, `USA`);
const guitar2 = new guitars("Esp", 50, "Japan");
const guitar3 = new guitars(" Paul Reed Smith", 30, "USA");

guitar1.displayGuitars();
guitar2.displayGuitars();
guitar3.displayGuitars();

class gamingPeripherals {
  constructor(brand, typeOfPeripheral) {
    this.brand = brand;
    this.typeOfPeripheral = typeOfPeripheral;
  }

  displaygamingstuff() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Type of Peripherals: ${this.typeOfPeripheral}`);
    console.log("---------------");
  }
}

const mouse1 = new gamingPeripherals(`Razer Basilisk V3`, `Mouse`);
const mouse2 = new gamingPeripherals(`Razer Deathader Essential`, `Mouse`);
const keyboard1 = new gamingPeripherals(`Razer Blackwidow V3`, `Keyboard`);
mouse1.displaygamingstuff();
mouse2.displaygamingstuff();
keyboard1.displaygamingstuff();

// 2

class vraboten {
  constructor(Ime, Plata) {
    this.Ime = Ime;
    this.Plata = Plata;
  }
  presmetajplata() {
    return this.Plata * 12;
  }
}

class menadzer extends vraboten {
  constructor(Ime, Plata, Departman, Dodatoci) {
    super(Ime, Plata);
    this.Departman = Departman;
    this.Dodatoci = Dodatoci;
  }
  presmetajplata() {
    return super.presmetajplata() + this.Dodatoci;
  }

  prikaziinfo() {
    console.log(`Ime: ${this.Ime}`);
    console.log(`Plata:${this.Plata} + Dodatoci: ${this.Dodatoci}`);
    console.log(`Vkupna Plata: ${this.Plata + this.Dodatoci}`);
    console.log(`Departman: ${this.Departman}`);
    console.log(`--------------------------`);
  }
}
const vraboten1 = new menadzer(`Stefan`, 340000, `IT`, 30000);
const vraboten2 = new menadzer(`Panche`, 330000, `Digital Marketing`, 20000);
vraboten1.prikaziinfo();
vraboten2.prikaziinfo();

// 3

class Book {
  constructor(title, author, publicationyear) {
    this.title = title;
    this.author = author;
    this.publicationyear = publicationyear;
  }
  displayBooks() {
    console.log(`Title:${this.title}`);
    console.log(`Author:${this.author}`);
    console.log(`Publication Year:${this.publicationyear}`);
  }
}
class ebook extends Book {
  constructor(title, author, publicationyear, price) {
    super(title, author, publicationyear);
    this.price = price;
  }
  displayBooks() {
    super.displayBooks();
    console.log(`Price:$${this.price}`);
    console.log(`----------------------`);
  }
}
const myEbook = new ebook("The Shining", "Stephen King", 1980, 40);
myEbook.displayBooks();

