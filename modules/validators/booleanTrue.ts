const messageNotConfirm = "messageNotConfirm";

export default class BooleanTrue {
  messageText: string = "";

  validate(value: boolean, errorText?: string): boolean {
    this.messageText = errorText || messageNotConfirm;
    if (!value) {
      return false;
    }
    return true;
  }
}
