// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookElement = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookElement) {
//       hookElement.innerHTML = template;
//       hookElement.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// @Logger("Logging person")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("hello world");
//   }
// }
// const person = new Person();
// console.log(person);

//
function Log(target: any, propertyName: string) {
  console.log("Property decorator.");
  console.log(target, propertyName);
}
function Log2(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator.");
  console.log(target);
  console.log(propertyName);
  console.log(descriptor);
}

class Product {
  @Log
  title: string;
  private price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  @Log2
  set setPrice(price: number) {
    this.price = price;
  }

  getPriceWithTax(tax: number) {
    return this.price * tax;
  }

  // @Log2
  // setPrice(price: number) {
  //   this.price = price;
  // }
}
