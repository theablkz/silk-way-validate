import NotNull from "../modules/validators/notNull";
const notNull = new NotNull()

interface IForm{
    value: string,
    errorText?: string,
    isValid: boolean
}

let formData: Array<IForm> = [
    {  value: "", errorText: "this text is null", isValid: false },
    {  value: "some text", errorText: "this text is null", isValid: true },
    {  value: "123", errorText: "this text is null", isValid: true },
    {  value: "!()", errorText: "this text is null", isValid: true },

]

test('not null test', () => {
    formData.forEach(item => {
        expect(notNull.validate(item.value, item.errorText)).toBe(item.isValid)
    })

})