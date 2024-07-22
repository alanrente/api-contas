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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const app_controller_1 = require("./app.controller");
const common_1 = require("@nestjs/common");
const cartoes_module_1 = require("./cartoes/cartoes.module");
const config_1 = require("@nestjs/config");
const config_2 = require("./config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pessoas_module_1 = require("./pessoas/pessoas.module");
const gastos_module_1 = require("./gastos/gastos.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const public_module_1 = require("./public/public.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot((0, config_2.getDatabaseExportConfig)()),
            cartoes_module_1.CartoesModule,
            pessoas_module_1.PessoasModule,
            gastos_module_1.GastosModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            public_module_1.PublicModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [common_1.Logger],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map