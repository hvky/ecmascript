const string = "Lorem ipsum, dolor sit amet consectetur Lorem adipisicing elit. Reprehenderit, aut?";
const replacedString = string.replace("Lorem", "Hello");
console.log(replacedString);

console.log("----------------------------------------");

const replacedString2 = string.replaceAll("Lorem", "Hello");
console.log(replacedString2);

console.log("***************************************************************************************************");

class Message {
  #show(val) {
    console.log(val);
  }
}
const message = new Message();
message.show("Hello!");

console.log("***************************************************************************************************");

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
  .then(response => console.log(response));                                 // 2

console.log("***************************************************************************************************");

class AnyClass {
  constructor(elem) {
    this.ref = new WeakRef(elem);
  }
}

console.log("***************************************************************************************************");

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);                        // false
console.log(isTrue ||= isFalse);                        // false

let isUndefined = undefined;
console.log(isUndefined ??= isFalse);                   // false
