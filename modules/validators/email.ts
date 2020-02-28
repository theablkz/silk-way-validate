import Regular from "../regular";

const messageErrorNull = "messageErrorNullEmail"
const messageNotValidate = "messageNotValidateEmail"

export default class Email {
    messageText: string = "";
    validate(val: string, errText?: string) {
        if (!val.length) {
            this.messageText = messageErrorNull
            return false;
        }

        if (!Regular.email.test(val)) {
            this.messageText = messageNotValidate
            return false;
        }
        return true;
    }
}