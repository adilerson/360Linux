import { Job } from 'bull';
declare class videoConsumer {
    videoTransformeJob(job: Job<any>): Promise<void>;
    getFileExtension: (file: any) => any;
    getFileNameWithoutExtension: (file: any) => any;
}
export { videoConsumer };
