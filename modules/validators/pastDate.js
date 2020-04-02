"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regular_1 = __importDefault(require("../regular"));
const messageErrorNullDate = "messageErrorNullDate";
const messageNotValidateDateIssue = "messageNotValidateDateIssue";
class PastDate {
    constructor() {
        this.messageText = "";
        this.regular = regular_1.default.dateFormat;
    }
    validate(val, errorText) {
        if (!val.length) {
            this.messageText = messageErrorNullDate;
            return false;
        }
        if (!this.regular.test(val)) {
            this.messageText = messageNotValidateDateIssue;
            return false;
        }
        let timestamp = Date.parse(val.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
        if (isNaN(timestamp)) {
            this.messageText = messageNotValidateDateIssue;
            return false;
        }
        if (new Date(val.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")) > new Date()) {
            this.messageText = messageNotValidateDateIssue;
            return false;
        }
        this.messageText = messageErrorNullDate;
        return true;
    }
}
exports.default = PastDate;
