
const messageErrorNullDate = "messageErrorNullDate"
const messageNotValidateDateIssue = "messageNotValidateDateIssue"

export default class PastDate {
    messageText: string = "";

    validate(val:string, errorText?: string): boolean {
        if (!val.length) {
            this.messageText = messageErrorNullDate
            return false;
        }

        if (new Date(val) > new Date()) {
            this.messageText = messageNotValidateDateIssue
            return false;
        }
        this.messageText = messageErrorNullDate
        return true;
    }
}