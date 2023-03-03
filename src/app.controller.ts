import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BattleService } from './modules/battle/battle.service';
import { UserService } from './modules/users/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
    private readonly battleService: BattleService,
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createUser(): string {
    return this.userService.createUser();
  }

  @Post()
  createRoom(): string {
    return this.battleService.createRoom();

  }

  @Post()
  entry(): string {
    return this.battleService.entryRoom(user, roomId);
  }

  @Post()
  createMonster(): string {

    return this.battleService.createMonster(name);
  }

  @Post()
  action(): string {
    return this.battleService.action(actionName, isAttack);

  }
}
