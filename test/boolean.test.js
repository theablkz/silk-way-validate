"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booleanTrue_1 = __importDefault(require("../modules/validators/booleanTrue"));
const booleanTrue = new booleanTrue_1.default();
let formData = [
    { value: false, errorText: "this text is null", isValid: false },
    { value: true, errorText: "this text is null", isValid: true }
];
test('boolean true test', () => {
    formData.forEach(item => {
        expect(booleanTrue.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
