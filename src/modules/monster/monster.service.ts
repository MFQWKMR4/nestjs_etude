import { Injectable } from '@nestjs/common';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { UpdateMonsterDto } from './dto/update-monster.dto';

@Injectable()
export class MonsterService {
  async create(createMonsterDto: CreateMonsterDto): Promise<any> {
    return 'This action adds a new monster';
  }

  async findAll(): Promise<any> {
    return `This action returns all monster`;
  }

  async findOne(id: number): Promise<any> {
    return `This action returns a #${id} monster`;
  }

  async update(id: number, updateMonsterDto: UpdateMonsterDto): Promise<any> {
    return `This action updates a #${id} monster`;
  }

  async remove(id: number): Promise<any> {
    return `This action removes a #${id} monster`;
  }
}
