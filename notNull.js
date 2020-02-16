"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotNull = /** @class */ (function () {
    function NotNull() {
        this.errorText = '';
    }
    NotNull.prototype.validate = function (data, errorText) {
        if (data.length < 1) {
            this.errorText = errorText;
            return false;
        }
        return true;
    };
    return NotNull;
}());
exports.default = NotNull;
