import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository;
    private log;
    constructor(userRepository: Repository<User>);
    findOne(username: string, googleUid: string): Promise<User>;
}
