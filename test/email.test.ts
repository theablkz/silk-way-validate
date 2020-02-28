import Email from "../modules/validators/email";
const email = new Email()

import {IFormModule} from "../types";

let formData: Array<IFormModule> = [
    {  value: "abl@gmail.com", errorText: "this text is null", isValid: true },
    {  value: "920321392361", errorText: "this text is null", isValid: false },
    {  value: "просто текст", errorText: "this text is null", isValid: false },
    {  value: "123", errorText: "this text is null", isValid: false },
    {  value: "!()", errorText: "this text is null", isValid: false },
    {  value: "example@mail.ru", errorText: "this text is null", isValid: true }

]

test('email test', () => {
    formData.forEach(item => {
        expect(email.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})