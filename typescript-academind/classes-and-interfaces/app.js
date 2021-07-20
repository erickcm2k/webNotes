"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        this.printDepartmentInfo = () => {
            console.log(`Hello ${this.name}.`);
        };
        this.addEmployee = (employee) => {
            this.employees.push(employee);
        };
        this.printEmployeeInformation = () => {
            console.log(this.employees.length);
            console.log(this.employees);
        };
        this.name = name;
    }
}
Department.getTaxPrice = (price) => {
    return price * 0.16;
};
class AccountingDept extends Department {
    constructor(id, admins) {
        super(id, "IT Department");
        this.admins = [];
        this.sendBug = () => {
            console.log("New bug...");
        };
        this.addEmployee = (employee) => {
            this.employees.push(employee);
            console.log(employee);
        };
        this.admins = admins;
    }
    get getId() {
        return this.id;
    }
    set setId(id) {
        this.id = id;
    }
}
const dep = new Department(101, "Fauna");
dep.addEmployee("Max");
dep.addEmployee("Gerry");
dep.printEmployeeInformation();
console.log(Department.getTaxPrice(1000));
// const itDep = new AccountingDept(999, ["A", "B", "C"]);
// itDep.addEmployee("George");
// itDep.addEmployee("Abraham");
// itDep.addEmployee("Carl");
// itDep.printDepartmentInfo();
// itDep.sendBug();
// itDep.printEmployeeInformation();
// console.log(itDep.getId);
