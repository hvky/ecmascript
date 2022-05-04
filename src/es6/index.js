function newFunction(name, age, country) {
  var name = name || "Carlos";
  var age = age || 30;
  var country = country || "BO";
  console.log(name, age, country);
}
newFunction();

console.log("----------------------------------------");
// es6

function newFunction2(name = "Carlos", age = 30, country = "BO") {
  console.log(name, age, country);
}
newFunction2("Maria", 33, "MX");

console.log("***************************************************************************************************");

let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

console.log("----------------------------------------");
// es6

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

console.log("***************************************************************************************************");

let lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, neque?\n" +
  "Lorem ipsum dolor sit amet.";
console.log(lorem);

console.log("----------------------------------------");
// es6

let lorem2 = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, recusandae?
Lorem ipsum dolor sit amet.
  `;
console.log(lorem2);

console.log("***************************************************************************************************");

let person = {
  "name": "Roberto",
  "age": 26,
  "country": "VZ",
};
console.log(person.name, person.age, person.country);

console.log("----------------------------------------");
// es6

let { name, age, country } = person;
console.log(name, age, country);

console.log("***************************************************************************************************");

let team1 = ["Oscar", "Enrique", "Ricardo"];
let team2 = ["Jesica", "Camila", "Valeria"];

// es6

let uniteTeam = ["David", ...team1, ...team2];
console.log(uniteTeam);

console.log("***************************************************************************************************");

{ var globalVar = "Global Var"; }
console.log(globalVar);

console.log("----------------------------------------");
// es6

{
  let globalLet = "Global Let";
  const globalConst = "Global Const";

  console.log(globalLet);
  console.log(globalConst);
}

console.log("***************************************************************************************************");

let nameOOP = "Valeria";
let ageOOP = 23;

obj = { 
  name: nameOOP, 
  age: ageOOP 
};
console.log(obj);

console.log("----------------------------------------");
// es6

obj2 = {
  nameOOP, 
  ageOOP
}
console.log(obj2);

console.log("***************************************************************************************************");

const names = [
  {name: "Carlos", age: 35},
  {name: "Roberto", age: 23},
  {name: "Valeria", age: 27},
];

let listOfNames = names.map(function(names) {
  console.log(names.name);
});

console.log("----------------------------------------");
// es6

let listOfNames2 = names.map( names => console.log(names.name) );

console.log("***************************************************************************************************");

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

console.log("***************************************************************************************************");

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sumar(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const suma = new Calculator();
console.log(suma.sumar(6, 7));

console.log("***************************************************************************************************");

import { hello } from './module';
hello(); // ERROR

console.log("***************************************************************************************************");

function* helloWorld() {
  if (true) {
    yield 'Hello, '; 
  }  
  if (true) {
    yield 'World';
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);  // Hello,
console.log(generatorHello.next().value);  // World

console.log(generatorHello.next().value);  // undefined
