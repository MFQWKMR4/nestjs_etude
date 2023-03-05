
import { DataSource } from 'typeorm';
import { Action } from './entities/action.entity';

export const actionProviders = [
    {
        provide: 'ACTION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Action),
        inject: ['DATA_SOURCE'],
    },
];

