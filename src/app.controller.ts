import { Controller, Get, Logger, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'auth/auth.service';
import { JwtAuthGuard } from 'auth/guard/jwt-auth.guard';
import { LocalAuthGuard } from 'auth/guard/local-auth.guard';

@Controller()
export class AppController {
  private log: Logger;
  constructor(private authService: AuthService) {
    this.log = new Logger('AppController');
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    this.log.debug('[login]');
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    this.log.debug('[getProfile]');
    return req.user;
  }
}
