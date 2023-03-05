
import { DataSource } from 'typeorm';
import { ActionMaster } from './entities/actionMaster.entity';

export const actionMasterProviders = [
    {
        provide: 'ACTIONMASTER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ActionMaster),
        inject: ['DATA_SOURCE'],
    },
];

