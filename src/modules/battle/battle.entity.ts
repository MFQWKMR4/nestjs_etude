import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Battle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}