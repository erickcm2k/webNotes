type CombinedType = number | string;

const add = (x: CombinedType, y: CombinedType) => {
  let result;
  if (typeof x === "number" && typeof y === "number") {
    result = x + y;
  } else {
    result = x.toString() + y.toString();
  }
  return result;
};

console.log(add(1, 2));
console.log(add("hello", " world"));
