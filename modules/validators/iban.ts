import bankBic from '../banksBic'
const messageErrorNullIban = "messageErrorNullIban"
const messageNotValidateIban = "messageNotValidateIban"

export default class Iban {
    messageText: string = messageErrorNullIban
    validate(val:string, errText?:string) {
        if (!val.length) {
            this.messageText = messageErrorNullIban
            return false;
        }
        let iban: string = val.replace(/\s/g, '')
        if (iban.length != 20) {
            this.messageText = messageNotValidateIban
            return false;
        }

        if(iban.slice(0,2) != "KZ"){
            this.messageText = messageNotValidateIban
            return false;
        }
        if(!bankBic.some(item => item.code == iban.slice(4,7))){
            this.messageText = messageNotValidateIban
            return false;
        }
        this.messageText = messageNotValidateIban
        return true;
    }
}
