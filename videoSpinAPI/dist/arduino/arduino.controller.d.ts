import { ArduinoService } from './arduino.service';
export declare class ArduinoController {
    private arduinoService;
    constructor(arduinoService: ArduinoService);
    createQuarto(body: any, query: any): Promise<any>;
}
