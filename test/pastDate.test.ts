import PastDate from "../modules/validators/pastDate";
const pastDate = new PastDate()
import {IFormModule} from "../types";

let formData: Array<IFormModule> = [
    {  value: "", errorText: "this text is null", isValid: false },
    {  value: "01-01-2020", errorText: "this text is null", isValid: true },
    {  value: "30-01-2020", errorText: "this text is null", isValid: true },
    {  value: "32-01-2020", errorText: "this text is null", isValid: false },
    {  value: "123", errorText: "this text is null", isValid: false },
    {  value: "!()", errorText: "this text is null", isValid: false },

]

test('pastDate test', () => {
    formData.forEach(item => {
        expect(pastDate.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})