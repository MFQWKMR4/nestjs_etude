import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class ActionMaster {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true })
    isAttack: boolean;

    @Column({ default: 0 })
    attack: number;

    @Column({ default: 0 })
    defense: number;

    @ManyToOne(() => User)
    createUser: User;
}
