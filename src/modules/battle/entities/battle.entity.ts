import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Monster } from '../../monster/entities/monster.entity';
import { Action } from './action.entity';

@Entity()
export class Battle {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Monster)
    firstMonster: Monster;

    @ManyToOne(() => Monster)
    secondMonster: Monster;

    @Column()
    phase: string;

    @OneToMany(() => Action, (action) => action.battle)
    actionRecords: Action[];
}
