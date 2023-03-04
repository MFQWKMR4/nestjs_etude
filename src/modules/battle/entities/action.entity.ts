import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Battle } from './battle.entity';
import { ActionMaster } from './actionMaster.entity';

@Entity()
export class Action {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    turn: number;

    @ManyToOne(() => Battle, (battle) => battle.actionRecords, { onDelete: 'CASCADE' })
    battle: Battle;

    @ManyToOne(() => ActionMaster)
    actionBy1: ActionMaster;

    @ManyToOne(() => ActionMaster)
    actionBy2: ActionMaster;

    @Column({ default: false })
    isPerformed: boolean;
}
