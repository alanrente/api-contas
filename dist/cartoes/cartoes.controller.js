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
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const roles_guard_1 = require("../auth/guard/roles.guard");
const roles_decorator_1 = require("../decorators/roles.decorator");
const types_1 = require("../types");
const cartoes_service_1 = require("./cartoes.service");
const create_cartoe_dto_1 = require("./dto/create-cartoe.dto");
const update_cartoe_dto_1 = require("./dto/update-cartoe.dto");
let CartoesController = class CartoesController {
    constructor(cartoesService) {
        this.cartoesService = cartoesService;
        this.log = new common_1.Logger('CartoesController');
    }
    async create(createCartoeDto, res) {
        this.log.debug('CreateCartoeDto:', JSON.stringify(createCartoeDto));
        return await this.cartoesService
            .create(createCartoeDto)
            .then((result) => res.status(201).json(result))
            .catch((err) => res.status(500).json(err));
    }
    findAll() {
        this.log.debug('findAll');
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
    async remove(id, resp) {
        return await this.cartoesService.remove(+id).then((res) => resp.status(res.status).send(res));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cartoe_dto_1.CreateCartoeDto, Object]),
    __metadata("design:returntype", Promise)
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
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CartoesController.prototype, "remove", null);
CartoesController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(types_1.Role.ADMIN),
    (0, common_1.Controller)('cartoes'),
    __metadata("design:paramtypes", [cartoes_service_1.CartoesService])
], CartoesController);
exports.CartoesController = CartoesController;
//# sourceMappingURL=cartoes.controller.js.map