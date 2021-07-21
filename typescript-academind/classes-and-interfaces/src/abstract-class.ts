abstract class Person {
  name: string;
  static id: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  abstract sayHello(): void;
}

class Programmer extends Person {
  static salary: number = 1000000;

  sayHello = (): void => {
    console.log(`Hello, I'm ${this.name}`);
  };
}
console.log(Person.id);

const coder = new Programmer("John");
coder.sayHello();
