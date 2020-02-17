"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notNull_1 = __importDefault(require("./modules/validators/notNull"));
const booleanTrue_1 = __importDefault(require("./modules/validators/booleanTrue"));
const cyrillic_1 = __importDefault(require("./modules/validators/cyrillic"));
const iin_1 = __importDefault(require("./modules/validators/iin"));
const phone_1 = __importDefault(require("./modules/validators/phone"));
class Validate {
    constructor() {
        this.validations = {
            notNull: new notNull_1.default(),
            booleanTrue: new booleanTrue_1.default(),
            cyrillic: new cyrillic_1.default(),
            iin: new iin_1.default(),
            phone: new phone_1.default()
        };
    }
    validate(validate, value, errorText) {
        let validationsKeys = Object.keys(this.validations);
        if (validationsKeys.some(item => item === validate)) {
            return {
                error: this.validations[validate].validate(value, errorText),
                errorText: this.validations[validate].messageText
            };
        }
        return undefined;
    }
}
const Validation = new Validate();
exports.default = Validation;
