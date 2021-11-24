import UserValidation from "../crossCuttingConcerns/validation/userValidation.js";
import { users } from "../data/users.js";

export default class UserService {
  //refactor et
  constructor(loggerService) {
    this.users = [];
    this.errors = [];
    this.loggerService = loggerService;
  }

  load() {
    for (const user of users) {
      this.add(user);
    }
  }

  add(user) {
    let userValidation = new UserValidation(user);

    if (userValidation.errors.length > 0) {
      this.errors.push(userValidation.errors);
    } else {
      this.users.push(user);
      this.loggerService.log(user);
    }
  }

  listByeType(type) {
    return this.users.filter((user) => user.type === type);
  }

  getById(id) {
    return this.users.find((u) => u.id === id);
  }

  getUsersSorted() {
    return this.users.sort((user1, user2) => {
      if (user1.firstName > user2.firstName) {
        return 1; //kazanan
      } else if (user1.firstName === user2.firstName) {
        return 0; // eşit
      } else {
        return -1; // kaybeden
      }
    });
  }
}
