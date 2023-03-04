import { Injectable } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';

@Injectable()
export class BattleService {

  async action(): Promise<any> {

  }


  async create(createBattleDto: CreateBattleDto): Promise<any> {
    return 'This action adds a new battle';
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
