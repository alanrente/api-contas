import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private console: Logger;
  constructor(private authService: AuthService) {
    super({ passwordField: 'googleUid' });
    this.console = new Logger('LocalStrategy');
  }

  async validate(username: string, googleUid: string) {
    const user = await this.authService.validateUser(username, googleUid);
    if (!user) {
      throw new UnauthorizedException();
    }
    this.console.debug('validate');
    return user;
  }
}
