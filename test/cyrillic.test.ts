import Cyrillic from "../modules/validators/cyrillic";
const cyrillic = new Cyrillic()
import {IFormModule} from "../types";

let formData: Array<IFormModule> = [
    {  value: "", errorText: "this text is null", isValid: false },
    {  value: "просто текст", errorText: "this text is null", isValid: true },
    {  value: "123", errorText: "this text is null", isValid: false },
    {  value: "!()", errorText: "this text is null", isValid: false },

]

test('cyrillic test', () => {
    formData.forEach(item => {
        expect(cyrillic.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})