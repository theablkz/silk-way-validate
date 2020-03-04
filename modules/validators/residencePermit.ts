import Regular from "../regular";

const messageErrorNullDocument = "messageErrorNullDocument"
const messageNotValidateDocument = "messageNotValidateDocument"

export default class ResidencePermit {
    messageText: string = "";
    regular: RegExp = Regular.residencePermit;

    validate(val:string, errorText?: string): boolean {
        if (!val.length) {
            this.messageText = messageErrorNullDocument;
            return false;
        }

        if (!this.regular.test(val)) {
            this.messageText = messageNotValidateDocument;
            return false;
        }
        return true;
    }
}