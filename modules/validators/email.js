"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regular_1 = __importDefault(require("../regular"));
const messageErrorNull = "messageErrorNullEmail";
const messageNotValidate = "messageNotValidateEmail";
class Email {
    constructor() {
        this.messageText = "";
    }
    validate(val, errText) {
        if (!val.length) {
            this.messageText = messageErrorNull;
            return false;
        }
        if (!regular_1.default.email.test(val)) {
            this.messageText = messageNotValidate;
            return false;
        }
        return true;
    }
}
exports.default = Email;
