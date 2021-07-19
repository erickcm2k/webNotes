let button: HTMLElement = document.getElementById("btn")!;

button.addEventListener("click", () => {
  console.log("hello world!");
});

const sayHello = (name?: string) => {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("No name was typed.");
  }
};

sayHello();
sayHello("Erick");
