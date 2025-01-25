import { Controller, Get, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UseGuards } from '@nestjs/common/decorators/core';
import { Roles } from 'decorators/roles.decorator';
import { JwtAuthGuard } from 'auth/guard/jwt-auth.guard';
import { RolesGuard } from 'auth/guard/roles.guard';
import { Role } from 'types';
import { UsersService } from 'users/users.service';
import { Req } from '@nestjs/common/decorators/http';
import { Request } from 'express';
import { AuthService } from 'auth/auth.service';

@ApiTags('profiles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN)
@Controller('profiles')
export class ProfilesController {
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

  @Get()
  async findAll(@Req() req: Request) {
    const tokenDecode = await this.authService.decodeToken(req.headers.authorization.replace('Bearer ', ''));

    const { username } = tokenDecode as any;

    return this.usersService.findAll(username);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
  //   return this.usersService.update(+id, updateProfileDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
