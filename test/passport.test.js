"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("../modules/validators/passport"));
const passport = new passport_1.default();
let formData = [
    { value: "", errorText: "this text is null", isValid: false },
    { value: "123123123", errorText: "this text is null", isValid: true },
    { value: "98765432", errorText: "this text is null", isValid: true },
    { value: "asd123123", errorText: "this text is null", isValid: true },
    { value: "123", errorText: "this text is null", isValid: false },
    { value: "!()", errorText: "this text is null", isValid: false },
];
test('passport test', () => {
    formData.forEach(item => {
        expect(passport.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
