const messageNotNull = "messageNotNull";

export default class NotNull {
    messageText: string = "";

    validate(value: string, errorText?: string): boolean {
        this.messageText = errorText || messageNotNull;
        if (!value) {
            return false;
        }
        return true;
    }
}
