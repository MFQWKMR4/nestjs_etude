import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Battle } from '../../battle/entities/battle.entity';
import { RoomStatus } from 'src/common/constants';

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: RoomStatus,
        default: RoomStatus.Waiting,
    })
    status: RoomStatus;

    @ManyToOne(() => User)
    createUser: User;

    @ManyToOne(() => User)
    entryUser: User;

    @OneToOne(() => Battle)
    battle: Battle;
}
