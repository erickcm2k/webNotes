"use strict";
const names = ["Max", "Man"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: "erick", age: 21, id: "abcd" });
        // reject()
    }, 1000);
});
promise
    .then((data) => {
    console.log(data.name);
})
    .catch((e) => {
    console.log(e);
});
