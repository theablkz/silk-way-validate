"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regular_1 = __importDefault(require("../regular"));
const messageErrorNullDocument = "messageErrorNullDocument";
const messageNotValidateDocument = "messageNotValidateDocument";
class Passport {
    constructor() {
        this.messageText = "";
        this.regular = regular_1.default.passport;
    }
    validate(val, errorText) {
        if (!val.length) {
            this.messageText = messageErrorNullDocument;
            return false;
        }
        if (!this.regular.test(val)) {
            this.messageText = messageNotValidateDocument;
            return false;
        }
        return true;
    }
}
exports.default = Passport;
