const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.hello();
});

console.log("***************************************************************************************************");

const aBigNumber = 9007199254740991n;
console.log(aBigNumber);

console.log("----------------------------------------");

const anotherBigNumber = BigInt(9007199254740991);
console.log(anotherBigNumber);

console.log("***************************************************************************************************");

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

console.log("***************************************************************************************************");

console.log(window);
console.log(globalThis);

console.log("***************************************************************************************************");

const fooo = null ?? "default string";
console.log(fooo);

console.log("***************************************************************************************************");

const user = { };
console.log(user?.profile?.email);

if(user?.profile?.email) {
  console.log("email");
} else {
  console.log("fail");
}
