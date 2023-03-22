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
exports.PessoaEntity = void 0;
const compra_entity_1 = require("../../compras/entities/compra.entity");
const typeorm_1 = require("typeorm");
let PessoaEntity = class PessoaEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', primary: true, nullable: true }),
    __metadata("design:type", Number)
], PessoaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], PessoaEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], PessoaEntity.prototype, "apelido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], PessoaEntity.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], PessoaEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => compra_entity_1.Compra, (compra) => compra.pessoa),
    __metadata("design:type", Array)
], PessoaEntity.prototype, "compras", void 0);
PessoaEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pessoas', synchronize: false })
], PessoaEntity);
exports.PessoaEntity = PessoaEntity;
//# sourceMappingURL=pessoa.entity.js.map