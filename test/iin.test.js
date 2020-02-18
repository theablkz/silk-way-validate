"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const iin_1 = __importDefault(require("../modules/validators/iin"));
const iin = new iin_1.default();
let formData = [
    { value: "920321392366", errorText: "this text is null", isValid: true },
    { value: "920321392361", errorText: "this text is null", isValid: false },
    { value: "просто текст", errorText: "this text is null", isValid: false },
    { value: "123", errorText: "this text is null", isValid: false },
    { value: "!()", errorText: "this text is null", isValid: false },
    { value: "470717412847", errorText: "this text is null", isValid: true },
];
test('iin test', () => {
    formData.forEach(item => {
        expect(iin.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
