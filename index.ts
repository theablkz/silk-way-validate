import NotNull from './modules/validators/notNull'
import BooleanTrue from "./modules/validators/booleanTrue";
import IsBoolean from './modules/validators/isBoolean'
import Cyrillic from "./modules/validators/cyrillic";
import Iin from "./modules/validators/iin";
import Phone from "./modules/validators/phone";
import Email from './modules/validators/email'
import Iban from "./modules/validators/iban";
import IdentityCard from "./modules/validators/identityCard";
import Passport from "./modules/validators/passport";
import ResidencePermit from "./modules/validators/residencePermit";
import PastDate from "./modules/validators/pastDate";

import { IValidate } from './types'


class Validate {
    private validations: {[index: string]:any} = {
        notNull: new NotNull(),
        booleanTrue:  new BooleanTrue(),
        isBoolean: new IsBoolean(),
        cyrillic:  new Cyrillic(),
        iin: new Iin(),
        phone: new Phone(),
        email: new Email(),
        iban: new Iban(),
        identityCard: new IdentityCard(),
        passport: new Passport(),
        residencePermit: new ResidencePermit(),
        pastDate: new PastDate()
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
