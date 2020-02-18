import Phone from "../modules/validators/phone";
const phone = new Phone()
import {IFormModule} from "../types";

let formData: Array<IFormModule> = [
    {  value: "920321392366", errorText: "this text is null", isValid: false },
    {  value: "920321392361", errorText: "this text is null", isValid: false },
    {  value: "просто текст", errorText: "this text is null", isValid: false },
    {  value: "123", errorText: "this text is null", isValid: false },
    {  value: "!()", errorText: "this text is null", isValid: false },
    {  value: "+7(777)111-12-12", errorText: "this text is null", isValid: true },
    {  value: "77771111212", errorText: "this text is null", isValid: true },
    {  value: "97771111212", errorText: "this text is null", isValid: true },

]

test('phone test', () => {
    formData.forEach(item => {
        expect(phone.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})