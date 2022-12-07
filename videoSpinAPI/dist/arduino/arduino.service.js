"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArduinoService = void 0;
const common_1 = require("@nestjs/common");
const { exec } = require('child_process');
let ArduinoService = class ArduinoService {
    async sendArduinoCommand(status) {
        if (status === 1) {
            exec('python3 /var/www/html/360Linux/360/on.py', (error, stdout, stderr) => {
                if (error) {
                    console.error(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
            });
            setTimeout(() => {
                exec('python3 /var/www/html/360Linux/360/begin.py', (error, stdout, stderr) => {
                    if (error) {
                        console.error(`error: ${error.message}`);
                        return;
                    }
                });
            }, 1000);
        }
        else {
            exec('python3 /var/www/html/360Linux/360/off.py', (error, stdout, stderr) => {

                if (error) {
                    console.error(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }
            });
            setTimeout(() => {
                exec('python3 /var/www/html/360Linux/360/begin.py', (error, stdout, stderr) => {
                    if (error) {
                        console.error(`error: ${error.message}`);
                        return;
                    }
                });
            }, 1000);
        }
    }
};
ArduinoService = __decorate([
    (0, common_1.Injectable)()
], ArduinoService);
exports.ArduinoService = ArduinoService;
//# sourceMappingURL=arduino.service.js.map