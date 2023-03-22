import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    private console;
    constructor(authService: AuthService);
    validate(username: string, googleUid: string): Promise<any>;
}
export {};
