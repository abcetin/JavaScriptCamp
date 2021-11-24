import ErrorDataResult from "../results/errorDataResult.js";

export default class UserValidation{
    constructor(user){
        this.errors = []
        let requiredFields = "id firstName lastName age city".split(" ")
        // user["age"] aynı zamanda user.age olarak kullanılabilir
        for (const field of requiredFields) {
            if(!user[field]){
                this.errors.push( new ErrorDataResult(`Validation problem. ${field} is required`,user) )//(``) buu tırnaklar ile yazılan stringin içine java script kodu yazmamıza izin veriyor
            }
        }
    }
    
}