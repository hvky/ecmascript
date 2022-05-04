let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));                                 // [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]

console.log("***************************************************************************************************");

let array1 = [1, 2, 3, 4, 5];
console.log(array1.flatMap(value => [value, value * 3]));

console.log("***************************************************************************************************");

let hello = "       hello world       ";
console.log(hello);

console.log("----------------------------------------");

console.log(hello.trimStart());
console.log(hello.trimEnd());

console.log("***************************************************************************************************");

try { 

} catch /* se omite el parametro ( error ) */ {
  error;
}

console.log("***************************************************************************************************");

let entries = [["name", "oscar"], ["age", "30"]];
console.log(Object.fromEntries(entries));                   // { name: 'oscar', age: '30' }

console.log("***************************************************************************************************");

let mySymbol = `My simbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);
