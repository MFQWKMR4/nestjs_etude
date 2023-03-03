import { Repository } from 'typeorm';
import { Battle } from './battle.entity';

export class BattleRepository extends Repository<Battle> {
    async getBattleById(id: number): Promise<Battle> {
        return await this.findOneBy({ id });
    }

    async createBattle(battle: Battle): Promise<Battle> {
        return await this.save(battle);
    }
}
