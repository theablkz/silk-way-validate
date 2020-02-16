"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var notNull_1 = __importDefault(require("./notNull"));
var Validate = /** @class */ (function () {
    function Validate() {
        this.NotNull = new notNull_1.default();
    }
    return Validate;
}());
// Validate.prototype.NotNull = new NotNull()
var Validation = new Validate();
exports.default = Validation;
