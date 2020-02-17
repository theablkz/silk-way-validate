import Regular from "../regular";

const messageErrorNull = "messageErrorNull";
const messageErrorNotValid = "messageErrorNotValid";

export default class Cyrillic {
  messageText: string = "";
  regular: RegExp = Regular.cyrillic;

  validate(value: string, errorText?: string): boolean {
    const valueTrimmed: string = value.trim();
    this.messageText = errorText || messageErrorNull;
    if (valueTrimmed.length == 0) {
      this.messageText = errorText || messageErrorNull;
      return false;
    }
    if (!this.regular.test(valueTrimmed)) {
      this.messageText = messageErrorNotValid;
      return false;
    }

    return true;
  }
}
