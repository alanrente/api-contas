import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private log: Logger;
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    this.log = new Logger('UsersService');
  }

  async findAll(email: string) {
    return await this.userRepository.find({ where: { email: Not(email) } });
  }

  async findOne(username: string, googleUid: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        googleUid,
        email: username,
      },
    });
    this.log.debug(this.findOne.name);

    if (!user) return await this.create(username, googleUid);

    return user;
  }

  async create(username: string, googleUid: string) {
    this.log.debug(this.create.name);
    return await this.userRepository.save({
      googleUid,
      email: username,
    });
  }
}
