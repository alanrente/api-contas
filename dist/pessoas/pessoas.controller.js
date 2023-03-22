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
exports.PessoasController = void 0;
const common_1 = require("@nestjs/common");
const pessoas_service_1 = require("./pessoas.service");
const create_pessoa_dto_1 = require("./dto/create-pessoa.dto");
const update_pessoa_dto_1 = require("./dto/update-pessoa.dto");
const roles_decorator_1 = require("../decorators/roles.decorator");
const types_1 = require("../types");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const roles_guard_1 = require("../auth/guard/roles.guard");
let PessoasController = class PessoasController {
    constructor(pessoasService) {
        this.pessoasService = pessoasService;
    }
    create(createPessoaDto, res) {
        try {
            this.pessoasService.create(createPessoaDto);
            return res.send({ status: 201, message: 'Pessoa criada com sucesso' });
        }
        catch (error) {
            common_1.Logger.error(error.message);
            return res.status(500).send({ status: 500, message: error.message });
        }
    }
    findAll() {
        return this.pessoasService.findAll();
    }
    findOne(id) {
        return this.pessoasService.findOne(+id);
    }
    async update(id, updatePessoaDto, res) {
        const pessoas = await this.pessoasService.findOne(+id);
        if (!pessoas)
            return res.status(404).send({ status: 404, message: 'Nenhuma pessoa encontrada' });
        try {
            await this.pessoasService.update(+id, updatePessoaDto);
            return res.status(200).send({ status: 200, message: 'Pessoa atualizada com sucesso' });
        }
        catch (error) {
            common_1.Logger.error(error.message);
            return res.status(500).send({ status: 500, message: error.message });
        }
    }
    remove(id) {
        return this.pessoasService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pessoa_dto_1.CreatePessoaDto, Object]),
    __metadata("design:returntype", void 0)
], PessoasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(types_1.Role.ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PessoasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PessoasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pessoa_dto_1.UpdatePessoaDto, Object]),
    __metadata("design:returntype", Promise)
], PessoasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PessoasController.prototype, "remove", null);
PessoasController = __decorate([
    (0, common_1.Controller)('pessoas'),
    __metadata("design:paramtypes", [pessoas_service_1.PessoasService])
], PessoasController);
exports.PessoasController = PessoasController;
//# sourceMappingURL=pessoas.controller.js.map