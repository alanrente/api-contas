export default class MessageResponse {
  private message: any;

  constructor(arg: any) {
    this.message = arg;
  }

  private genericMessage(code: number) {
    return {
      message: this.message,
      status: code,
    };
  }

  internalError(code?: number) {
    return this.genericMessage(code || 500);
  }

  success(code?: number) {
    return this.genericMessage(code || 200);
  }
}
