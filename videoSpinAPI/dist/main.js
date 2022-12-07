"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
const dotenv = require("dotenv");
const { exec } = require('child_process');
dotenv.config();
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('./secrets/key.pem'),
        cert: fs.readFileSync('./secrets/certificate.pem'),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { httpsOptions });
    app.enableCors({
        origin: [
            '*.*',
            'http://192.168.31.199:8100',
            'http://192.168.31.199:4200',
            'https://192.168.31.199:4200',
            'http://192.168.31.199:4200',
            `http://${process.env.SERVIDOR_IP}:8100`,
            `http://${process.env.SERVIDOR_IP}:4200`,
            `https://${process.env.SERVIDOR_IP}:8100`,
            `https://${process.env.SERVIDOR_IP}:4200`,
            `https://${process.env.SERVIDOR_IP}`,
            `https://${process.env.SERVIDOR_IP}:443`,
            `https://${process.env.SERVIDOR_IP}:8080`,
            `http://${process.env.SERVIDOR_IP}:8080`,
            `http://localhost:4200`,
            `http://localhost:8100`,
        ],
    });
    await app.listen(3000, process.env.SERVIDOR_IP).then(() => {
        console.log('aplication started');
        console.log(process.env.SERVIDOR_IP);
        setTimeout(() => {
            exec('python3 /var/www/html/360Linux/360/begin.py', (error, stdout, stderr) => {
                if (error) {
                    console.error(`error: ${error.message}`);
                    return;
                }
            });
        }, 1000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map