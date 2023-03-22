"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.PORT || 3000;
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.listen(port);
    const server = 'server';
    common_1.Logger.log(`Server running on port: ${port}`, server);
    common_1.Logger.log(`Environment: ${process.env.NODE_ENV}`, server);
    common_1.Logger.log(`Database: ${process.env.DB_HOST}`, server);
}
bootstrap();
//# sourceMappingURL=main.js.map