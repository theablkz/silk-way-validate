"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
let testForm = [
    { validation: "notNull", errorText: "some error", value: "", callback: { error: false, errorText: "some error" } },
    { validation: "notNull", errorText: "some error", value: "some text", callback: { error: true, errorText: "some error" } },
    { validation: "notNull", errorText: "some error", value: "текс", callback: { error: true, errorText: "some error" } },
    { validation: "phone", errorText: "some error", value: "87475511196", callback: { error: true, errorText: "some error" } },
    { validation: "phone", errorText: "some error", value: "+7 (747) - 551 - 11 - 96", callback: { error: true, errorText: "some error" } },
    { validation: "phone", errorText: "some error", value: "123456", callback: { error: false, errorText: "messageNotValidPhone" } },
    { validation: "iin", errorText: "some error", value: "961114301109", callback: { error: true, errorText: "messageErrorNullIin" } },
    { validation: "iin", errorText: "some error", value: "961411301109", callback: { error: false, errorText: "messageErrorIin" } },
    { validation: "iin", errorText: "some error", value: "123123", callback: { error: false, errorText: "messageLengthErrorIin" } },
    { validation: "iin", errorText: "some error", value: "961114301100", callback: { error: false, errorText: "messageErrorIin" } },
    { validation: "booleanTrue", errorText: "some error", value: true, callback: { error: true, errorText: "some error" } },
    { validation: "booleanTrue", errorText: "some error", value: false, callback: { error: false, errorText: "some error" } },
    { validation: "cyrillic", errorText: "some error", value: "text", callback: { error: false, errorText: "messageErrorNotValid" } },
    { validation: "cyrillic", errorText: "some error", value: "просто текс на кириллице", callback: { error: true, errorText: "some error" } },
    { validation: "cyrillic", errorText: "some error", value: "123", callback: { error: false, errorText: "messageErrorNotValid" } },
    { validation: "anyValidator", errorText: "some error", value: "123", callback: undefined },
];
test("test validation module", () => {
    // expect(sum(1, 2)).toBe(3);
    testForm.forEach(item => {
        console.log('testing', item);
        expect(index_1.default.validate(item.validation, item.value, item.errorText)).toEqual(item.callback);
    });
});
