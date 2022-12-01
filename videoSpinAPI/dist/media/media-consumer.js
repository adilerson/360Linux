"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoConsumer = void 0;
const bull_1 = require("@nestjs/bull");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
const supportedFiles = ['mp4', 'mov', 'm4v'];
let videoConsumer = class videoConsumer {
    constructor() {
        this.getFileExtension = (file) => {
            const fileName = file.originalname;
            return fileName.split('.').pop();
        };
        this.getFileNameWithoutExtension = (file) => {
            return file.split('.').slice(0, -1).join('.');
        };
    }
    async videoTransformeJob(job) {
        const { req } = job.data;
        if (supportedFiles.includes(this.getFileExtension(req))) {
            try {
                const fileName = await this.getFileNameWithoutExtension(req.originalname);
                const command = await ffmpeg();
                command.input(`tmp/${req.filename}`).format('mp4');
                command.input(`tmp/back.png`);
                command.input(`tmp/audio.mp3`);
                command
                    .complexFilter([
                    {
                        filter: 'trim',
                        options: { start: '0', duration: '5' },
                        inputs: '0:v',
                        outputs: ['t0'],
                    },
                    {
                        filter: 'trim',
                        options: { start: '5', duration: '5' },
                        inputs: '0',
                        outputs: ['t1'],
                    },
                    {
                        filter: 'trim',
                        options: { start: '10', duration: '5' },
                        inputs: '0',
                        outputs: ['t2'],
                    },
                    {
                        filter: 'setpts',
                        options: 'PTS-STARTPTS',
                        inputs: 't0',
                        outputs: ['t0N'],
                    },
                    {
                        filter: 'setpts',
                        options: 'PTS-STARTPTS',
                        inputs: 't1',
                        outputs: ['t1N'],
                    },
                    {
                        filter: 'setpts',
                        options: 'PTS-STARTPTS',
                        inputs: 't2',
                        outputs: ['t2N'],
                    },
                    {
                        filter: 'setpts',
                        options: '0.5*PTS',
                        inputs: 't1N',
                        outputs: ['t1F'],
                    },
                    {
                        filter: 'setpts',
                        options: '2*PTS',
                        inputs: 't2N',
                        outputs: ['t2S'],
                    },
                    {
                        filter: 'trim',
                        options: { start: '0', duration: '5' },
                        inputs: '0',
                        outputs: ['t0'],
                    },
                    {
                        filter: 'trim',
                        options: { start: '5', duration: '5' },
                        inputs: '0',
                        outputs: ['t1'],
                    },
                    {
                        filter: 'trim',
                        options: { start: '10', duration: '5' },
                        inputs: '0',
                        outputs: ['t2'],
                    },
                    {
                        filter: 'setpts',
                        options: 'PTS-STARTPTS',
                        inputs: 't0',
                        outputs: ['t0N'],
                    },
                    {
                        filter: 'setpts',
                        options: 'PTS-STARTPTS',
                        inputs: 't1',
                        outputs: ['t1N'],
                    },
                    {
                        filter: 'setpts',
                        options: 'PTS-STARTPTS',
                        inputs: 't2',
                        outputs: ['t2N'],
                    },
                    {
                        filter: 'setpts',
                        options: '0.5*PTS',
                        inputs: 't1N',
                        outputs: ['t1F'],
                    },
                    {
                        filter: 'setpts',
                        options: '2*PTS',
                        inputs: 't2N',
                        outputs: ['t2S'],
                    },
                    {
                        filter: 'concat',
                        options: { n: '3' },
                        inputs: ['t0N', 't1F', 't2S'],
                        outputs: ['c0'],
                    },
                    {
                        filter: 'concat',
                        options: { n: '3' },
                        inputs: ['t0N', 't1F', 't2S'],
                        outputs: ['c1'],
                    },
                    {
                        filter: 'reverse',
                        inputs: 'c0',
                        outputs: ['r'],
                    },
                    {
                        filter: 'concat',
                        options: { n: '2' },
                        inputs: ['c1', 'r'],
                        outputs: 'output',
                    },
                    '[output]scale=720:1080[scaled]',
                    {
                        filter: 'framerate',
                        options: { fps: '60' },
                        inputs: ['scaled'],
                        outputs: 'output1',
                    },
                ], 'output1')
                    .outputOptions(['-map 2:0', '-shortest'])
                    .save(`dist/media/${fileName}_1.mp4`)
                    .on('end', () => {
                    setTimeout(() => {
                    }, 300);
                })
                    .on('error', function (err, stdout, stderr) {
                    console.log('Cannot process video: ' + err.message);
                });
            }
            catch (err) {
                console.log('error', err);
            }
        }
        else {
        }
    }
};
__decorate([
    (0, bull_1.Process)('video-job'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], videoConsumer.prototype, "videoTransformeJob", null);
videoConsumer = __decorate([
    (0, bull_1.Processor)('video-queue')
], videoConsumer);
exports.videoConsumer = videoConsumer;
//# sourceMappingURL=media-consumer.js.map