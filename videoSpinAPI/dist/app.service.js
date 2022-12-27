"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return '<link href="https://192.168.36.36/360Linux/360/css/style.css" rel="stylesheet"><h1 style="display:flex; flex-direction: column; padding-top: 10rem; justify-content: center; font-size:2.5rem;width: 100%;text-align: center;"><a href="https://192.168.36.36/360Linux/front" class="btn" style="font-size: 2.5rem; padding: 3rem 0rem;margin-bottom: 4rem;">Celular Plataforma</a><a href="https://192.168.36.36/360Linux/360/startCell.php" class="btn" style="font-size: 2.5rem;     margin-bottom: 4rem;">Celular Start</a></h1>';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map