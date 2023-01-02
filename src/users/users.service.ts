import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private log: Logger;
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    this.log = new Logger('UsersService');
  }

  async findOne(username: string, googleUid: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        googleUid,
        email: username,
      },
    });
    this.log.debug('findOne');
    return user;
  }
}
