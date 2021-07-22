// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

// const e1: ElevatedEmployee = {
//     name: "Max",
//     privileges: ["priv1", "priv2"],
//     startDate: new Date(),
//   };

type Admin = {
  name: string;
  /** @internal */
  privileges: string[];
};

/**
 * Employee interface description.
 *
 * @interface Employee - Basic employee
 * @name {string} Field name description
 * @startDate {Date} startDate name description
 */
type Employee = {
  name: string;
  startDate: Date;
};

type UnknownEmployee = Admin | Employee;

const e1: UnknownEmployee = {
  name: "Max",
  privileges: ["priv1", "priv2"],
  startDate: new Date(),
};

const printEmployeeInformation = (emp: UnknownEmployee): void => {
  "startDate" in emp
    ? console.log("Type is Employee.")
    : console.log("Type is Admin.");
};

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Im driving.");
  }
}

class Truck {
  drive() {
    console.log("Im driving with cargo.");
  }
  loadCargo(amount: number) {
    console.log(`I'm loaded with ${amount} tons.`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const printVehicleInfo = (vehicle: Vehicle) => {
  vehicle.drive();
  //   "loadCargo" in vehicle && vehicle.loadCargo(10);
  vehicle instanceof Truck && vehicle.loadCargo(10);
};

printVehicleInfo(v1);
printVehicleInfo(v2);
