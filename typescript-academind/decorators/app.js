"use strict";
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
function Log(target, propertyName) {
    console.log("Property decorator.");
    console.log(target, propertyName);
}
function Log2(target, propertyName, descriptor) {
    console.log("Accessor decorator.");
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    set setPrice(price) {
        this.price = price;
    }
    getPriceWithTax(tax) {
        return this.price * tax;
    }
}
__decorate([
    Log,
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    Log2,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "setPrice", null);
