
const messageErrorNullDate = "messageErrorNullDate"
const messageNotValidateDateIssue = "messageNotValidateDateIssue"

export default class PastDate {
    messageText: string = "";

    validate(val:string, errorText?: string): boolean {
        if (!val.length) {
            this.messageText = messageErrorNullDate
            return false;
        }

        if(new Date(val.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))){
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