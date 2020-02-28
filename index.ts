import NotNull from './modules/validators/notNull'
import BooleanTrue from "./modules/validators/booleanTrue";
import Cyrillic from "./modules/validators/cyrillic";
import Iin from "./modules/validators/iin";
import Phone from "./modules/validators/phone";
import Email from './modules/validators/email'

import { IValidate } from './types'


class Validate {
    private validations: {[index: string]:any} = {
        notNull: new NotNull(),
        booleanTrue:  new BooleanTrue(),
        cyrillic:  new Cyrillic(),
        iin: new Iin(),
        phone: new Phone(),
        email: new Email()
    }
    validate(validate: string, value: string | number | boolean, errorText: string ): IValidate | undefined{
        let validationsKeys = Object.keys(this.validations)
        if(validationsKeys.some(item => item === validate)){
           return {
               isValid: this.validations[validate].validate(value, errorText),
               errorText: this.validations[validate].messageText
           }
        }
        return undefined
    }
}

const Validation = new Validate()
export default Validation