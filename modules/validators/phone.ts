const messageNotNullPhone = "messageNotNullPhone";
const messageNotValidPhone = "messageNotValidPhone";

export default class Phone {
  messageText: string = messageNotNullPhone;
  validate(number: string, errText?: string) {
    if (number.length == 0) {
      this.messageText = errText || messageNotNullPhone;
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
