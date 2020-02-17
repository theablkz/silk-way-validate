"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageNotConfirm = "messageNotConfirm";
class BooleanTrue {
    constructor() {
        this.messageText = "";
    }
    validate(value, errorText) {
        this.messageText = errorText || messageNotConfirm;
        if (!value) {
            return false;
        }
        return true;
    }
}
exports.default = BooleanTrue;
