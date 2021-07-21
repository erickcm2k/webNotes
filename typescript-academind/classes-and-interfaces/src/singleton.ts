class Shape {
  protected name: string = "Shape";

  constructor(name: string) {
    this.name = name;
  }

  describeShape = () => {
    console.log(`Hello, I'm a ${this.name}`);
  };
}

class Square extends Shape {
  private color: string;
  private static instance: Square;

  private constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }

  static getInstance = () => {
    if (Square.instance) {
      return Square.instance;
    }
    Square.instance = new Square("Rectangle", "Blue");
    return Square.instance;
  };
}

const randomShape = new Shape("randomShape");
const randomShape2 = new Shape("randomShape");
console.log(randomShape === randomShape2);

const mySquare = Square.getInstance();
const otherSquare = Square.getInstance();
console.log(mySquare === otherSquare);

console.log(mySquare);
console.log(otherSquare);

mySquare.describeShape();
