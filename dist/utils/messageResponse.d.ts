export default class MessageResponse {
    private message;
    constructor(arg: any);
    private genericMessage;
    internalError(code?: number): {
        message: any;
        status: number;
    };
    success(code?: number): {
        message: any;
        status: number;
    };
}
