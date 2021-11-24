import Employee from "../models/employee.js";
import EmployeeService from "../services/employeeService.js";

let employeeService = new EmployeeService();

console.log("employee component yüklendi");
let employee1 = new Employee(1, "Adullah", "ÇETİN", "Sakarya", "a25", 456321);
let employee2 = new Employee(1, "Yasin", "ÇETİN", "Sakarya", 25, 123456);
let employee3 = new Employee(1, "Engin", "DEMİROĞ", "Ankara", 35, 789321);

employeeService.add(employee1);
employeeService.add(employee2);
employeeService.add(employee3);

employeeService.getUsersSorted();

console.log(employeeService.employees);
console.log(employeeService.errors);
console.log(employeeService.list());
