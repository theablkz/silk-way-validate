"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageNotNullPhone = "messageNotNullPhone";
const messageNotValidPhone = "messageNotValidPhone";
class Phone {
    constructor() {
        this.messageText = messageNotNullPhone;
    }
    validate(number, errText) {
        if (number.length == 0) {
            this.messageText = errText || messageNotNullPhone;
            return false;
        }
        let numberMatch = number.match(/[0-9]/g) || [];
        if (numberMatch.length !== 11) {
            this.messageText = messageNotValidPhone;
            return false;
        }
        return true;
    }
}
exports.default = Phone;
