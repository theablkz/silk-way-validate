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
        this.notNull = new notNull_1.default();
        this.booleanTrue = new booleanTrue_1.default();
        this.cyrillic = new cyrillic_1.default();
        this.iin = new iin_1.default();
        this.phone = new phone_1.default();
    }
}
const Validation = new Validate();
exports.default = Validation;
