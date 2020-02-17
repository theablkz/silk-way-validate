"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regular_1 = __importDefault(require("../regular"));
const messageErrorNull = "messageErrorNull";
const messageErrorNotValid = "messageErrorNotValid";
class Cyrillic {
    constructor() {
        this.messageText = "";
        this.regular = regular_1.default.cyrillic;
    }
    validate(value, errorText) {
        const valueTrimmed = value.trim();
        this.messageText = errorText || messageErrorNull;
        if (valueTrimmed.length == 0) {
            this.messageText = errorText || messageErrorNull;
            return false;
        }
        if (!this.regular.test(valueTrimmed)) {
            this.messageText = messageErrorNotValid;
            return false;
        }
        return true;
    }
}
exports.default = Cyrillic;
