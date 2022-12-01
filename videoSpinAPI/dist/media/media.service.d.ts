export declare class MediaService {
    files: any[];
    fileTxt: any[];
    interval: any;
    canEdit: boolean;
    constructor();
    fileUpload(req: any, res: any, file: any): Promise<any>;
    converMedia(file: any): Promise<void>;
    createThumb(folder: any, fileName: any): void;
    moveFile(name: any, path: any): void;
    getFileExtension: (file: any) => any;
    getFileNameWithoutExtension: (file: any) => any;
}
