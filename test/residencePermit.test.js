"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const residencePermit_1 = __importDefault(require("../modules/validators/residencePermit"));
const residencePermit = new residencePermit_1.default();
let formData = [
    { value: "", errorText: "this text is null", isValid: false },
    { value: "123123", errorText: "this text is null", isValid: false },
    { value: "123456789", errorText: "this text is null", isValid: true },
    { value: "98765432", errorText: "this text is null", isValid: false },
    { value: "фывафывафыва", errorText: "this text is null", isValid: false },
    { value: "qwerqwerasdf", errorText: "this text is null", isValid: true }
];
test('residencePermit test', () => {
    formData.forEach(item => {
        expect(residencePermit.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
