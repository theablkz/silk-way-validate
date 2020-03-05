"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pastDate_1 = __importDefault(require("../modules/validators/pastDate"));
const pastDate = new pastDate_1.default();
let formData = [
    { value: "", errorText: "this text is null", isValid: false },
    { value: "01-01-2020", errorText: "this text is null", isValid: true },
    { value: "30-01-2020", errorText: "this text is null", isValid: true },
    { value: "32-01-2020", errorText: "this text is null", isValid: false },
    { value: "123", errorText: "this text is null", isValid: false },
    { value: "!()", errorText: "this text is null", isValid: false },
];
test('pastDate test', () => {
    formData.forEach(item => {
        expect(pastDate.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
