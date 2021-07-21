interface Person {
  name: string;
  age: number;
  personId?: bigint;
  greet: (phrase: string) => void;
  add: (n1: number, n2: number) => number;
}

let user1: Person;

class SoccerPlayer implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  add = (n1: number, n2: number) => {
    return n1 + n2;
  };

  greet = (): void => {
    console.log(
      `Hello, I'm ${this.name}, and I'm a ${this.age} year old soccer player.`
    );
  };
}

user1 = {
  name: "Erick",
  age: 21,
  add: (n1: number, n2: number) => Number(n1 + n2),
  greet: (phrase: string) => {
    console.log(phrase);
  },
};

user1.greet("Good morning!");
