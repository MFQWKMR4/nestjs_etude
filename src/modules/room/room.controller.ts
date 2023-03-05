import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { BattlePhase, RoomStatus } from 'src/common/constants';
import { BattleService } from '../battle/battle.service';
import { CreateBattleDto } from '../battle/dto/create-battle.dto';
import path from 'path';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService,
    @Inject('BATTLE_SERVICE')
    private readonly battleService: BattleService,
  ) { }

  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Patch(':id')
  async entry(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    const status = await this.roomService.entry(+id, updateRoomDto);
    if (status == RoomStatus.Ready) {
      return await this.battleService.create(+id);
    } else {
      throw new Error('invalid room status')
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }
}
