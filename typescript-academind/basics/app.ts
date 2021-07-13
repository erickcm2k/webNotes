interface personInterface {
  name: string;
  age: number;
  nickname: string;
  hobbies: string[];
}

const person: personInterface = {
  name: "Max",
  age: 20,
  nickname: "scharm",
  hobbies: ["A", "B", "C"],
};

console.log(person);
for (const hobby of person.hobbies) {
  console.log(hobby);
}
