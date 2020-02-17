"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageNotNull = "messageNotNull";
class NotNull {
    constructor() {
        this.messageText = "";
    }
    validate(value, errorText) {
        this.messageText = errorText || messageNotNull;
        if (!value) {
            return false;
        }
        return true;
    }
}
exports.default = NotNull;
