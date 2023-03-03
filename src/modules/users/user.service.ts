import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async getUserById(id: number): Promise<User> {
        return await this.userRepository.getUserById(id);
    }

    async createUser(user: User): Promise<User> {
        return await this.userRepository.createUser(user);
    }
}
