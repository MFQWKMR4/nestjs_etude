import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './modules/room/room.module';
import { UserModule } from './modules/user/user.module';
import { BattleModule } from './modules/battle/battle.module';
import { DatabaseModule } from './modules/database/database.module';
import { MonsterModule } from './modules/monster/monster.module';
import { RoomController } from './modules/room/room.controller';
import { BattleController } from './modules/battle/battle.controller';
import { MonsterController } from './modules/monster/monster.controller';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [RoomModule, UserModule, BattleModule, DatabaseModule, MonsterModule],
  controllers: [AppController, RoomController, BattleController, MonsterController, UserController],
  providers: [AppService],
})
export class AppModule { }
