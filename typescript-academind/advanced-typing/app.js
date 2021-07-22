"use strict";
// let myInput = <HTMLInputElement>document.getElementById("user-input")!;
let myInput = document.getElementById("user-input");
myInput.value = "Hello there";
const errorBag = {
    email: "Not a valid email.",
    email2: "Not a valid email.",
    email3: "Not a valid email.",
};
// Optional chaining
const car = {
    //   brand: "VW",
    year: 2019,
    model: "Jetta",
};
// Useful for nested objects inside an object.
// console.log(car?.brand);
