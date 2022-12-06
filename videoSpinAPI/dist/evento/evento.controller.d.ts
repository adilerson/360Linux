import { EventoService } from './evento.service';
export declare class EventoController {
    private eventoService;
    constructor(eventoService: EventoService);
    createQuarto(body: any, query: any): Promise<any>;
}
