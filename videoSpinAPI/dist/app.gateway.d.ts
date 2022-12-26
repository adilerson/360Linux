import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
export declare class AppGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    server: any;
    handleEvent(data: string): void;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    afterInit(server: any): void;
}
