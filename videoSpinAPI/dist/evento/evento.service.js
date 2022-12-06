"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventoService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const promises_1 = require("fs/promises");
let EventoService = class EventoService {
    async getEventos() {
        if (fs.existsSync(`config/evento/evento.json`)) {
            try {
                const data = JSON.parse(await (0, promises_1.readFile)('config/evento/evento.json', 'utf8'));
                return data;
            }
            catch (error) {
                throw new common_1.NotFoundException(error.msg);
            }
        }
        else {
            throw new common_1.NotFoundException('Pasta não encontrada');
        }
    }
};
EventoService = __decorate([
    (0, common_1.Injectable)()
], EventoService);
exports.EventoService = EventoService;
//# sourceMappingURL=evento.service.js.map