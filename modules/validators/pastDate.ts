import Regular from "../regular";
const messageErrorNullDate = "messageErrorNullDate"
const messageNotValidateDateIssue = "messageNotValidateDateIssue"

export default class PastDate {
    messageText: string = "";
    regular: RegExp = Regular.dateFormat;
    validate(val:string, errorText?: string): boolean {
        if (!val.length) {
            this.messageText = messageErrorNullDate
            return false;
        }
        if (!this.regular.test(val)) {
            this.messageText = messageNotValidateDateIssue;
            return false;
        }

        let timestamp = Date.parse(val.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
        if (isNaN(timestamp)) {
            this.messageText = messageNotValidateDateIssue
            return false;
        }

        if (new Date(val.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")) > new Date()) {
            this.messageText = messageNotValidateDateIssue
            return false;
        }

        this.messageText = messageErrorNullDate
        return true;
    }
}