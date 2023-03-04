import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
    async create(createRoomDto: CreateRoomDto): Promise<any> {
        return 'This action adds a new room';
    }

    async findAll(): Promise<any> {
        return `This action returns all room`;
    }

    async findOne(id: number): Promise<any> {
        return `This action returns a #${id} room`;
    }

    async entry(id: number, updateRoomDto: UpdateRoomDto): Promise<any> {
        return `This action updates a #${id} room`;
    }

    async remove(id: number): Promise<any> {
        return `This action removes a #${id} room`;
    }
}
