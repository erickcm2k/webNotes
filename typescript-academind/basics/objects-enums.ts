enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
  NUMBER = 12345,
}
interface personInterface {
  name: string;
  age: number;
  nickname: string;
  hobbies: string[];
  id: [number, string];
  role: Role;
}

const person: personInterface = {
  name: "Max",
  age: 20,
  nickname: "scharm",
  hobbies: ["A", "B", "C"],
  id: [12212, "12"],
  role: Role.ADMIN,
};

console.log(person);
console.log(person.role === Role.ADMIN);
console.log(person.role === Role.READ_ONLY);

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}
