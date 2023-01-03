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
        return `<meta name="viewport" content="width=device-width, initial-scale=1.0"><style>html, body{background-color:#373e46 !important;}</style><h1 style="display: flex;flex-direction: column;justify-content: center;font-size: 2.5rem;width: 100%;height: 80vh;text-align: center;"><a href="https://192.168.36.36/360Linux/front" style="font-family: system-ui;background-color: #56baed;border: none;color: white;text-align: center;text-decoration: none;display: inline-block;font-size: 3rem;-webkit-box-shadow: 0 10px 30px 0 rgb(95 186 233 / 40%);box-shadow: 0 10px 30px 0 rgb(95 186 233 / 40%);-webkit-border-radius: 5px 5px 5px 5px;border-radius: 5px 5px 5px 5px;margin: 15px 20px 14px 20px;cursor: pointer;padding: 3rem;" style="font-size: 2.5rem">Acessar Eventos</a></h1>`;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map