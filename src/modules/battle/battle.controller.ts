import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BattleService } from './battle.service';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) { }

  // @Post()
  // create(@Body() createBattleDto: CreateBattleDto) {
  //   return this.battleService.create(createBattleDto);
  // }

  @Get()
  findAll(): Promise<any> {
    return this.battleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<any> {
    return this.battleService.findOne(+id);
  }

  @Post(':id/init')
  init(@Param('id') id: string, @Body() updateBattleDto: UpdateBattleDto): Promise<any> {
    return this.battleService.update(+id, updateBattleDto);
  }

  @Post(':id/action')
  action(@Param('id') id: string, @Body() updateBattleDto: UpdateBattleDto): Promise<any> {
    return this.battleService.update(+id, updateBattleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.battleService.remove(+id);
  }
}
