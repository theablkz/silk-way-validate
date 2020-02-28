import Validation from "../index";
import {IForm, IValidate} from '../types'


let testForm: Array<IForm> = [
    { validation: "notNull",        errorText: "some error",  value: "",            callback: { isValid: false, errorText: "some error" } },
    { validation: "notNull",        errorText: "some error",  value: "some text",   callback: { isValid: true, errorText: "some error" } },
    { validation: "notNull",        errorText: "some error",  value: "текс",        callback: { isValid: true, errorText: "some error" } },
    { validation: "phone",          errorText: "some error",  value: "87475511196", callback: { isValid: true, errorText: "some error" } },
    { validation: "phone",          errorText: "some error",  value: "+7 (747) - 551 - 11 - 96", callback: { isValid: true, errorText: "some error" } },
    { validation: "phone",          errorText: "some error",  value: "123456",          callback: { isValid: false, errorText: "messageNotValidPhone" } },
    { validation: "iin",            errorText: "some error",  value: "961114301109",    callback: { isValid: true, errorText: "messageErrorNullIin" } },
    { validation: "iin",            errorText: "some error",  value: "961411301109",    callback: { isValid: false, errorText: "messageErrorIin" } },
    { validation: "iin",            errorText: "some error",  value: "123123",          callback: { isValid: false, errorText: "messageLengthErrorIin" } },
    { validation: "iin",            errorText: "some error",  value: "961114301100",    callback: { isValid: false, errorText: "messageErrorIin" } },
    { validation: "booleanTrue",    errorText: "some error",  value: true,              callback: { isValid: true, errorText: "some error" } },
    { validation: "booleanTrue",    errorText: "some error",  value: false,             callback: { isValid: false, errorText: "some error" } },
    { validation: "cyrillic",       errorText: "some error",  value: "text" ,           callback: { isValid: false, errorText: "messageErrorNotValid" }},
    { validation: "cyrillic",       errorText: "some error",  value: "просто текс на кириллице", callback: { isValid: true, errorText: "some error" } },
    { validation: "cyrillic",       errorText: "some error",  value: "123",             callback: { isValid: false, errorText: "messageErrorNotValid" } },
    { validation: "email",       errorText: "some error",  value: "myemail.com",             callback: { isValid: false, errorText: "messageNotValidateEmail" } },
    { validation: "email",       errorText: "some error",  value: "myemail@gmail.com",             callback: { isValid: true, errorText: "messageNotValidateEmail" } },
    { validation: "email",       errorText: "some error",  value: "email@com",             callback: { isValid: false, errorText: "messageNotValidateEmail" } },
    { validation: "anyValidator",   errorText: "some error",  value: "123",             callback: undefined },

]


test("test validation module", () => {
    testForm.forEach(item => {
        expect(Validation.validate(item.validation, item.value, item.errorText)).toEqual(item.callback)
    })
})