import IdentityCard from "../modules/validators/identityCard";
const identityCard = new IdentityCard()
import {IFormModule} from "../types";

let formData: Array<IFormModule> = [
    {  value: "", errorText: "this text is null", isValid: false },
    {  value: "123123123", errorText: "this text is null", isValid: true },
    {  value: "987654321", errorText: "this text is null", isValid: true },
    {  value: "123", errorText: "this text is null", isValid: false },
    {  value: "!()", errorText: "this text is null", isValid: false },

]

test('identityCard test', () => {
    formData.forEach(item => {
        expect(identityCard.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})