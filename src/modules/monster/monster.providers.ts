
import { DataSource } from 'typeorm';
import { Monster } from './entities/monster.entity';

export const monsterProviders = [
{
    provide: 'MONSTER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Monster),
    inject: ['DATA_SOURCE'],
},
];

