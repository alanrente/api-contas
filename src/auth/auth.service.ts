import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'users/users.service';

@Injectable()
export class AuthService {
  private log: Logger;
  constructor(private userService: UsersService, private jwtService: JwtService) {
    this.log = new Logger('AuthService');
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      this.log.debug('result - validateUser');
      return result;
    }
    return null;
  }

  async login(user: any) {
    this.log.debug('login');
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
