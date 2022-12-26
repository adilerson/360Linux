import { AppGateway } from 'src/app.gateway';
export declare class ComandoService {
    private socket;
    constructor(socket: AppGateway);
    startGiraGira(): Promise<void>;
}
