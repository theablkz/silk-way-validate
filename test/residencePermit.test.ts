import ResidencePermit from "../modules/validators/residencePermit";
const residencePermit = new ResidencePermit()
import {IFormModule} from "../types";

let formData: Array<IFormModule> = [
    {  value: "", errorText: "this text is null", isValid: false },
    {  value: "123123", errorText: "this text is null", isValid: false },
    {  value: "123456789", errorText: "this text is null", isValid: true },
    {  value: "98765432", errorText: "this text is null", isValid: false },
    {  value: "фывафывафыва", errorText: "this text is null", isValid: false },
    {  value: "qwerqwerasdf", errorText: "this text is null", isValid: true }

]

test('residencePermit test', () => {
    formData.forEach(item => {
        expect(residencePermit.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})