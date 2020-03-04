"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageErrorNullDate = "messageErrorNullDate";
const messageNotValidateDateIssue = "messageNotValidateDateIssue";
class PastDate {
    constructor() {
        this.messageText = "";
    }
    validate(val, errorText) {
        if (!val.length) {
            this.messageText = messageErrorNullDate;
            return false;
        }
        if (new Date(val) > new Date()) {
            this.messageText = messageNotValidateDateIssue;
            return false;
        }
        this.messageText = messageErrorNullDate;
        return true;
    }
}
exports.default = PastDate;
