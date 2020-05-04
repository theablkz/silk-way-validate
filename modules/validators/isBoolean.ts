const messageNotConfirm = "messageNotConfirm";

export default class IsBoolean {
    messageText: string = "";

    validate(value: boolean, errorText?: string): boolean {
        this.messageText = errorText || messageNotConfirm;
        if (typeof value !== "boolean") {
            return false;
        }
        return true;
    }
}
