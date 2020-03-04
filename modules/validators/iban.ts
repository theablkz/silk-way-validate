import bankBic from '../banksBic.json'
const messageErrorNullIban = "messageErrorNullIban"
const messageNotValidateIban = "messageNotValidateIban"

export default class Iban {
    messageText: string = messageErrorNullIban
    validate(val:string, errText?:string) {
        if (!val.length) {
            this.messageText = messageErrorNullIban
            return false;
        }
        if (val.length != 20) {
            this.messageText = messageNotValidateIban
            return false;
        }

        if(val.slice(0,2) != "KZ"){
            this.messageText = messageNotValidateIban
            return false;
        }
        if(!bankBic.find(item => item.code == val.slice(4,7))){
            this.messageText = messageNotValidateIban
            return false;
        }
        this.messageText = messageNotValidateIban
        return true;
    }
}