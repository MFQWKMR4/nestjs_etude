import { Inject, Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets/decorators';
import { Server } from 'socket.io';
import { BattlePhase, WsEvent } from 'src/common/constants';
import { DataSource, Repository } from 'typeorm';
import { EventsGateway } from '../events/events.gateway';
import { GptService } from '../gpt/gpt.service';
import { CreateMonsterDto } from '../monster/dto/create-monster.dto';
import { Monster } from '../monster/entities/monster.entity';
import { MonsterService } from '../monster/monster.service';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { Battle } from './entities/battle.entity';

@Injectable()
export class BattleService {

  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource,
    private gateway: EventsGateway,
    private monsterService: MonsterService,
  ) {
    this.battleRepository = dataSource.getRepository(Battle);
  }
  private readonly battleRepository: Repository<Battle>


  async initMonster(battleId: number, name1: string, name2: string, isFirst: boolean): Promise<void> {
    const dto = new CreateMonsterDto()
    dto.name1 = name1;
    dto.name2 = name2;
    const monster = await this.monsterService.create(dto);
    const battle = await this.battleRepository.findOneBy({ id: battleId });
    const m = isFirst ? { firstMonster: monster } : { secondMonster: monster };
    let updated;
    if ((isFirst && battle.secondMonster) || (!isFirst && battle.firstMonster)) {
      updated = { phase: BattlePhase.Running, ...m }
    } else {
      updated = { phase: BattlePhase.Starting, ...m }
    }
    const res = await this.dataSource.createQueryBuilder()
      .update(Battle)
      .set(updated)
      .where("id = :id ", { id: battleId })
      .execute();
    if ((isFirst && battle.secondMonster) || (!isFirst && battle.firstMonster)) {
      this.gateway.bothMonsterReady();
    } else {
      this.gateway.oneMonsterReady();
    }
  }

  async action(name: string, isAttack: boolean): Promise<any> {


  }

  async create(roomId: number): Promise<Battle> {
    const battle = new Battle();
    battle.phase = BattlePhase.Creating;
    const ret = await this.battleRepository.save(battle);
    this.gateway.server.emit(WsEvent.RoomCreated.toString(), "", roomId);
    return ret;
  }

  async findAll(): Promise<any> {
    return `This action returns all battle`;
  }

  async findOne(id: number): Promise<any> {
    return `This action returns a #${id} battle`;
  }

  async update(id: number, updateBattleDto: UpdateBattleDto): Promise<any> {
    return `This action updates a #${id} battle`;
  }

  async remove(id: number): Promise<any> {
    return `This action removes a #${id} battle`;
  }
}