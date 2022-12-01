import { MediaService } from './media.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    create(file: any, request: any, response: any): Promise<any>;
}
