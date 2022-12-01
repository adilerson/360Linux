"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArduinoModule = void 0;
const arduino_service_1 = require("./arduino.service");
const arduino_controller_1 = require("./arduino.controller");
const common_1 = require("@nestjs/common");
let ArduinoModule = class ArduinoModule {
};
ArduinoModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [arduino_controller_1.ArduinoController],
        providers: [arduino_service_1.ArduinoService],
    })
], ArduinoModule);
exports.ArduinoModule = ArduinoModule;
//# sourceMappingURL=arduino.module.js.map