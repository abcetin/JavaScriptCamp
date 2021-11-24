import ErrorDataResult from "../results/errorDataResult.js";
import UserValidation from "./userValidation.js";

export default class CustomerValidation extends UserValidation {
    constructor(customer){
        super(customer)
        this.errors = []
        if (Number.isNaN(Number.parseInt(+customer.age))) {
           this.errors.push(new ErrorDataResult(`Validation problem. ${customer.age} is not a number`, customer))
        }else if(!customer.creditCardNumber){
            this.errors.push(new ErrorDataResult(`Validation problem. ${customer.creditCardNumber} is required`, customer))
        }
    }
}