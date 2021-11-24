import EmployeeValidation from "../crossCuttingConcerns/validation/employeeValidation.js";
import { users } from "../data/users.js";

export default class EmployeeService {
  constructor() {
    this.errors = [];
    this.employees = [];
  }
  load() {
    for (const user of users.filter((user) => user.type === "employee")) {
      this.add(user);
    }
  }
  add(employee) {
    let employeeValidation = new EmployeeValidation(employee);
    employee.type = "employee";

    if (employeeValidation.errors.length > 0) {
      this.errors.push(employeeValidation.errors);
    } else {
      this.employees.push(employee);
    }
  }

  list() {
    return this.employees.filter((employee) => employee.type === "employee");
  }

  getById(id) {
    return this.employee.find((u) => u.id === id);
  }

  getUsersSorted() {
    return this.employees.sort((employee1, employee2) => {
      if (employee1.firstName > employee2.firstName) {
        return 1; //kazanan
      } else if (employee1.firstName === employee2.firstName) {
        return 0; // eşit
      } else {
        return -1; // kaybeden
      }
    });
  }
}
