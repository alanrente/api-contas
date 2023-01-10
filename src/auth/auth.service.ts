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

  async validateUser(username: string, googleUid: string): Promise<any> {
    this.log.debug('validateUser');
    const user = await this.userService.findOne(username, googleUid);

    if (user) {
      const { ...result } = user;
      this.log.debug('result - validateUser');
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id, role: user.role };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
