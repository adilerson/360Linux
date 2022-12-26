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
exports.ComandoController = void 0;
const common_1 = require("@nestjs/common");
const comando_service_1 = require("./comando.service");
let ComandoController = class ComandoController {
    constructor(comandoService) {
        this.comandoService = comandoService;
    }
    async startSocket(body, query) {
        console.log(typeof query.status);
        if (query.status == '1') {
            this.comandoService.startGiraGira();
        }
        return true;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ComandoController.prototype, "startSocket", null);
ComandoController = __decorate([
    (0, common_1.Controller)('comando'),
    __metadata("design:paramtypes", [comando_service_1.ComandoService])
], ComandoController);
exports.ComandoController = ComandoController;
//# sourceMappingURL=comando.controller.js.map