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
exports.GastosEntity = void 0;
const cartao_entity_1 = require("../../cartoes/entities/cartao.entity");
const pessoa_entity_1 = require("../../pessoas/entities/pessoa.entity");
const typeorm_1 = require("typeorm");
let GastosEntity = class GastosEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', primary: true, nullable: true }),
    __metadata("design:type", Number)
], GastosEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pessoa_entity_1.PessoaEntity),
    (0, typeorm_1.JoinColumn)({ name: 'pessoa_id' }),
    __metadata("design:type", Number)
], GastosEntity.prototype, "pessoa_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cartao_entity_1.CartaoEntity),
    (0, typeorm_1.JoinColumn)({ name: 'cartao_id' }),
    __metadata("design:type", Number)
], GastosEntity.prototype, "cartao_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], GastosEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], GastosEntity.prototype, "data_compra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], GastosEntity.prototype, "data_cadastro", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    __metadata("design:type", Number)
], GastosEntity.prototype, "parcelas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], GastosEntity.prototype, "valor", void 0);
GastosEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'gastos', synchronize: false })
], GastosEntity);
exports.GastosEntity = GastosEntity;
//# sourceMappingURL=gasto.entity.js.map