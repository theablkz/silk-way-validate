import Passport from "../modules/validators/passport";
const passport = new Passport()
import {IFormModule} from "../types";

let formData: Array<IFormModule> = [
    {  value: "", errorText: "this text is null", isValid: false },
    {  value: "123123123", errorText: "this text is null", isValid: true },
    {  value: "98765432", errorText: "this text is null", isValid: true },
    {  value: "asd123123", errorText: "this text is null", isValid: true },
    {  value: "123", errorText: "this text is null", isValid: false },
    {  value: "!()", errorText: "this text is null", isValid: false },

]

test('passport test', () => {
    formData.forEach(item => {
        expect(passport.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})