import { ComandoService } from './comando.service';
export declare class ComandoController {
    private comandoService;
    constructor(comandoService: ComandoService);
    startSocket(body: any, query: any): Promise<any>;
}
