const add = (x: number, y: number): number => {
  return x + y;
};

const printResult = (num: number): void => {
  console.log("The number is: " + num);
};

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  return result;
};

const result = add(1, 2);
console.log(result);

let printResultPointer: Function;
printResultPointer = printResult;

printResultPointer(1);

addAndHandle(10, 20, () => {});
