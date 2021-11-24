import Result from "./result.js";

export default class SuccessDataResult extends Result {
  constructor(message, data) {
    super(true, message);
    this.data = data;
  }
}
