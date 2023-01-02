import { Injectable, Logger } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private log: Logger;
  constructor() {
    this.log = new Logger('UsersService');
  }
  private readonly users: User[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      role: 'admin',
    },
    {
      id: 2,
      username: 'user',
      password: 'user',
      role: 'user',
    },
  ];

  async findOne(username: string): Promise<User> {
    const user = await this.users.find((user) => user.username === username);
    this.log.debug('findOne');
    return user;
  }
}
