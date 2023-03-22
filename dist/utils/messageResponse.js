"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageResponse {
    constructor(arg) {
        this.message = arg;
    }
    genericMessage(code) {
        return {
            message: this.message,
            status: code,
        };
    }
    internalError(code) {
        return this.genericMessage(code || 500);
    }
    success(code) {
        return this.genericMessage(code || 200);
    }
}
exports.default = MessageResponse;
//# sourceMappingURL=messageResponse.js.map