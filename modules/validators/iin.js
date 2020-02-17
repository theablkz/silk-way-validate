"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageErrorNullIin = "messageErrorNullIin";
const messageNoDecimalIin = "messageNoDecimalIin";
const messageLengthErrorIin = "messageLengthErrorIin";
const messageErrorIin = "messageErrorIin";
const discharge = [
    { gen: "man", century: 1800, index: '1' },
    { gen: "woman", century: 1800, index: '2' },
    { gen: "man", century: 1900, index: '3' },
    { gen: "woman", century: 1900, index: '4' },
    { gen: "man", century: 2000, index: '5' },
    { gen: "woman", century: 2000, index: '6' }
];
class Iin {
    constructor() {
        this.messageText = "";
    }
    validate(i, errorText) {
        if (i.length == 0) {
            this.messageText = messageErrorNullIin;
            return false;
        }
        if (i.match(/\D/)) {
            this.messageText = messageNoDecimalIin;
            return false;
        }
        let iin = i;
        if (iin.length !== 12) {
            this.messageText = messageLengthErrorIin;
            return false;
        }
        this.messageText = messageErrorIin;
        let century = iin[6];
        let findCentury = discharge.some(item => iin[6] === item.index);
        if (!findCentury)
            return false;
        let userCentury = discharge[discharge.findIndex(item => item.index === century)].century;
        let year = userCentury + parseInt(iin.slice(0, 2));
        let month = parseInt(iin.slice(2, 4));
        let day = parseInt(iin.slice(4, 6));
        if (day === 0 || day > 31) {
            return false;
        }
        if (month === 0 || month > 12) {
            return false;
        }
        if (new Date().getFullYear() < year) {
            return false;
        }
        let b1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let b2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
        let a = [];
        let control = 0;
        for (let i = 0; i < 12; i++) {
            a[i] = parseInt(iin.substring(i, i + 1));
            if (i < 11)
                control += a[i] * b1[i];
        }
        control = control % 11;
        if (control === 10) {
            control = 0;
            for (let i = 0; i < 11; i++)
                control += a[i] * b2[i];
            control = control % 11;
        }
        if (control !== a[11]) {
            return false;
        }
        this.messageText = messageErrorNullIin;
        return true;
    }
}
exports.default = Iin;
