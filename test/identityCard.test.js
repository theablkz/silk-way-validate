"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const identityCard_1 = __importDefault(require("../modules/validators/identityCard"));
const identityCard = new identityCard_1.default();
let formData = [
    { value: "", errorText: "this text is null", isValid: false },
    { value: "123123123", errorText: "this text is null", isValid: true },
    { value: "987654321", errorText: "this text is null", isValid: true },
    { value: "123", errorText: "this text is null", isValid: false },
    { value: "!()", errorText: "this text is null", isValid: false },
];
test('identityCard test', () => {
    formData.forEach(item => {
        expect(identityCard.validate(item.value, item.errorText)).toBe(item.isValid);
    });
});
