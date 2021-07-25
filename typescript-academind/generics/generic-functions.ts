const mergeObjects = <T extends object, U extends object>(
  a: T,
  b: U
): T & U => {
  return { ...a, ...b }; //   return Object.assign(a, b);
};
const obj1 = { a: 100, b: 200 };
const obj2 = { c: 300, d: 400 };
const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject.a);
console.log(mergedObject.d);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "Empty element.";
  if (element.length > 0) {
    descriptionText = `Has ${element.length} elements.`;
  }
  return [element, descriptionText];
};

console.log(countAndDescribe("Hello there!"));

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

const converted = extractAndConvert(
  { name: "erick", age: 21, x: "x", y: "y" },
  "name"
);
console.log(converted);
