import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    private log;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(username: string, googleUid: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
