const names: Array<string> = ["Max", "Man"];

interface Person {
  name: string;
  age: number;
  id: string;
}

const promise: Promise<Person> = new Promise((resolve, reject) => {
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
