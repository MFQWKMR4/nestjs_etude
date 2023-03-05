import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { WsEvent } from 'src/common/constants';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;
  wsClients = {};

  handleConnection(client: any, roomId: number) {
    if (this.wsClients[roomId]) {
      this.wsClients[roomId].push(client);
    } else {
      this.wsClients[roomId] = [client];
    }
  }

  @SubscribeMessage(WsEvent.RoomCreated)
  roomCreated(@MessageBody() data: any, roomId: number) {
    this.broadcast(WsEvent.RoomCreated, data.message, roomId);
  }

  @SubscribeMessage(WsEvent.ActionFixed)
  actionFixed(@MessageBody() data: any, roomId: number) {
    this.broadcast(WsEvent.ActionFixed, data.message, roomId);
  }

  public bothMonsterReady() {

  }

  public oneMonsterReady() {

  }

  private broadcast(event: WsEvent, message: string, roomId: number) {
    for (let c of this.wsClients[roomId]) {
      c.emit(event, message);
    }
  }
}