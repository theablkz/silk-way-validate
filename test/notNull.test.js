"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notNull_1 = __importDefault(require("../modules/validators/notNull"));
const notNull = new notNull_1.default();
let formData = [
    { value: "", errorText: "this text is null", isValid: false },
    { value: "some text", errorText: "this text is null", isValid: true },
    { value: "123", errorText: "this text is null", isValid: true },
    { value: "!()", errorText: "this text is null", isValid: true },
];
test('not null test', () => {
    formData.forEach(item => {
        expect(notNull.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
