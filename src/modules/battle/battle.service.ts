import { Injectable } from '@nestjs/common';
import { Battle } from './battle.entity';
import { BattleRepository } from './battle.repository';

@Injectable()
export class BattleService {
    constructor(private readonly battleRepository: BattleRepository) { }

    async getBattleById(id: number): Promise<Battle> {
        return await this.battleRepository.getBattleById(id);
    }

    async createBattle(battle: Battle): Promise<Battle> {
        return await this.battleRepository.createBattle(battle);
    }
}
