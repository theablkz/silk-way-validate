"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageNotConfirm = "messageNotConfirm";
class IsBoolean {
    constructor() {
        this.messageText = "";
    }
    validate(value, errorText) {
        this.messageText = errorText || messageNotConfirm;
        if (typeof value !== "boolean") {
            return false;
        }
        return true;
    }
}
exports.default = IsBoolean;
