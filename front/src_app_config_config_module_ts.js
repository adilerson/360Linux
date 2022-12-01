"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_config_config_module_ts"],{

/***/ 5768:
/*!*************************************************!*\
  !*** ./src/app/config/config-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPageRoutingModule": () => (/* binding */ ConfigPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.page */ 8756);




const routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_0__.ConfigPage
    }
];
let ConfigPageRoutingModule = class ConfigPageRoutingModule {
};
ConfigPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigPageRoutingModule);



/***/ }),

/***/ 4726:
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPageModule": () => (/* binding */ ConfigPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-routing.module */ 5768);
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.page */ 8756);







let ConfigPageModule = class ConfigPageModule {
};
ConfigPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _config_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigPageRoutingModule
        ],
        declarations: [_config_page__WEBPACK_IMPORTED_MODULE_1__.ConfigPage]
    })
], ConfigPageModule);



/***/ }),

/***/ 8756:
/*!***************************************!*\
  !*** ./src/app/config/config.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPage": () => (/* binding */ ConfigPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.page.html?ngResource */ 6751);
/* harmony import */ var _config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.page.scss?ngResource */ 7544);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/http.service */ 6858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/event.service */ 9426);
/* harmony import */ var _services_evento_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/evento-shared.service */ 8819);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ 1188);



/* eslint-disable arrow-body-style */

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/member-ordering */







let ConfigPage = class ConfigPage {
    constructor(storage, formBuilder, actionSheetCtrl, alertController, eventoService, toastController, router, http) {
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertController = alertController;
        this.eventoService = eventoService;
        this.toastController = toastController;
        this.router = router;
        this.http = http;
        this.message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
        this.isSubmitted = false;
        this.eventos = [];
        this.apiUrl = '';
        this.videoDevices = [];
    }
    ngOnInit() {
        this.configForm = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            tempo: ['7', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            // frameName: [''],
            //  audioName: [''],
            data: [''],
            videoInput: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            vNormal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            vSlow: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            vFast: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            position: ['']
        });
        this.eventos = this.storage.get('eventos') || [];
        this.apiUrl = this.storage.get('apiUrl') || '';
        console.log(this.apiUrl);
        console.log(this.http.url);
        if (this.apiUrl.length) {
            _services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService.get('apiUrl').emit(this.apiUrl);
        }
    }
    ionViewDidEnter() {
        setTimeout(() => {
            console.log(new Date().toISOString());
            this.errorControl.data.setValue(new Date().toISOString());
        }, 1000);
        console.log(this.getDevices());
    }
    get errorControl() {
        return this.configForm.controls;
    }
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(this.name, 'confirm');
    }
    onWillDismiss(event) {
        const ev = event;
        if (ev.detail.role === 'confirm') {
            this.message = `Hello, ${ev.detail.data}!`;
        }
    }
    salvaEvento(config) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const totalTempo = config.vNormal + config.vFast + config.vSlow;
            const tempo = config.tempo;
            console.log(tempo);
            if (totalTempo !== parseFloat(tempo)) {
                const toast = yield this.toastController.create({
                    message: 'O tempo dos efeitos não podem ser maior nem menor que o tempo de gravação',
                    duration: 3000,
                    position: 'bottom',
                    color: 'danger',
                });
                yield toast.present();
                return;
            }
            this.isSubmitted = true;
            console.log(config);
            this.eventos.push(config);
            this.guardaEventos();
            this.configForm.reset();
            this.modal.dismiss();
        });
    }
    eventoActionSheet(evento, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Opções do Evento',
                mode: 'ios',
                subHeader: evento.nome,
                buttons: [
                    {
                        text: 'Carregar Evento',
                        handler: () => {
                            this.setConfig(evento);
                        },
                    },
                    {
                        text: 'Visualizar Evento',
                        handler: () => {
                            this.seeEvento(evento);
                        },
                    },
                    {
                        text: 'Deletar',
                        role: 'destructive',
                        handler: () => {
                            this.deleteEvento(index);
                        },
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        data: {
                            action: 'cancel',
                        },
                    },
                ],
            });
            yield actionSheet.present();
            const result = yield actionSheet.onDidDismiss();
            this.result = JSON.stringify(result, null, 2);
        });
    }
    deleteEvento(i) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Deseja realmente Deletar o evento?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => { },
                    },
                    {
                        text: 'Sim',
                        role: 'confirm',
                        handler: () => {
                            this.eventos.splice(i, 1);
                            this.guardaEventos();
                        },
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    guardaEventos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.storage.set('eventos', this.eventos);
            setTimeout(() => {
                this.eventos = this.storage.get('eventos') || [];
            }, 100);
        });
    }
    setConfig(config) {
        this.eventoService.setConfig(config);
        this.router.navigate(['/home']);
    }
    seeEvento(evento) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: `Nome:${evento.nome},  Gravação: ${evento.tempo} seg`,
                subHeader: `${evento.frameName ? 'Frame: ' + evento.frameName : ''} ${evento.audioName ? ', Audio: ' + evento.audioName : ''}  ${evento.camera === 'user' ? ', Câmera: Frontal' : ', Câmera: Traseira'}`,
                buttons: [
                    {
                        text: 'Fechar',
                        role: 'cancel',
                        handler: () => { },
                    },
                ],
            });
            yield alert.present();
        });
    }
    configUrltAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Digite a url do servidor',
                subHeader: 'ex: http://localhost:3000',
                buttons: ['OK'],
                inputs: [
                    {
                        placeholder: 'URL',
                        value: `${this.apiUrl ? this.apiUrl : ''}`,
                        handler: (res) => {
                            console.log(res);
                        },
                    },
                ],
            });
            yield alert.present();
            alert.onWillDismiss().then((res) => {
                var _a;
                if ((_a = res.data) === null || _a === void 0 ? void 0 : _a.values[0]) {
                    this.apiUrl = res.data.values[0];
                    this.storage.set('apiUrl', res.data.values[0]);
                    _services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService.get('apiUrl').emit(res.data.values[0]);
                }
            });
        });
    }
    getDevices() {
        this.videoDevices = [];
        // AFAICT in Safari this only gets default devices until gUM is called :/
        navigator.mediaDevices
            .getUserMedia({
            video: {
                width: { ideal: 1080 },
                height: { ideal: 720 },
            },
        })
            .then((stream) => {
            navigator.mediaDevices.enumerateDevices().then((res) => {
                res.forEach((element) => {
                    console.log(element);
                    if (element.kind === 'videoinput' && element.deviceId) {
                        this.videoDevices.push(element);
                    }
                });
            });
            setTimeout(() => {
                stream.getTracks().forEach((track) => {
                    track.stop();
                });
            }, 200);
        });
    }
};
ConfigPage.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _services_evento_shared_service__WEBPACK_IMPORTED_MODULE_4__.EventoSharedService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService }
];
ConfigPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonModal,] }],
    dateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonDatetime,] }]
};
ConfigPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-config',
        template: _config_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_config_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfigPage);



/***/ }),

/***/ 7544:
/*!****************************************************!*\
  !*** ./src/app/config/config.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".error {\n  font-size: small;\n  color: red;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNvbmZpZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3J7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 6751:
/*!****************************************************!*\
  !*** ./src/app/config/config.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Evento </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"configUrltAlert()\">\n        <ion-icon name=\"options-sharp\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button id=\"open-modal\">\n      <ion-icon name=\"add\"></ion-icon> </ion-fab-button\n  ></ion-fab>\n\n  <h1 class=\"ion-padding\">Eventos Cadastrados</h1>\n\n  <ng-container *ngFor=\"let evento of eventos; let i = index\">\n    <ion-item (click)=\"eventoActionSheet(evento,i)\" button>\n      <ion-label>\n        <h3>{{evento.nome}}</h3>\n        <p>{{evento.data |date:'dd/MM/YYYY HH:mm'}}</p>\n      </ion-label>\n    </ion-item>\n  </ng-container>\n\n  <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button (click)=\"cancel()\">Cancelar</ion-button>\n          </ion-buttons>\n          <ion-title>Evento</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button\n              (click)=\"salvaEvento(configForm.value)\"\n              [strong]=\"true\"\n              [disabled]=\"!configForm.valid\"\n              >Salvar</ion-button\n            >\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <h1 class=\"ion-padding\">Configuração do Evento</h1>\n\n        <form [formGroup]=\"configForm\">\n          <ion-item>\n            <ion-label position=\"stacked\">Nome do Evento</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Evento\"\n              formControlName=\"nome\"\n              required\n            ></ion-input>\n          </ion-item>\n          <span\n            class=\"error\"\n            *ngIf=\"isSubmitted && errorControl.nome.errors?.required\"\n          >\n            O nome é obrigatório.\n          </span>\n          <hr />\n          <ion-item>\n            <ion-label>Tempo de gravação</ion-label>\n            <ion-select\n              #tempoGrav\n              placeholder=\"Tempo de gravação\"\n              formControlName=\"tempo\"\n              required\n            >\n              <ion-select-option value=\"5\">5 segundos</ion-select-option>\n\n              <ion-select-option value=\"10\" selected\n                >10 segundos</ion-select-option\n              >\n              <ion-select-option value=\"12\">12 segundos</ion-select-option>\n              <ion-select-option value=\"15\">15 segundos</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <hr />\n          <h4>Tempo dos efeitos</h4>\n\n          <ion-item>\n            <ion-label>Tempo velocidade normal: </ion-label>\n            <ion-input\n              type=\"number\"\n              style=\"text-align: right\"\n              formControlName=\"vNormal\"\n            ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Tempo velocidade fast: </ion-label>\n            <ion-input\n              type=\"number\"\n              style=\"text-align: right\"\n              formControlName=\"vFast\"\n            ></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Tempo velocidade slow: </ion-label>\n            <ion-input\n              type=\"number\"\n              style=\"text-align: right\"\n              formControlName=\"vSlow\"\n            ></ion-input>\n          </ion-item>\n\n          <hr />\n\n          <!--    <ion-item>\n            <ion-label>Posição da câmera</ion-label>\n            <ion-select\n              placeholder=\"Câmera\"\n              id=\"camera\"\n              formControlName=\"camera\"\n              required\n            >\n              <ion-select-option value=\"environment\"\n                >Traseira</ion-select-option\n              >\n              <ion-select-option value=\"user\" selected\n                >Frontal</ion-select-option\n              >\n            </ion-select>\n          </ion-item>\n          <span\n            class=\"error\"\n            *ngIf=\"isSubmitted && errorControl.nome.errors?.required\"\n          >\n            A câmera é obrigatória.\n          </span> -->\n          <!--     <hr />\n\n          <ion-item>\n            <ion-label position=\"stacked\">Nome da imagem do Frame</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Frame\"\n              formControlName=\"frameName\"\n            ></ion-input>\n          </ion-item>\n\n          <hr />\n\n          <ion-item>\n            <ion-label position=\"stacked\">Nome do audio do evento</ion-label>\n            <ion-input\n              type=\"text\"\n              placeholder=\"Audio\"\n              formControlName=\"audioName\"\n            ></ion-input>\n          </ion-item> -->\n\n          <hr />\n\n          <ion-item>\n            <ion-label>Entrada de Video</ion-label>\n            <ion-select\n              placeholder=\"Video\"\n              id=\"Video\"\n              formControlName=\"videoInput\"\n              required\n            >\n              <ion-select-option\n                [value]=\"video\"\n                *ngFor=\"let video  of videoDevices; let i = index\"\n                >{{video.label?video.label:'Default Video '+i}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Posição dos Avisos</ion-label>\n            <ion-select\n              #tempoGrav\n              formControlName=\"position\"\n              required\n            >\n              <ion-select-option value=\"top\">Top</ion-select-option>\n\n              <ion-select-option value=\"center\" selected\n                >Center</ion-select-option\n              >\n              <ion-select-option value=\"bottom\">Bottom</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label\n              >Data do Evento\n              <ion-datetime-button\n                datetime=\"datetime\"\n                mode=\"ios\"\n                class=\"ion-padding\"\n              ></ion-datetime-button>\n\n              <ion-modal [keepContentsMounted]=\"true\">\n                <ng-template>\n                  <ion-datetime\n                    id=\"datetime\"\n                    prefer-wheel=\"”true”\"\n                    formControlName=\"data\"\n                  ></ion-datetime>\n                </ng-template>\n              </ion-modal>\n            </ion-label>\n          </ion-item>\n        </form>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <p *ngIf=\"http.url\">Servidor: {{http.url}}</p>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_config_config_module_ts.js.map