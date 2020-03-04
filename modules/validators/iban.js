"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banksBic_json_1 = __importDefault(require("../banksBic.json"));
const messageErrorNullIban = "messageErrorNullIban";
const messageNotValidateIban = "messageNotValidateIban";
class Iban {
    constructor() {
        this.messageText = messageErrorNullIban;
    }
    validate(val, errText) {
        if (!val.length) {
            this.messageText = messageErrorNullIban;
            return false;
        }
        if (val.length != 20) {
            this.messageText = messageNotValidateIban;
            return false;
        }
        if (val.slice(0, 2) != "KZ") {
            this.messageText = messageNotValidateIban;
            return false;
        }
        if (!banksBic_json_1.default.find(item => item.code == val.slice(4, 7))) {
            this.messageText = messageNotValidateIban;
            return false;
        }
        this.messageText = messageNotValidateIban;
        return true;
    }
}
exports.default = Iban;
