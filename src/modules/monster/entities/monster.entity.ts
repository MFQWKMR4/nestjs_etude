import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Monster {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name1: string;

    @Column()
    name2: string;

    @Column()
    hitpoint: number;

    @Column()
    magicpoint: number;

    @Column()
    attack: number;

    @Column()
    defense: number;

    @Column()
    speed: number;

    @Column()
    kind: string;

    @Column()
    description: string;
}
