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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
let supportedFiles = ['mp4', 'mov', 'm4v'];
let MediaService = class MediaService {
    constructor() {
        this.files = [];
        this.fileTxt = [];
        this.canEdit = true;
        this.getFileExtension = (file) => {
            let fileName = file.originalname;
            return file.split('.').pop();
        };
        this.getFileNameWithoutExtension = (file) => {
            return file.split('.').slice(0, -1).join('.');
        };
        this.interval = setInterval(() => {
            const dirCont = fs.readdirSync('tmp');
            this.files = dirCont.filter((file) => file.match(new RegExp(`.*\.(mp4)`, 'ig')));
            this.fileTxt = dirCont.filter((file) => file.match(new RegExp(`.*\.(txt)`, 'ig')));
            if (this.files.length > 0 && this.fileTxt.length > 0) {
                if (this.canEdit) {
                    console.log(this.files);
                    this.converMedia(this.files[0]);
                }
            }
        }, 2000);
    }
    async fileUpload(req, res, file) {
        let fileName = this.getFileNameWithoutExtension(file.originalname);
        fs.appendFile(`tmp/${fileName}.txt`, req.body.evento, () => { });
        return res.status(201).json('OK');
    }
    async converMedia(file) {
        if (supportedFiles.includes(this.getFileExtension(file))) {
            this.canEdit = false;
            try {
                let fileName = this.getFileNameWithoutExtension(file);
                let fileConfig;
                let audioConfig = false;
                let frameConfig = false;
                let folder = '';
                try {
                    fileConfig = JSON.parse(fs.readFileSync(`tmp/${fileName}.txt`, 'utf8'));
                }
                catch (error) {
                    fs.rename(`tmp/${file}`, `tmp1/err_${file}`, (err) => console.log(err));
                    this.interval.clear();
                    this.interval = setInterval(() => {
                        const dirCont = fs.readdirSync('tmp');
                        this.files = dirCont.filter((file) => file.match(new RegExp(`.*\.(mp4)`, 'ig')));
                        if (this.files.length > 0) {
                            if (this.canEdit) {
                                console.log(this.files);
                                this.converMedia(this.files[0]);
                            }
                        }
                    }, 2000);
                    return;
                }
                if (fileConfig) {
                    if (fs.existsSync(`dist/${fileConfig.name}`)) {
                        folder = `dist/${fileConfig.name}`;
                    }
                    else {
                        await fs.promises.mkdir(`dist/${fileConfig.name}`).then((e) => {
                            console.log('Criou a pasta');
                            folder = `dist/${fileConfig.name}`;
                        });
                    }
                }
                else
                    [
                        folder = `dist/media`
                    ];
                console.log('fodler: ' + folder);
                console.log(fileConfig);
                let output = 'output1';
                var command = ffmpeg();
                command.input(`tmp/${file}`).format('mp4');
                if (fs.existsSync(`config/audio`)) {
                    if (fs.existsSync(`config/audio/audio.mp3`)) {
                        audioConfig = true;
                        command.input(`config/audio/audio.mp3`);
                    }
                }
                if (fs.existsSync(`config/frame`)) {
                    if (fs.existsSync(`config/frame/frame.png`)) {
                        frameConfig = true;
                        command.input(`config/frame/frame.png`);
                    }
                }
                if (frameConfig) {
                    output = 'output2';
                    command.complexFilter([
                        {
                            filter: 'trim',
                            options: { start: '0', duration: fileConfig.vNormal },
                            inputs: '0:v',
                            outputs: ['t0'],
                        },
                        {
                            filter: 'trim',
                            options: {
                                start: fileConfig.vNormal,
                                duration: fileConfig.vSlow,
                            },
                            inputs: '0',
                            outputs: ['t1'],
                        },
                        {
                            filter: 'trim',
                            options: {
                                start: fileConfig.vNormal + fileConfig.vSlow,
                                duration: fileConfig.vFast,
                            },
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
                            options: '1.5*PTS',
                            inputs: 't2N',
                            outputs: ['t2S'],
                        },
                        {
                            filter: 'trim',
                            options: { start: '0', duration: fileConfig.vNormal },
                            inputs: '0:v',
                            outputs: ['t0'],
                        },
                        {
                            filter: 'trim',
                            options: {
                                start: fileConfig.vNormal,
                                duration: fileConfig.vSlow,
                            },
                            inputs: '0',
                            outputs: ['t1'],
                        },
                        {
                            filter: 'trim',
                            options: {
                                start: fileConfig.vNormal + fileConfig.vSlow,
                                duration: fileConfig.vFast,
                            },
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
                            options: '1.5*PTS',
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
                        {
                            filter: 'overlay',
                            options: { x: '0', y: '0' },
                            inputs: ['output1'],
                            outputs: ['output2'],
                        },
                    ], output);
                    if (audioConfig) {
                        command.outputOptions(['-map 1:0', '-shortest']);
                    }
                }
                else {
                    command.complexFilter([
                        {
                            filter: 'trim',
                            options: { start: '0', duration: fileConfig.vNormal },
                            inputs: '0:v',
                            outputs: ['t0'],
                        },
                        {
                            filter: 'trim',
                            options: {
                                start: fileConfig.vNormal,
                                duration: fileConfig.vSlow,
                            },
                            inputs: '0',
                            outputs: ['t1'],
                        },
                        {
                            filter: 'trim',
                            options: {
                                start: fileConfig.vNormal + fileConfig.vSlow,
                                duration: fileConfig.vFast,
                            },
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
                            options: '1.5*PTS',
                            inputs: 't2N',
                            outputs: ['t2S'],
                        },
                        {
                            filter: 'trim',
                            options: { start: '0', duration: fileConfig.vNormal },
                            inputs: '0:v',
                            outputs: ['t0'],
                        },
                        {
                            filter: 'trim',
                            options: {
                                start: fileConfig.vNormal,
                                duration: fileConfig.vSlow,
                            },
                            inputs: '0',
                            outputs: ['t1'],
                        },
                        {
                            filter: 'trim',
                            options: {
                                start: fileConfig.vNormal + fileConfig.vSlow,
                                duration: fileConfig.vFast,
                            },
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
                            options: '1.5*PTS',
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
                    ], output);
                    if (audioConfig) {
                        command.outputOptions(['-map 1:0', '-shortest']);
                    }
                }
                command
                    .save(`${folder}/${fileName}_1.mp4`)
                    .on('end', () => {
                    this.createThumb(folder, fileName);
                    this.moveFile(file, 'tmp1');
                })
                    .on('error', function (err, stdout, stderr) {
                    fs.rename(`tmp/${file}`, `tmp1/err_${file}`, (err) => console.log(err));
                    const config = this.getFileNameWithoutExtension(file);
                    fs.rename(`tmp/${config}.txt`, `tmp1/err_${config}.txt`, (err) => console.log(err));
                    console.log('Cannot process video: ' + err.message);
                    this.canEdit = true;
                });
            }
            catch (err) {
                console.log('error', err);
                fs.rename(`tmp/${file}`, `tmp1/err_${file}`, (err) => console.log(err));
                const config = this.getFileNameWithoutExtension(file);
                fs.rename(`tmp/${config}.txt`, `tmp1/err_${config}.txt`, (err) => console.log(err));
                this.canEdit = true;
            }
        }
        else {
        }
    }
    createThumb(folder, fileName) {
        var command1 = ffmpeg();
        command1.input(`${folder}/${fileName}_1.mp4`);
        command1.screenshots({
            timestamps: ['1'],
            filename: `${fileName}_1.jpg`,
            folder: folder,
        });
    }
    moveFile(name, path) {
        console.log(name);
        const config = this.getFileNameWithoutExtension(name);
        fs.rename(`tmp/${name}`, `${path}/${name}`, (err) => console.log(err));
        fs.rename(`tmp/${config}.txt`, `${path}/${config}.txt`, (err) => console.log(err));
        this.canEdit = true;
    }
};
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], MediaService.prototype, "fileUpload", null);
MediaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MediaService);
exports.MediaService = MediaService;
//# sourceMappingURL=media.service.js.map