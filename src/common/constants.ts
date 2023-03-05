
export enum RoomStatus {
    Waiting,
    Ready,
    Running,
    Result,
}

export enum BattlePhase {
    Creating,
    Starting,
    Running,
    Result,
}

export enum WsEvent {
    RoomCreated,
    BattleStarted,
    ActionFixed,
}
