import { users } from "../data/users.js";
import CustomerValidation from "../crossCuttingConcerns/validation/customerValidation.js";

export default class CustomerService {
  constructor() {
    this.errors = [];
    this.customers = [];
  }

  load() {
    for (const user of users.filter((user) => user.type === "customer")) {
      this.add(user);
    }
  }

  add(customer) {
    let customerValidation = new CustomerValidation(customer);
    customer.type = "customer";

    if (customerValidation.errors.length > 0) {
      this.errors.push(customerValidation.errors);
    } else {
      this.customers.push(customer);
    }
  }

  list() {
    return this.customers.filter((customer) => customer.type === "customer");
  }

  getById(id) {
    return this.customers.find((u) => u.id === id);
  }

  getUsersSorted() {
    return this.customers.sort((customer1, customer2) => {
      if (customer1.firstName > customer2.firstName) {
        return 1; //kazanan
      } else if (customer1.firstName === customer2.firstName) {
        return 0; // eşit
      } else {
        return -1; // kaybeden
      }
    });
  }
}
