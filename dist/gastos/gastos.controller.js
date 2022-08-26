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
exports.GastosController = void 0;
const common_1 = require("@nestjs/common");
const gastos_service_1 = require("./gastos.service");
const create_gasto_dto_1 = require("./dto/create-gasto.dto");
const update_gasto_dto_1 = require("./dto/update-gasto.dto");
let GastosController = class GastosController {
    constructor(gastosService) {
        this.gastosService = gastosService;
    }
    async create(createGastoDto, res) {
        try {
            await this.gastosService.create(createGastoDto);
            return res.status(201).json({ message: 'Gasto criado com sucesso' }).end();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async createMany(arrayJson, res) {
        try {
            await this.gastosService.createMany(arrayJson);
            return res.status(201).json({ message: 'Gastos criados com sucesso' }).end();
        }
        catch (erro) {
            throw new common_1.InternalServerErrorException(erro.message);
        }
    }
    findAll() {
        return this.gastosService.findAll();
    }
    findAllRelations() {
        return this.gastosService.findAllCurrentInvoice();
    }
    findOne(id) {
        return this.gastosService.findOne(+id);
    }
    update(id, updateGastoDto) {
        return this.gastosService.update(+id, updateGastoDto);
    }
    remove(id) {
        return this.gastosService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gasto_dto_1.CreateGastoDto, Object]),
    __metadata("design:returntype", Promise)
], GastosController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('many'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], GastosController.prototype, "createMany", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GastosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/fatura-mes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GastosController.prototype, "findAllRelations", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GastosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_gasto_dto_1.UpdateGastoDto]),
    __metadata("design:returntype", void 0)
], GastosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GastosController.prototype, "remove", null);
GastosController = __decorate([
    (0, common_1.Controller)('gastos'),
    __metadata("design:paramtypes", [gastos_service_1.GastosService])
], GastosController);
exports.GastosController = GastosController;
//# sourceMappingURL=gastos.controller.js.map