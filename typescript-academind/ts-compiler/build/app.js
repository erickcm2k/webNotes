"use strict";
let button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log("hello world!");
});
const sayHello = (name) => {
    if (name) {
        console.log(`Hello, ${name}!`);
    }
    else {
        console.log("No name was typed.");
    }
};
sayHello();
sayHello("Erick");
//# sourceMappingURL=app.js.map