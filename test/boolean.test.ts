import BooleanTrue from "../modules/validators/booleanTrue";
const booleanTrue = new BooleanTrue()
import { IFormModuleBoolean } from '../types'

let formData: Array<IFormModuleBoolean> = [
    {  value: false, errorText: "this text is null", isValid: false },
    {  value: true, errorText: "this text is null", isValid: true }

]

test('boolean true test', () => {
    formData.forEach(item => {
        expect(booleanTrue.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})