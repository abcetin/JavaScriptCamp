import ErrorDataResult from "../results/errorDataResult.js";
import UserValidation from "./userValidation.js";

export default class EmployeeValidation extends UserValidation {
    constructor(employee){
        super(employee)
        this.errors = []
        if (Number.isNaN(Number.parseInt(+employee.age))) {
           this.errors.push(new ErrorDataResult(`Validation problem. ${employee.age} is not a number`, employee))
        }else if(!employee.salary){
            this.errors.push(new ErrorDataResult(`Validation problem. ${employee.salary} is required`, employee.salary))
        }
        
    }
    
}