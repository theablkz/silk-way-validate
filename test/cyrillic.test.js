"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cyrillic_1 = __importDefault(require("../modules/validators/cyrillic"));
const cyrillic = new cyrillic_1.default();
let formData = [
    { value: "", errorText: "this text is null", isValid: false },
    { value: "просто текст", errorText: "this text is null", isValid: true },
    { value: "123", errorText: "this text is null", isValid: false },
    { value: "!()", errorText: "this text is null", isValid: false },
];
test('cyrillic test', () => {
    formData.forEach(item => {
        expect(cyrillic.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
