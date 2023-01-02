import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private console: Logger;
  constructor(private authService: AuthService) {
    super();
    this.console = new Logger('LocalStrategy');
  }

  async validate(username: string, password) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    this.console.debug('validate');
    return user;
  }
}
