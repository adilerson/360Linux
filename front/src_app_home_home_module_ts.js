(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! capacitor-video-player */ 3935);
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/video.service */ 8472);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/http.service */ 6858);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _services_evento_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/evento-shared.service */ 8819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ 1188);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/event.service */ 9426);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ 6901);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);



/* eslint-disable @typescript-eslint/quotes */

/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */













let HomePage = class HomePage {
    constructor(videoService, changeDetector, http, eventoService, router, storage, toastController, animationCtrl) {
        this.videoService = videoService;
        this.changeDetector = changeDetector;
        this.http = http;
        this.eventoService = eventoService;
        this.router = router;
        this.storage = storage;
        this.toastController = toastController;
        this.animationCtrl = animationCtrl;
        this.isRecording = false;
        this.videos = [];
        this.counter = 1;
        this.camera = 'user';
        this.efeito = 0;
        this.segundos = 12000;
        this.delay = 8;
        this.isReady = false;
        this.showCamera = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
        this.delayStarted = false;
        this.position = 'top';
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const _event = this.storage.get('selectedEvento') || null;
            this.subscription = this.eventoService.currentConfig.subscribe((config) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                //console.log(config);
                //console.log(JSON.stringify(config));
                if (JSON.stringify(config) == null) {
                    //console.log('localStorage')
                    //console.log(_event)
                    if (_event) {
                        this.apiUrl = this.storage.get('apiUrl') || '';
                        this.evento = _event;
                        this.position = _event.position ? _event.position : 'center';
                        console.log(typeof _event.vNormal);
                        console.log(typeof _event.vFast);
                        console.log(typeof _event.vSlow);
                        _event.vNormal = parseInt(_event.vNormal, 10);
                        _event.vFast = parseInt(_event.vFast, 10);
                        _event.vSlow = parseInt(_event.vSlow, 10);
                        this.eventoDetails = {
                            name: _event.nome.replace(/[^A-Z0-9]+/gi, '_'),
                            audio: _event.audioName !== 'null' ? _event.audioName : '',
                            frame: _event.frameName !== 'null' ? _event.frameName : '',
                            vNormal: _event.vNormal,
                            vFast: _event.vFast,
                            vSlow: _event.vSlow,
                        };
                        this.segundos = this.evento.tempo * 1000;
                        if (this.apiUrl.length) {
                            _services_event_service__WEBPACK_IMPORTED_MODULE_8__.EventService.get('apiUrl').emit(this.apiUrl);
                        }
                        //console.log(_event);
                    }
                    else {
                        this.router.navigate(['config']);
                    }
                }
                else {
                    this.evento = config;
                    //console.log(config);
                    this.storage.set('selectedEvento', config);
                    this.position = config.position ? config.position : 'center';
                    //this.camera = this.evento.camera;
                    this.segundos = this.evento.tempo * 1000;
                    console.log(typeof config.vNormal);
                    console.log(typeof config.vFast);
                    console.log(typeof config.vSlow);
                    config.vNormal = parseInt(config.vNormal, 10);
                    config.vFast = parseInt(config.vFast, 10);
                    config.vSlow = parseInt(config.vSlow, 10);
                    this.eventoDetails = {
                        name: config.nome.replace(/[^A-Z0-9]+/gi, '_'),
                        audio: config.audioName !== 'null' ? config.audioName : '',
                        frame: config.frameName !== 'null' ? config.frameName : '',
                        vNormal: config.vNormal,
                        vFast: config.vFast,
                        vSlow: config.vSlow,
                    };
                }
            }));
        });
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.videos = yield this.videoService.loadVideos();
            // Initialise the video player plugin
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isNativePlatform) {
                this.videoPlayer = capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__.CapacitorVideoPlayer;
            }
            else {
                this.videoPlayer = capacitor_video_player__WEBPACK_IMPORTED_MODULE_3__.CapacitorVideoPlayer;
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventoDetails = null;
        this.storage.remove('selectedEvento');
        if (this.stream) {
            this.stream.getTracks().forEach((track) => {
                track.stop();
            });
        }
    }
    changeSegundos(value) {
        //console.log(value);
    }
    pulse() {
        const animation = this.animationCtrl
            .create()
            .addElement(this.delayEffect.nativeElement)
            .duration(1000)
            .fromTo('opacity', '1', '0')
            .iterations(Infinity)
            .keyframes([
            {
                offset: 0,
                transform: 'scale(1.5) ',
                opacity: '0',
                filter: 'blur(10px)',
            },
            {
                offset: 0.5,
                transform: 'scale(0.85) ',
                opacity: '0.75',
                filter: 'blur(5px)',
            },
            {
                offset: 1,
                transform: 'scale(0.4) ',
                opacity: '1',
                filter: 'blur(0)',
            },
        ]);
        animation.play();
    }
    pulseRecord() {
        const animation = this.animationCtrl
            .create()
            .addElement(this.recordEffect.nativeElement)
            .duration(1000)
            .fromTo('opacity', '1', '0')
            .iterations(Infinity)
            .keyframes([
            {
                offset: 0,
                transform: 'scale(1.5) ',
                opacity: '0',
                filter: 'blur(10px)',
            },
            {
                offset: 0.5,
                transform: 'scale(0.85) ',
                opacity: '0.75',
                filter: 'blur(5px)',
            },
            {
                offset: 1,
                transform: 'scale(0.4) ',
                opacity: '1',
                filter: 'blur(0)',
            },
        ]);
        animation.play();
    }
    startVideo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            //console.log(this.segundos);
            this.showCamera = true;
            this.changeDetector.detectChanges();
            // Create a stream of video capturing
            this.stream = yield navigator.mediaDevices.getUserMedia({
                video: {
                    // facingMode: this.camera,
                    width: { ideal: 1080 },
                    height: { ideal: 720 },
                    /*
                    width: { ideal: 4096 },
                    height: { ideal: 2160 },
                    */
                    //user
                    //environment
                    deviceId: this.evento.videoInput.deviceId
                        ? this.evento.videoInput.deviceId
                        : undefined,
                },
                audio: false,
            });
            // Show the stream inside our video object
            this.captureElement.nativeElement.srcObject = this.stream;
            let options;
            if (MediaRecorder.isTypeSupported('video/webm; codecs=vp9')) {
                options = { mimeType: 'video/webm; codecs=vp9' };
            }
            else if (MediaRecorder.isTypeSupported('video/webm')) {
                options = { mimeType: 'video/webm' };
            }
            else if (MediaRecorder.isTypeSupported('video/mp4')) {
                options = { mimeType: 'video/mp4' };
            }
            else {
                console.error("no suitable mimetype found for this device");
            }
            this.mediaRecorder = new MediaRecorder(this.stream, options);
            this.changeDetector.detectChanges();
        });
    }
    delayRecord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.pulse();
            this.delayStarted = true;
            //console.log('delay in');
            this.changeDetector.detectChanges();
            this.intervalDelay = setInterval(() => {
                this.delay--;
                if (this.delay === 0) {
                    //console.log(this.delay);
                    this.recordVideo();
                    this.delay = 8;
                }
                if (this.delay === 2) {
                    this.startGiraGira();
                }
                //console.log('delay in');
                this.changeDetector.detectChanges();
            }, 1000);
        });
    }
    startGiraGira() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.http.startGiraGira();
        });
    }
    recordVideo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            clearInterval(this.intervalDelay);
            this.delayStarted = false;
            this.isRecording = true;
            let chunks = [];
            this.changeDetector.detectChanges();
            this.counter = 0;
            this.interval = setInterval(() => {
                this.counter++;
                this.changeDetector.detectChanges();
            }, 1000);
            setTimeout(() => {
                this.stopRecord();
            }, this.segundos);
            // Store the video on stop
            this.mediaRecorder.onstop = (event) => (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
                const videoBuffer = new Blob(chunks, { type: 'video/mp4' });
                const fileName = dayjs__WEBPACK_IMPORTED_MODULE_9__().format('YYYY-MM-DD_HH_mm_ss') + '.mp4';
                yield this.videoService.storeVideo(videoBuffer);
                const formData = new FormData();
                console.log(fileName);
                formData.append('evento', JSON.stringify(this.eventoDetails));
                formData.append('file', videoBuffer, fileName);
                formData.forEach((res) => {
                    //console.log(res);
                });
                this.http.sendVideo(formData);
                this.mediaRecorder = null;
                this.showCamera = false;
                this.stream = null;
                this.captureElement.nativeElement.srcObject = null;
                // Reload our list
                this.videos = this.videoService.videos;
                this.changeDetector.detectChanges();
                setTimeout(() => {
                    this.http.stopGiraGira();
                }, 1000);
            });
            // Store chunks of recorded video
            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                    chunks.push(event.data);
                }
            };
            // Start recording wth chunks of data
            this.mediaRecorder.start(100);
            this.isRecording = true;
        });
    }
    stopRecord() {
        clearInterval(this.interval);
        this.stream.getTracks().forEach((track) => {
            track.stop();
        });
        this.counter = 1;
        //this.mediaRecorder.stop();
        this.mediaRecorder = null;
        this.captureElement.nativeElement.srcObject = null;
        this.isRecording = false;
        this.changeDetector.detectChanges();
    }
    sendVideo(video) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const realUrl = yield this.videoService.getVideoUrl(video);
            const fileName = new Date().getTime() + '.mp4';
            const videoBuffer = yield this.videoService.DataURIToBlob(realUrl);
            const formData = new FormData();
            formData.append('file', videoBuffer, fileName);
            // formData.append('imagem', img64);
            // formData.append('mp3', audio64.tostring());
            // formData.append('image',imgBuffer,imgFilename)
            this.http.sendVideo(formData);
            //console.log(formData);
        });
    }
    blobToGif(video) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const realUrl = yield this.videoService.getVideoUrl(video);
            const videoBuffer = yield this.videoService.DataURIToBlob(realUrl);
        });
    }
    play(video) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            // Get the video as base64 data
            const realUrl = yield this.videoService.getVideoUrl(video);
            // Show the player fullscreen
            yield this.videoPlayer.initPlayer({
                mode: 'fullscreen',
                url: realUrl,
                playerId: 'fullscreen',
                componentTag: 'app-home',
            });
        });
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    selectVideoSource(event) {
        //console.log(event);
    }
    navBack() {
        if (this.stream) {
            this.stopRecord();
        }
        this.router.navigate(['config']);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_video_service__WEBPACK_IMPORTED_MODULE_4__.VideoService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__.HttpService },
    { type: _services_evento_shared_service__WEBPACK_IMPORTED_MODULE_6__.EventoSharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AnimationController }
];
HomePage.propDecorators = {
    captureElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['video',] }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonModal,] }],
    delayEffect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['delayEffect', { read: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef, static: true },] }],
    recordEffect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['recordEffect', { read: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef, static: true },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 8472:
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoService": () => (/* binding */ VideoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/filesystem */ 1662);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);

/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable new-parens */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */




let VideoService = class VideoService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.videos = [];
        this.VIDEOS_KEY = 'videos';
        this.isReady = false;
        // Helper function
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
    }
    loadVideos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const videoList = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.get({ key: this.VIDEOS_KEY });
            this.videos = JSON.parse(videoList.value) || [];
            return this.videos;
        });
    }
    storeVideo(blob) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const fileName = new Date().getTime() + '.mp4';
            const base64Data = (yield this.convertBlobToBase64(blob));
            const savedFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data,
            });
            // Add file to local array
            this.videos.unshift(savedFile.uri);
            // Write information to storage
            return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_0__.Preferences.set({
                key: this.VIDEOS_KEY,
                value: JSON.stringify(this.videos),
            });
        });
    }
    blobToGif(blob) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            /*   const fileName = new Date().getTime() + '.mp4';
        
            const myFile = new File([blob], fileName, {
              type: blob.type,
            });
        
            this.ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(myFile));
            await this.ffmpeg.run(
              '-i',
              'video.mp4',
              '-filter_complex',
              '[v:0]trim=start=0:duration=5,setpts=PTS-STARTPTS[v0];\
              [v:0]trim=start=5:duration=5,setpts=PTS-STARTPTS[v1];\
              [v:0]trim=start=10:duration=5,setpts=PTS-STARTPTS[v2];\
              [v1]setpts=0.5*PTS[v2f]; \
              [v2]setpts=2*PTS[v3s]; \
              [v0][v2f][v3s]concat=n=3[out];\
              [out]reverse[rv];\
              [v:0]trim=start=0:duration=5,setpts=PTS-STARTPTS[v0];\
              [v:0]trim=start=5:duration=5,setpts=PTS-STARTPTS[v1];\
              [v:0]trim=start=10:duration=5,setpts=PTS-STARTPTS[v2];\
              [v1]setpts=0.5*PTS[v2f]; \
              [v2]setpts=2*PTS[v3s]; \
              [v0][v2f][v3s]concat=n=3[out1];\
              [out1][rv]concat=n=2[final]',
            [v2]reverse[v]' '[sv2]setpts=0.5*PTS[sv2f]',
        
                   '[0:v]reverse[v]',
              '',
              '-map',
              '[final]',
              'output.mp4'
            );*/
            /*
                const gifData = this.ffmpeg.FS('readFile', 'output.mp4');
                // Criando uma URL com dados do gif
                this.gifUrlData = URL.createObjectURL(
                  new Blob([gifData.buffer], { type: 'video/mp4' })
                );
                const pwa = window.open(this.gifUrlData);
            
                if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
                  alert('Please disable your Pop-up blocker and try again.');
                } */
        });
    }
    blobToBase64(blob) {
        return new Promise((resolve, _) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        });
    }
    // Load video as base64 from url
    getVideoUrl(fullPath) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const path = fullPath.substr(fullPath.lastIndexOf('/') + 1);
            const file = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Filesystem.readFile({
                path: path,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_1__.Directory.Data,
            });
            return `data:image/png;base64,${file.data}`;
        });
    }
    DataURIToBlob(dataURI) {
        const splitDataURI = dataURI.split(',');
        const byteString = splitDataURI[0].indexOf('base64') >= 0
            ? atob(splitDataURI[1])
            : decodeURI(splitDataURI[1]);
        const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    }
};
VideoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
VideoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], VideoService);



/***/ }),

/***/ 5099:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorCookies": () => (/* binding */ CapacitorCookies),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorHttp": () => (/* binding */ CapacitorHttp),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/* harmony import */ var E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);


/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = win => {
  const defaultPlatformMap = new Map();
  defaultPlatformMap.set('web', {
    name: 'web'
  });
  const capPlatforms = win.CapacitorPlatforms || {
    currentPlatform: {
      name: 'web'
    },
    platforms: defaultPlatformMap
  };

  const addPlatform = (name, platform) => {
    capPlatforms.platforms.set(name, platform);
  };

  const setPlatform = name => {
    if (capPlatforms.platforms.has(name)) {
      capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
    }
  };

  capPlatforms.addPlatform = addPlatform;
  capPlatforms.setPlatform = setPlatform;
  return capPlatforms;
};

const initPlatforms = win => win.CapacitorPlatforms = createCapacitorPlatforms(win);
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */


const CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */

const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
  var _a;

  const config = webPlugin.config;
  const Plugins = cap.Plugins;

  if (!config || !config.name) {
    // TODO: add link to upgrade guide
    throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
  } // TODO: add link to upgrade guide


  console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);

  if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
    // Add the web plugin into the plugins registry if there already isn't
    // an existing one. If it doesn't already exist, that means
    // there's no existing native implementation for it.
    // - OR -
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    Plugins[config.name] = webPlugin;
  }
};

var ExceptionCode;

(function (ExceptionCode) {
  /**
   * API is not implemented.
   *
   * This usually means the API can't be used because it is not implemented for
   * the current platform.
   */
  ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
  /**
   * API is not available.
   *
   * This means the API can't be used right now because:
   *   - it is currently missing a prerequisite, such as network connectivity
   *   - it requires a particular platform or browser version
   */

  ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

class CapacitorException extends Error {
  constructor(message, code, data) {
    super(message);
    this.message = message;
    this.code = code;
    this.data = data;
  }

}

const getPlatformId = win => {
  var _a, _b;

  if (win === null || win === void 0 ? void 0 : win.androidBridge) {
    return 'android';
  } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
    return 'ios';
  } else {
    return 'web';
  }
};

const createCapacitor = win => {
  var _a, _b, _c, _d, _e;

  const capCustomPlatform = win.CapacitorCustomPlatform || null;
  const cap = win.Capacitor || {};
  const Plugins = cap.Plugins = cap.Plugins || {};
  /**
   * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
   */

  const capPlatforms = win.CapacitorPlatforms;

  const defaultGetPlatform = () => {
    return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
  };

  const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

  const defaultIsNativePlatform = () => getPlatform() !== 'web';

  const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

  const defaultIsPluginAvailable = pluginName => {
    const plugin = registeredPlugins.get(pluginName);

    if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
      // JS implementation available for the current platform.
      return true;
    }

    if (getPluginHeader(pluginName)) {
      // Native implementation available.
      return true;
    }

    return false;
  };

  const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

  const defaultGetPluginHeader = pluginName => {
    var _a;

    return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName);
  };

  const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

  const handleError = err => win.console.error(err);

  const pluginMethodNoop = (_target, prop, pluginName) => {
    return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
  };

  const registeredPlugins = new Map();

  const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
    const registeredPlugin = registeredPlugins.get(pluginName);

    if (registeredPlugin) {
      console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
      return registeredPlugin.proxy;
    }

    const platform = getPlatform();
    const pluginHeader = getPluginHeader(pluginName);
    let jsImplementation;

    const loadPluginImplementation = /*#__PURE__*/function () {
      var _ref = (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!jsImplementation && platform in jsImplementations) {
          jsImplementation = typeof jsImplementations[platform] === 'function' ? jsImplementation = yield jsImplementations[platform]() : jsImplementation = jsImplementations[platform];
        } else if (capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations) {
          jsImplementation = typeof jsImplementations['web'] === 'function' ? jsImplementation = yield jsImplementations['web']() : jsImplementation = jsImplementations['web'];
        }

        return jsImplementation;
      });

      return function loadPluginImplementation() {
        return _ref.apply(this, arguments);
      };
    }();

    const createPluginMethod = (impl, prop) => {
      var _a, _b;

      if (pluginHeader) {
        const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);

        if (methodHeader) {
          if (methodHeader.rtype === 'promise') {
            return options => cap.nativePromise(pluginName, prop.toString(), options);
          } else {
            return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
          }
        } else if (impl) {
          return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
        }
      } else if (impl) {
        return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
      } else {
        throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
      }
    };

    const createPluginMethodWrapper = prop => {
      let remove;

      const wrapper = (...args) => {
        const p = loadPluginImplementation().then(impl => {
          const fn = createPluginMethod(impl, prop);

          if (fn) {
            const p = fn(...args);
            remove = p === null || p === void 0 ? void 0 : p.remove;
            return p;
          } else {
            throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
          }
        });

        if (prop === 'addListener') {
          p.remove = /*#__PURE__*/(0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            return remove();
          });
        }

        return p;
      }; // Some flair ✨


      wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;

      Object.defineProperty(wrapper, 'name', {
        value: prop,
        writable: false,
        configurable: false
      });
      return wrapper;
    };

    const addListener = createPluginMethodWrapper('addListener');
    const removeListener = createPluginMethodWrapper('removeListener');

    const addListenerNative = (eventName, callback) => {
      const call = addListener({
        eventName
      }, callback);

      const remove = /*#__PURE__*/function () {
        var _ref3 = (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const callbackId = yield call;
          removeListener({
            eventName,
            callbackId
          }, callback);
        });

        return function remove() {
          return _ref3.apply(this, arguments);
        };
      }();

      const p = new Promise(resolve => call.then(() => resolve({
        remove
      })));
      p.remove = /*#__PURE__*/(0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        console.warn(`Using addListener() without 'await' is deprecated.`);
        yield remove();
      });
      return p;
    };

    const proxy = new Proxy({}, {
      get(_, prop) {
        switch (prop) {
          // https://github.com/facebook/react/issues/20030
          case '$$typeof':
            return undefined;

          case 'toJSON':
            return () => ({});

          case 'addListener':
            return pluginHeader ? addListenerNative : addListener;

          case 'removeListener':
            return removeListener;

          default:
            return createPluginMethodWrapper(prop);
        }
      }

    });
    Plugins[pluginName] = proxy;
    registeredPlugins.set(pluginName, {
      name: pluginName,
      proxy,
      platforms: new Set([...Object.keys(jsImplementations), ...(pluginHeader ? [platform] : [])])
    });
    return proxy;
  };

  const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

  if (!cap.convertFileSrc) {
    cap.convertFileSrc = filePath => filePath;
  }

  cap.getPlatform = getPlatform;
  cap.handleError = handleError;
  cap.isNativePlatform = isNativePlatform;
  cap.isPluginAvailable = isPluginAvailable;
  cap.pluginMethodNoop = pluginMethodNoop;
  cap.registerPlugin = registerPlugin;
  cap.Exception = CapacitorException;
  cap.DEBUG = !!cap.DEBUG;
  cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

  cap.platform = cap.getPlatform();
  cap.isNative = cap.isNativePlatform();
  return cap;
};

const initCapacitorGlobal = win => win.Capacitor = createCapacitor(win);

const Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */

const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */

const registerWebPlugin = plugin => legacyRegisterWebPlugin(Capacitor, plugin);
/**
 * Base class web plugins should extend.
 */


class WebPlugin {
  constructor(config) {
    this.listeners = {};
    this.windowListeners = {};

    if (config) {
      // TODO: add link to upgrade guide
      console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
      this.config = config;
    }
  }

  addListener(eventName, listenerFunc) {
    var _this = this;

    const listeners = this.listeners[eventName];

    if (!listeners) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
    // go ahead and add it

    const windowListener = this.windowListeners[eventName];

    if (windowListener && !windowListener.registered) {
      this.addWindowListener(windowListener);
    }

    const remove = /*#__PURE__*/function () {
      var _ref5 = (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this.removeListener(eventName, listenerFunc);
      });

      return function remove() {
        return _ref5.apply(this, arguments);
      };
    }();

    const p = Promise.resolve({
      remove
    });
    Object.defineProperty(p, 'remove', {
      value: function () {
        var _ref6 = (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          console.warn(`Using addListener() without 'await' is deprecated.`);
          yield remove();
        });

        return function value() {
          return _ref6.apply(this, arguments);
        };
      }()
    });
    return p;
  }

  removeAllListeners() {
    var _this2 = this;

    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.listeners = {};

      for (const listener in _this2.windowListeners) {
        _this2.removeWindowListener(_this2.windowListeners[listener]);
      }

      _this2.windowListeners = {};
    })();
  }

  notifyListeners(eventName, data) {
    const listeners = this.listeners[eventName];

    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  hasListeners(eventName) {
    return !!this.listeners[eventName].length;
  }

  registerWindowListener(windowEventName, pluginEventName) {
    this.windowListeners[pluginEventName] = {
      registered: false,
      windowEventName,
      pluginEventName,
      handler: event => {
        this.notifyListeners(pluginEventName, event);
      }
    };
  }

  unimplemented(msg = 'not implemented') {
    return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
  }

  unavailable(msg = 'not available') {
    return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
  }

  removeListener(eventName, listenerFunc) {
    var _this3 = this;

    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const listeners = _this3.listeners[eventName];

      if (!listeners) {
        return;
      }

      const index = listeners.indexOf(listenerFunc);

      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
      // remove the window listener


      if (!_this3.listeners[eventName].length) {
        _this3.removeWindowListener(_this3.windowListeners[eventName]);
      }
    })();
  }

  addWindowListener(handle) {
    window.addEventListener(handle.windowEventName, handle.handler);
    handle.registered = true;
  }

  removeWindowListener(handle) {
    if (!handle) {
      return;
    }

    window.removeEventListener(handle.windowEventName, handle.handler);
    handle.registered = false;
  }

}

const WebView = /*#__PURE__*/registerPlugin('WebView');
/******** END WEB VIEW PLUGIN ********/

/******** COOKIES PLUGIN ********/

/**
 * Safely web encode a string value (inspired by js-cookie)
 * @param str The string value to encode
 */

const encode = str => encodeURIComponent(str).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);

class CapacitorCookiesPluginWeb extends WebPlugin {
  setCookie(options) {
    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Safely Encoded Key/Value
        const encodedKey = encode(options.key);
        const encodedValue = encode(options.value); // Clean & sanitize options

        const expires = `; expires=${(options.expires || '').replace('expires=', '')}`; // Default is "; expires="

        const path = (options.path || '/').replace('path=', ''); // Default is "path=/"

        document.cookie = `${encodedKey}=${encodedValue || ''}${expires}; path=${path}`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  deleteCookie(options) {
    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        document.cookie = `${options.key}=; Max-Age=0`;
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearCookies() {
    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cookies = document.cookie.split(';') || [];

        for (const cookie of cookies) {
          document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

  clearAllCookies() {
    var _this4 = this;

    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this4.clearCookies();
      } catch (error) {
        return Promise.reject(error);
      }
    })();
  }

}

const CapacitorCookies = registerPlugin('CapacitorCookies', {
  web: () => new CapacitorCookiesPluginWeb()
}); // UTILITY FUNCTIONS

/**
 * Read in a Blob value and return it as a base64 string
 * @param blob The blob value to convert to a base64 string
 */

const readBlobAsBase64 = /*#__PURE__*/function () {
  var _ref7 = (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result; // remove prefix "data:application/pdf;base64,"

        resolve(base64String.indexOf(',') >= 0 ? base64String.split(',')[1] : base64String);
      };

      reader.onerror = error => reject(error);

      reader.readAsDataURL(blob);
    });
  });

  return function readBlobAsBase64(_x) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Normalize an HttpHeaders map by lowercasing all of the values
 * @param headers The HttpHeaders object to normalize
 */


const normalizeHttpHeaders = (headers = {}) => {
  const originalKeys = Object.keys(headers);
  const loweredKeys = Object.keys(headers).map(k => k.toLocaleLowerCase());
  const normalized = loweredKeys.reduce((acc, key, index) => {
    acc[key] = headers[originalKeys[index]];
    return acc;
  }, {});
  return normalized;
};
/**
 * Builds a string of url parameters that
 * @param params A map of url parameters
 * @param shouldEncode true if you should encodeURIComponent() the values (true by default)
 */


const buildUrlParams = (params, shouldEncode = true) => {
  if (!params) return null;
  const output = Object.entries(params).reduce((accumulator, entry) => {
    const [key, value] = entry;
    let encodedValue;
    let item;

    if (Array.isArray(value)) {
      item = '';
      value.forEach(str => {
        encodedValue = shouldEncode ? encodeURIComponent(str) : str;
        item += `${key}=${encodedValue}&`;
      }); // last character will always be "&" so slice it off

      item.slice(0, -1);
    } else {
      encodedValue = shouldEncode ? encodeURIComponent(value) : value;
      item = `${key}=${encodedValue}`;
    }

    return `${accumulator}&${item}`;
  }, ''); // Remove initial "&" from the reduce

  return output.substr(1);
};
/**
 * Build the RequestInit object based on the options passed into the initial request
 * @param options The Http plugin options
 * @param extra Any extra RequestInit values
 */


const buildRequestInit = (options, extra = {}) => {
  const output = Object.assign({
    method: options.method || 'GET',
    headers: options.headers
  }, extra); // Get the content-type

  const headers = normalizeHttpHeaders(options.headers);
  const type = headers['content-type'] || ''; // If body is already a string, then pass it through as-is.

  if (typeof options.data === 'string') {
    output.body = options.data;
  } // Build request initializers based off of content-type
  else if (type.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams();

    for (const [key, value] of Object.entries(options.data || {})) {
      params.set(key, value);
    }

    output.body = params.toString();
  } else if (type.includes('multipart/form-data')) {
    const form = new FormData();

    if (options.data instanceof FormData) {
      options.data.forEach((value, key) => {
        form.append(key, value);
      });
    } else {
      for (const key of Object.keys(options.data)) {
        form.append(key, options.data[key]);
      }
    }

    output.body = form;
    const headers = new Headers(output.headers);
    headers.delete('content-type'); // content-type will be set by `window.fetch` to includy boundary

    output.headers = headers;
  } else if (type.includes('application/json') || typeof options.data === 'object') {
    output.body = JSON.stringify(options.data);
  }

  return output;
}; // WEB IMPLEMENTATION


class CapacitorHttpPluginWeb extends WebPlugin {
  /**
   * Perform an Http request given a set of options
   * @param options Options to build the HTTP request
   */
  request(options) {
    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const requestInit = buildRequestInit(options, options.webFetchExtra);
      const urlParams = buildUrlParams(options.params, options.shouldEncodeUrlParams);
      const url = urlParams ? `${options.url}?${urlParams}` : options.url;
      const response = yield fetch(url, requestInit);
      const contentType = response.headers.get('content-type') || ''; // Default to 'text' responseType so no parsing happens

      let {
        responseType = 'text'
      } = response.ok ? options : {}; // If the response content-type is json, force the response to be json

      if (contentType.includes('application/json')) {
        responseType = 'json';
      }

      let data;
      let blob;

      switch (responseType) {
        case 'arraybuffer':
        case 'blob':
          blob = yield response.blob();
          data = yield readBlobAsBase64(blob);
          break;

        case 'json':
          data = yield response.json();
          break;

        case 'document':
        case 'text':
        default:
          data = yield response.text();
      } // Convert fetch headers to Capacitor HttpHeaders


      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      return {
        data,
        headers,
        status: response.status,
        url: response.url
      };
    })();
  }
  /**
   * Perform an Http GET request given a set of options
   * @param options Options to build the HTTP request
   */


  get(options) {
    var _this5 = this;

    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5.request(Object.assign(Object.assign({}, options), {
        method: 'GET'
      }));
    })();
  }
  /**
   * Perform an Http POST request given a set of options
   * @param options Options to build the HTTP request
   */


  post(options) {
    var _this6 = this;

    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this6.request(Object.assign(Object.assign({}, options), {
        method: 'POST'
      }));
    })();
  }
  /**
   * Perform an Http PUT request given a set of options
   * @param options Options to build the HTTP request
   */


  put(options) {
    var _this7 = this;

    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this7.request(Object.assign(Object.assign({}, options), {
        method: 'PUT'
      }));
    })();
  }
  /**
   * Perform an Http PATCH request given a set of options
   * @param options Options to build the HTTP request
   */


  patch(options) {
    var _this8 = this;

    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this8.request(Object.assign(Object.assign({}, options), {
        method: 'PATCH'
      }));
    })();
  }
  /**
   * Perform an Http DELETE request given a set of options
   * @param options Options to build the HTTP request
   */


  delete(options) {
    var _this9 = this;

    return (0,E_IONIC_360Linux_videoSpin_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this9.request(Object.assign(Object.assign({}, options), {
        method: 'DELETE'
      }));
    })();
  }

}

const CapacitorHttp = registerPlugin('CapacitorHttp', {
  web: () => new CapacitorHttpPluginWeb()
});
/******** END HTTP PLUGIN ********/



/***/ }),

/***/ 3568:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* binding */ Directory),
/* harmony export */   "Encoding": () => (/* binding */ Encoding),
/* harmony export */   "FilesystemDirectory": () => (/* binding */ FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* binding */ FilesystemEncoding)
/* harmony export */ });
var Directory;

(function (Directory) {
  /**
   * The Documents directory
   * On iOS it's the app's documents directory.
   * Use this directory to store user-generated content.
   * On Android it's the Public Documents folder, so it's accessible from other apps.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */
  Directory["Documents"] = "DOCUMENTS";
  /**
   * The Data directory
   * On iOS it will use the Documents directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["Data"] = "DATA";
  /**
   * The Library directory
   * On iOS it will use the Library directory.
   * On Android it's the directory holding application files.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.1.0
   */

  Directory["Library"] = "LIBRARY";
  /**
   * The Cache directory
   * Can be deleted in cases of low memory, so use this directory to write app-specific files
   * that your app can re-create easily.
   *
   * @since 1.0.0
   */

  Directory["Cache"] = "CACHE";
  /**
   * The external directory
   * On iOS it will use the Documents directory
   * On Android it's the directory on the primary shared/external
   * storage device where the application can place persistent files it owns.
   * These files are internal to the applications, and not typically visible
   * to the user as media.
   * Files will be deleted when the application is uninstalled.
   *
   * @since 1.0.0
   */

  Directory["External"] = "EXTERNAL";
  /**
   * The external storage directory
   * On iOS it will use the Documents directory
   * On Android it's the primary shared/external storage directory.
   * It's not accesible on Android 10 unless the app enables legacy External Storage
   * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
   * in the `AndroidManifest.xml`.
   * It's not accesible on Android 11 or newer.
   *
   * @since 1.0.0
   */

  Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));

var Encoding;

(function (Encoding) {
  /**
   * Eight-bit UCS Transformation Format
   *
   * @since 1.0.0
   */
  Encoding["UTF8"] = "utf8";
  /**
   * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
   * Unicode character set
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["ASCII"] = "ascii";
  /**
   * Sixteen-bit UCS Transformation Format, byte order identified by an
   * optional byte-order mark
   * This encoding is only supported on Android.
   *
   * @since 1.0.0
   */

  Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */


const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */

const FilesystemEncoding = Encoding;

/***/ }),

/***/ 1662:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory),
/* harmony export */   "Encoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding),
/* harmony export */   "Filesystem": () => (/* binding */ Filesystem),
/* harmony export */   "FilesystemDirectory": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory),
/* harmony export */   "FilesystemEncoding": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3568);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4046)).then(m => new m.FilesystemWeb())
});



/***/ }),

/***/ 4970:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 5191:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/preferences/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preferences": () => (/* binding */ Preferences)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4970);

const Preferences = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Preferences', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_preferences_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7333)).then(m => new m.PreferencesWeb())
});



/***/ }),

/***/ 6409:
/*!*********************************************************************!*\
  !*** ./node_modules/capacitor-video-player/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3935:
/*!***************************************************************!*\
  !*** ./node_modules/capacitor-video-player/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorVideoPlayer": () => (/* binding */ CapacitorVideoPlayer)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 6409);

const CapacitorVideoPlayer = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorVideoPlayer', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-video-player_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 9910)).then(m => new m.CapacitorVideoPlayerWeb())
});



/***/ }),

/***/ 6901:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function (t, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  var t = 1e3,
      e = 6e4,
      n = 36e5,
      r = "millisecond",
      i = "second",
      s = "minute",
      u = "hour",
      a = "day",
      o = "week",
      f = "month",
      h = "quarter",
      c = "year",
      d = "date",
      l = "Invalid Date",
      $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      M = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    ordinal: function (t) {
      var e = ["th", "st", "nd", "rd"],
          n = t % 100;
      return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
    }
  },
      m = function (t, e, n) {
    var r = String(t);
    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
  },
      v = {
    s: m,
    z: function (t) {
      var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
      return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
    },
    m: function t(e, n) {
      if (e.date() < n.date()) return -t(n, e);
      var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, f),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), f);
      return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
    },
    a: function (t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    },
    p: function (t) {
      return {
        M: f,
        y: c,
        w: o,
        d: a,
        D: d,
        h: u,
        m: s,
        s: i,
        ms: r,
        Q: h
      }[t] || String(t || "").toLowerCase().replace(/s$/, "");
    },
    u: function (t) {
      return void 0 === t;
    }
  },
      g = "en",
      D = {};

  D[g] = M;

  var p = function (t) {
    return t instanceof _;
  },
      S = function t(e, n, r) {
    var i;
    if (!e) return g;

    if ("string" == typeof e) {
      var s = e.toLowerCase();
      D[s] && (i = s), n && (D[s] = n, i = s);
      var u = e.split("-");
      if (!i && u.length > 1) return t(u[0]);
    } else {
      var a = e.name;
      D[a] = e, i = a;
    }

    return !r && i && (g = i), i || !r && g;
  },
      w = function (t, e) {
    if (p(t)) return t.clone();
    var n = "object" == typeof e ? e : {};
    return n.date = t, n.args = arguments, new _(n);
  },
      O = v;

  O.l = S, O.i = p, O.w = function (t, e) {
    return w(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };

  var _ = function () {
    function M(t) {
      this.$L = S(t.locale, null, !0), this.parse(t);
    }

    var m = M.prototype;
    return m.parse = function (t) {
      this.$d = function (t) {
        var e = t.date,
            n = t.utc;
        if (null === e) return new Date(NaN);
        if (O.u(e)) return new Date();
        if (e instanceof Date) return new Date(e);

        if ("string" == typeof e && !/Z$/i.test(e)) {
          var r = e.match($);

          if (r) {
            var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
            return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
          }
        }

        return new Date(e);
      }(t), this.$x = t.x || {}, this.init();
    }, m.init = function () {
      var t = this.$d;
      this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
    }, m.$utils = function () {
      return O;
    }, m.isValid = function () {
      return !(this.$d.toString() === l);
    }, m.isSame = function (t, e) {
      var n = w(t);
      return this.startOf(e) <= n && n <= this.endOf(e);
    }, m.isAfter = function (t, e) {
      return w(t) < this.startOf(e);
    }, m.isBefore = function (t, e) {
      return this.endOf(e) < w(t);
    }, m.$g = function (t, e, n) {
      return O.u(t) ? this[e] : this.set(n, t);
    }, m.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, m.valueOf = function () {
      return this.$d.getTime();
    }, m.startOf = function (t, e) {
      var n = this,
          r = !!O.u(e) || e,
          h = O.p(t),
          l = function (t, e) {
        var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
        return r ? i : i.endOf(a);
      },
          $ = function (t, e) {
        return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
      },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          v = "set" + (this.$u ? "UTC" : "");

      switch (h) {
        case c:
          return r ? l(1, 0) : l(31, 11);

        case f:
          return r ? l(1, M) : l(0, M + 1);

        case o:
          var g = this.$locale().weekStart || 0,
              D = (y < g ? y + 7 : y) - g;
          return l(r ? m - D : m + (6 - D), M);

        case a:
        case d:
          return $(v + "Hours", 0);

        case u:
          return $(v + "Minutes", 1);

        case s:
          return $(v + "Seconds", 2);

        case i:
          return $(v + "Milliseconds", 3);

        default:
          return this.clone();
      }
    }, m.endOf = function (t) {
      return this.startOf(t, !1);
    }, m.$set = function (t, e) {
      var n,
          o = O.p(t),
          h = "set" + (this.$u ? "UTC" : ""),
          l = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],
          $ = o === a ? this.$D + (e - this.$W) : e;

      if (o === f || o === c) {
        var y = this.clone().set(d, 1);
        y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
      } else l && this.$d[l]($);

      return this.init(), this;
    }, m.set = function (t, e) {
      return this.clone().$set(t, e);
    }, m.get = function (t) {
      return this[O.p(t)]();
    }, m.add = function (r, h) {
      var d,
          l = this;
      r = Number(r);

      var $ = O.p(h),
          y = function (t) {
        var e = w(l);
        return O.w(e.date(e.date() + Math.round(t * r)), l);
      };

      if ($ === f) return this.set(f, this.$M + r);
      if ($ === c) return this.set(c, this.$y + r);
      if ($ === a) return y(1);
      if ($ === o) return y(7);
      var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
          m = this.$d.getTime() + r * M;
      return O.w(m, this);
    }, m.subtract = function (t, e) {
      return this.add(-1 * t, e);
    }, m.format = function (t) {
      var e = this,
          n = this.$locale();
      if (!this.isValid()) return n.invalidDate || l;

      var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = O.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          f = n.months,
          h = function (t, n, i, s) {
        return t && (t[n] || t(e, r)) || i[n].slice(0, s);
      },
          c = function (t) {
        return O.s(s % 12 || 12, t, "0");
      },
          d = n.meridiem || function (t, e, n) {
        var r = t < 12 ? "AM" : "PM";
        return n ? r.toLowerCase() : r;
      },
          $ = {
        YY: String(this.$y).slice(-2),
        YYYY: this.$y,
        M: a + 1,
        MM: O.s(a + 1, 2, "0"),
        MMM: h(n.monthsShort, a, f, 3),
        MMMM: h(f, a),
        D: this.$D,
        DD: O.s(this.$D, 2, "0"),
        d: String(this.$W),
        dd: h(n.weekdaysMin, this.$W, o, 2),
        ddd: h(n.weekdaysShort, this.$W, o, 3),
        dddd: o[this.$W],
        H: String(s),
        HH: O.s(s, 2, "0"),
        h: c(1),
        hh: c(2),
        a: d(s, u, !0),
        A: d(s, u, !1),
        m: String(u),
        mm: O.s(u, 2, "0"),
        s: String(this.$s),
        ss: O.s(this.$s, 2, "0"),
        SSS: O.s(this.$ms, 3, "0"),
        Z: i
      };

      return r.replace(y, function (t, e) {
        return e || $[t] || i.replace(":", "");
      });
    }, m.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, m.diff = function (r, d, l) {
      var $,
          y = O.p(d),
          M = w(r),
          m = (M.utcOffset() - this.utcOffset()) * e,
          v = this - M,
          g = O.m(this, M);
      return g = ($ = {}, $[c] = g / 12, $[f] = g, $[h] = g / 3, $[o] = (v - m) / 6048e5, $[a] = (v - m) / 864e5, $[u] = v / n, $[s] = v / e, $[i] = v / t, $)[y] || v, l ? g : O.a(g);
    }, m.daysInMonth = function () {
      return this.endOf(f).$D;
    }, m.$locale = function () {
      return D[this.$L];
    }, m.locale = function (t, e) {
      if (!t) return this.$L;
      var n = this.clone(),
          r = S(t, e, !0);
      return r && (n.$L = r), n;
    }, m.clone = function () {
      return O.w(this.$d, this);
    }, m.toDate = function () {
      return new Date(this.valueOf());
    }, m.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }, m.toISOString = function () {
      return this.$d.toISOString();
    }, m.toString = function () {
      return this.$d.toUTCString();
    }, M;
  }(),
      T = _.prototype;

  return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {
    T[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), w.extend = function (t, e) {
    return t.$i || (t(e, _, w), t.$i = !0), w;
  }, w.locale = S, w.isDayjs = p, w.unix = function (t) {
    return w(1e3 * t);
  }, w.en = D[g], w.Ls = D, w.p = {}, w;
});

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.video {\n  width: 100%;\n  height: 100%;\n}\n\n.icon {\n  position: fixed;\n  left: 40%;\n  top: 40%;\n  min-height: 7rem;\n  color: white;\n  text-shadow: 1px 1px 5px black;\n}\n\n.footer {\n  background: #272727 !important;\n  width: 100%;\n}\n\n.position-top {\n  top: 5%;\n}\n\n.position-center {\n  top: 40%;\n}\n\n.position-bottom {\n  top: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBRkY7O0FBSUM7RUFDQyw4QkFBQTtFQUNBLFdBQUE7QUFERjs7QUFPQTtFQUNFLE9BQUE7QUFKRjs7QUFNQTtFQUNFLFFBQUE7QUFIRjs7QUFNQTtFQUNFLFFBQUE7QUFIRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi52aWRlbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDQwJTtcclxuICB0b3A6IDQwJTtcclxuICBtaW4taGVpZ2h0OiA3cmVtO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcclxuIH1cclxuIC5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzI3MjcyNyAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG5cclxuXHJcblxyXG5cclxuLnBvc2l0aW9uLXRvcHtcclxuICB0b3A6NSVcclxufVxyXG4ucG9zaXRpb24tY2VudGVye1xyXG4gIHRvcDo0MCVcclxufVxyXG5cclxuLnBvc2l0aW9uLWJvdHRvbXtcclxuICB0b3A6ODAlXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-button *ngIf=\"!showCamera\" (click)=\"navBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" >\r\n <!--      <ion-button id=\"open-modal-config\" *ngIf=\"!showCamera\">\r\n        <ion-icon name=\"cog-outline\"></ion-icon>\r\n      </ion-button> -->\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\"> ({{evento.nome}}) </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n\r\n\r\n  <ion-chip\r\n\r\n    style=\"z-index: 999; font-size: 7rem; background:none; margin-top: 2rem;\"\r\n    [hidden]=\"!isRecording || counter === 0\"\r\n    class=\"icon\"\r\n    #recordEffect\r\n    [ngClass]=\"position === 'top'?'position-top':position === 'center'?'position-center':'position-bottom'\"\r\n    >{{counter}}</ion-chip\r\n  >\r\n   <!--  -->\r\n  <!-- Display the video stream while capturing -->\r\n  <video\r\n    class=\"video\"\r\n    #video\r\n    autoplay\r\n    playsinline\r\n    muted\r\n    [hidden]=\"!showCamera\"\r\n    width=\"100%\"\r\n    height=\"100%\"\r\n  ></video>\r\n\r\n  <!--  [style.color]=\"position === 'top'?'red':'white'\" alterar status de color das letras-->\r\n\r\n  <ion-chip\r\n    style=\"z-index: 999; font-size: 7rem; background: none; margin-top: 2.5rem;\"\r\n\r\n    class=\"icon\"\r\n    [hidden]=\"delay===8\"\r\n    [ngClass]=\"position === 'top'?'position-top':position === 'center'?'position-center':'position-bottom'\"\r\n    #delayEffect\r\n    >{{delay}}</ion-chip\r\n  >\r\n\r\n  <!-- Neccessary for the video player -->\r\n  <div id=\"fullscreen\" slot=\"fixed\"></div>\r\n\r\n  <!--\r\n  <ion-list *ngIf=\"!isRecording\" style=\"margin-top: 50px;\">\r\n    <ion-item *ngFor=\"let video of videos;\"  tappable>\r\n      <ion-label slot=\"start\" (click)=\"play(video)\">    {{ video }}</ion-label>\r\n\r\n      <ion-icon slot=\"end\" name=\"cloud-upload-outline\" (click)=\"sendVideo(video)\"></ion-icon>\r\n\r\n    </ion-item>\r\n  </ion-list>\r\n  -->\r\n\r\n  <ion-fab\r\n    [vertical]=\"position\"\r\n    horizontal=\"center\"\r\n    slot=\"fixed\"\r\n    style=\"zoom: 2;\"\r\n    [hidden]=\"isRecording\"\r\n    *ngIf=\"delay === 8 && showCamera === false\"\r\n  >\r\n    <ion-fab-button color=\"new\" (click)=\"startVideo()\">\r\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <ng-container >\r\n\r\n  </ng-container>\r\n  <ion-fab\r\n    [vertical]=\"position\"\r\n    horizontal=\"center\"\r\n    slot=\"fixed\"\r\n    style=\"zoom: 2;\"\r\n\r\n    id=\"contagem\"\r\n    [hidden]=\"isRecording\"\r\n    *ngIf=\"delay === 8 && showCamera === true\"\r\n  >\r\n    <ion-fab-button (click)=\"isRecording ? stopRecord() : delayRecord()\" *ngIf=\"!delayStarted\"\r\n    >\r\n      <ion-icon [name]=\"isRecording ? 'stop' : 'videocam'\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-modal trigger=\"open-modal-config\">\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"cancel()\">Fechar</ion-button>\r\n          </ion-buttons>\r\n          <ion-title>Configuração</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"ion-padding\">\r\n        <div>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label>Config. Tempo</ion-label>\r\n              <ion-select\r\n                placeholder=\"Tempo\"\r\n                id=\"segundos\"\r\n                [(ngModel)]=\"segundos\"\r\n              >\r\n                <ion-select-option value=\"15000\">15 seg</ion-select-option>\r\n                <ion-select-option value=\"12000\">12 seg</ion-select-option>\r\n                <ion-select-option value=\"10000\">10 seg</ion-select-option>\r\n                <ion-select-option value=\"7000\">7 seg</ion-select-option>\r\n                <ion-select-option value=\"5000\">5 seg</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label>Config. Efeitos</ion-label>\r\n              <ion-select placeholder=\"Efeito\" id=\"efeito\" [(ngModel)]=\"efeito\">\r\n                <ion-select-option value=\"0\">Mix</ion-select-option>\r\n                <ion-select-option value=\"1\">Boomerang</ion-select-option>\r\n                <ion-select-option value=\"2\">SlowMotion</ion-select-option>\r\n                <ion-select-option value=\"3\">Nenhum</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n\r\n          <!--   <ion-item>\r\n              <ion-label>Entrada de Video</ion-label>\r\n              <ion-select\r\n                placeholder=\"Video\"\r\n                id=\"Video\"\r\n\r\n              >\r\n                <ion-select-option\r\n                (change)='selectVideoSource($event)'\r\n                  [value]=\"video\"\r\n                  *ngFor=\"let video  of videoDevices\"\r\n                  >{{video.label}}</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label>Config. Câmera</ion-label>\r\n              <ion-select placeholder=\"Câmera\" id=\"camera\" [(ngModel)]=\"camera\">\r\n                <ion-select-option value=\"environment\"\r\n                  >Traseira</ion-select-option\r\n                >\r\n                <ion-select-option value=\"user\" selected\r\n                  >Frontal</ion-select-option\r\n                >\r\n              </ion-select>\r\n            </ion-item> -->\r\n          </ion-list>\r\n        </div>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-label>\r\n      <p>Tempo : {{evento.tempo}} seg</p>\r\n      <p>Câmera : {{evento.videoInput.label}}</p>\r\n    </ion-label>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map