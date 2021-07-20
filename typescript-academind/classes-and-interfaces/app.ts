class Department {
  // private name: string;
  protected employees: string[] = [];

  constructor(protected id: number, protected name: string) {
    this.name = name;
  }

  static getTaxPrice = (price: number): number => {
    return price * 0.16;
  };

  printDepartmentInfo = (): void => {
    console.log(`Hello ${this.name}.`);
  };

  addEmployee = (employee: string): void => {
    this.employees.push(employee);
  };

  printEmployeeInformation = (): void => {
    console.log(this.employees.length);
    console.log(this.employees);
  };
}

class AccountingDept extends Department {
  admins: string[] = [];
  constructor(id: number, admins: string[]) {
    super(id, "IT Department");
    this.admins = admins;
  }

  get getId() {
    return this.id;
  }
  set setId(id: number) {
    this.id = id;
  }

  sendBug = () => {
    console.log("New bug...");
  };

  addEmployee = (employee: string): void => {
    this.employees.push(employee);
    console.log(employee);
  };
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
