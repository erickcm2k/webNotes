// let myInput = <HTMLInputElement>document.getElementById("user-input")!;
let myInput = document.getElementById("user-input")! as HTMLInputElement;
myInput.value = "Hello there";

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
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
