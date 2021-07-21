"use strict";
let user1;
class SoccerPlayer {
    constructor(name, age) {
        this.add = (n1, n2) => {
            return n1 + n2;
        };
        this.greet = () => {
            console.log(`Hello, I'm ${this.name}, and I'm a ${this.age} year old soccer player.`);
        };
        this.name = name;
        this.age = age;
    }
}
user1 = {
    name: "Erick",
    age: 21,
    add: (n1, n2) => Number(n1 + n2),
    greet: (phrase) => {
        console.log(phrase);
    },
};
user1.greet("Good morning!");
