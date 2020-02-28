"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = __importDefault(require("../modules/validators/email"));
const email = new email_1.default();
let formData = [
    { value: "abl@gmail.com", errorText: "this text is null", isValid: true },
    { value: "920321392361", errorText: "this text is null", isValid: false },
    { value: "просто текст", errorText: "this text is null", isValid: false },
    { value: "123", errorText: "this text is null", isValid: false },
    { value: "!()", errorText: "this text is null", isValid: false },
    { value: "example@mail.ru", errorText: "this text is null", isValid: true }
];
test('email test', () => {
    formData.forEach(item => {
        expect(email.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
