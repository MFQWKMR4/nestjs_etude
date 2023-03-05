import { BattlePhase } from 'src/common/constants';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Monster } from '../../monster/entities/monster.entity';
import { Action } from './action.entity';

@Entity()
export class Battle {

    
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Monster, { nullable: true })
    firstMonster: Monster;

    @ManyToOne(() => Monster, { nullable: true })
    secondMonster: Monster;

    @Column()
    phase: BattlePhase;

    @OneToMany(() => Action, (action) => action.battle)
    actionRecords: Action[];
}
