import Customer from "../models/customer.js";
import CustomerService from "../services/customerService.js";

let customerService = new CustomerService();

console.log("customer component yüklendi");
let customer1 = new Customer(1, "Adullah", "ÇETİN", "Sakarya", "a25", 456321);
let customer2 = new Customer(1, "Yasin", "ÇETİN", "Sakarya", 25, 123456);
let customer3 = new Customer(1, "Engin", "DEMİROĞ", "Ankara", 35, 789321);

customerService.add(customer1);
customerService.add(customer2);
customerService.add(customer3);

customerService.getUsersSorted();
customerService.load();
console.log(customerService.customers);
console.log(customerService.errors);
