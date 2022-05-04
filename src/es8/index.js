const data = {
  frotend: "Luis",
  backend: "Laura",
  desing: "Ana",
};

const entries = Object.entries(data);
console.log(entries);                    // [ [ 'frotend', 'Luis' ], [ 'backend', 'Laura' ], [ 'desing', 'Ana' ] ]
console.log(entries.length);             // 3

console.log("***************************************************************************************************");

const value = Object.values(data);
console.log(value);                     // [ 'Luis', 'Laura', 'Ana' ]
console.log(value.length);              // 3

console.log("***************************************************************************************************");

const string = "hello";
console.log(string.padStart(8, "hi "));           // hi hello
console.log(string.padEnd(11, " - world"));       // hello - wor

console.log("***************************************************************************************************");

const helloWorld = () => {
  return new Promise( (resolve, reject) => {
    (true) 
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("error"));
  })
}

const helloAsync = async() => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();
setTimeout(() => console.log("---------------------------------------------"), 3000);

const anotherFunction = async() => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
