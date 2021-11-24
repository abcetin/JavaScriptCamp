import Result from "./result.js";

export default class ErrorDataResult extends Result {
  constructor(message, data) {
    super(false, message);
    this.data = data;
  }
}
