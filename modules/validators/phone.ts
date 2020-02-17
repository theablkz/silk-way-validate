const messageNotNullPhone = "messageNotNullPhone";
const messageNotValidPhone = "messageNotValidPhone";

export default class Phone {
  messageText: string = messageNotNullPhone;
  validate(number: string, errText?: string) {
    this.messageText = errText || messageNotNullPhone;
    if (number.length == 0) {
      return false;
    }
    let numberMatch: string[] = number.match(/[0-9]/g) || []
    if (numberMatch.length !== 11) {
      this.messageText = messageNotValidPhone;
      return false;
    }
    return true;
  }
}
