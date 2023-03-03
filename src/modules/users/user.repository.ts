import { Repository } from 'typeorm';
import { User } from './user.entity';

export class UserRepository extends Repository<User> {
    async getUserById(id: number): Promise<User> {
        return await this.findOneBy({ id });
    }

    async createUser(user: User): Promise<User> {
        return await this.save(user);
    }
}
