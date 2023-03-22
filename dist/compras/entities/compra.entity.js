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
exports.Compra = void 0;
const cartao_entity_1 = require("../../cartoes/entities/cartao.entity");
const pessoa_entity_1 = require("../../pessoas/entities/pessoa.entity");
const typeorm_1 = require("typeorm");
let Compra = class Compra {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'ID_COMPRA', generated: 'increment' }),
    __metadata("design:type", Number)
], Compra.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'VALOR_COMPRA', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Compra.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'PARCELAS', type: 'integer' }),
    __metadata("design:type", Number)
], Compra.prototype, "parcelas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'DATA_COMPRA', type: 'date' }),
    __metadata("design:type", String)
], Compra.prototype, "data_compra", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cartao_entity_1.CartaoEntity, (cartaoEntity) => cartaoEntity.compras, { nullable: false }),
    __metadata("design:type", cartao_entity_1.CartaoEntity)
], Compra.prototype, "cartao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pessoa_entity_1.PessoaEntity, (pessoa) => pessoa.compras, { nullable: false }),
    __metadata("design:type", pessoa_entity_1.PessoaEntity)
], Compra.prototype, "pessoa", void 0);
Compra = __decorate([
    (0, typeorm_1.Entity)({ name: 'COMPRA' })
], Compra);
exports.Compra = Compra;
//# sourceMappingURL=compra.entity.js.map