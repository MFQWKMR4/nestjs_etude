import { Inject, Injectable } from '@nestjs/common';
import { RoomStatus } from 'src/common/constants';
import { DataSource, getManager, Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {

    constructor(
        @Inject('DATA_SOURCE')
        private readonly dataSource: DataSource,
        private readonly roomRepository: Repository<Room>,
    ) {
        this.roomRepository = dataSource.getRepository(Room);
    }

    async create(createRoomDto: CreateRoomDto): Promise<any> {
        return this.roomRepository.create(createRoomDto);
    }

    async findAll(): Promise<any> {
        return `This action returns all room`;
    }

    async findOne(id: number): Promise<any> {
        return this.roomRepository.findOneBy({ id });
    }

    async entry(id: number, updateRoomDto: UpdateRoomDto): Promise<RoomStatus> {
        return await this.dataSource.transaction(async (manager) => {
            const repo = manager.getRepository(Room);
            const res = await repo.update(id, updateRoomDto);
            if (res.affected === 0) {
                throw new Error('Room not found');
            }
            const e = await repo.findOneBy({ id });
            return e.status;
        })
    }

    async remove(id: number): Promise<any> {
        return `This action removes a #${id} room`;
    }
}
