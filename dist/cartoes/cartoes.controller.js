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
exports.CartoesController = void 0;
const common_1 = require("@nestjs/common");
const cartoes_service_1 = require("./cartoes.service");
const create_cartoe_dto_1 = require("./dto/create-cartoe.dto");
const update_cartoe_dto_1 = require("./dto/update-cartoe.dto");
let CartoesController = class CartoesController {
    constructor(cartoesService) {
        this.cartoesService = cartoesService;
    }
    create(createCartoeDto) {
        return this.cartoesService.create(createCartoeDto);
    }
    findAll() {
        return this.cartoesService.findAll();
    }
    async findOne(resp, id) {
        try {
            const card = await this.cartoesService.findOne(+id);
            resp.status(200).send(card);
        }
        catch (error) {
            common_1.Logger.error(error.message);
            resp.status(400).send({ message: error.message });
        }
    }
    async update(resp, id, updateCartoeDto) {
        try {
            await this.cartoesService.update(+id, updateCartoeDto);
            resp.status(200).send();
        }
        catch (error) {
            common_1.Logger.error(error.message);
            resp.status(400).send({ message: 'Cartão não pode ser atualizado' });
        }
    }
    remove(id) {
        return this.cartoesService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cartoe_dto_1.CreateCartoeDto]),
    __metadata("design:returntype", void 0)
], CartoesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CartoesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CartoesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_cartoe_dto_1.UpdateCartoeDto]),
    __metadata("design:returntype", Promise)
], CartoesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartoesController.prototype, "remove", null);
CartoesController = __decorate([
    (0, common_1.Controller)('cartoes'),
    __metadata("design:paramtypes", [cartoes_service_1.CartoesService])
], CartoesController);
exports.CartoesController = CartoesController;
//# sourceMappingURL=cartoes.controller.js.map