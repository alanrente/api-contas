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
exports.CompraController = void 0;
const common_1 = require("@nestjs/common");
const compras_service_1 = require("./compras.service");
const create_novo_gasto_dto_1 = require("./dto/create-novo-gasto.dto");
const update_novo_gasto_dto_1 = require("./dto/update-novo-gasto.dto");
let CompraController = class CompraController {
    constructor(novoGastosService) {
        this.novoGastosService = novoGastosService;
    }
    async getFaturaMes(anoMes, res) {
        return this.novoGastosService
            .faturaMes(anoMes)
            .then((result) => res.status(result.status).send(result))
            .catch((err) => res.status(500).send(err));
    }
    async getCompras() {
        return this.novoGastosService.findAllBuys();
    }
    async create(createNovoGastoDto, res) {
        const result = await this.novoGastosService.create(createNovoGastoDto);
        return res.status(result.status).send(result);
    }
    async findAll() {
        return await this.novoGastosService.findAll();
    }
    findOne(id) {
        return this.novoGastosService.findOne(+id);
    }
    update(id, updateNovoGastoDto) {
        return this.novoGastosService.update(+id, updateNovoGastoDto);
    }
    remove(id) {
        return this.novoGastosService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)('fatura'),
    __param(0, (0, common_1.Query)('anoMes')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompraController.prototype, "getFaturaMes", null);
__decorate([
    (0, common_1.Get)('compras'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompraController.prototype, "getCompras", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_novo_gasto_dto_1.CreateNovoGastoDto, Object]),
    __metadata("design:returntype", Promise)
], CompraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompraController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompraController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_novo_gasto_dto_1.UpdateNovoGastoDto]),
    __metadata("design:returntype", void 0)
], CompraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CompraController.prototype, "remove", null);
CompraController = __decorate([
    (0, common_1.Controller)('novo-gastos'),
    __metadata("design:paramtypes", [compras_service_1.CompraService])
], CompraController);
exports.CompraController = CompraController;
//# sourceMappingURL=compras.controller.js.map