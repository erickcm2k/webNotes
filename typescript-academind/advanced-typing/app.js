"use strict";
// interface Admin {
//   name: string;
//   privileges: string[];
// }
const e1 = {
    name: "Max",
    privileges: ["priv1", "priv2"],
    startDate: new Date(),
};
const printEmployeeInformation = (emp) => {
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
    loadCargo(amount) {
        console.log(`I'm loaded with ${amount} tons.`);
    }
}
const v1 = new Car();
const v2 = new Truck();
const printVehicleInfo = (vehicle) => {
    vehicle.drive();
    //   "loadCargo" in vehicle && vehicle.loadCargo(10);
    vehicle instanceof Truck && vehicle.loadCargo(10);
};
printVehicleInfo(v1);
printVehicleInfo(v2);
