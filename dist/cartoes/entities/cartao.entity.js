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
exports.CartaoEntity = void 0;
const typeorm_1 = require("typeorm");
let CartaoEntity = class CartaoEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', name: 'id', primary: true, nullable: true }),
    __metadata("design:type", Number)
], CartaoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], CartaoEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], CartaoEntity.prototype, "dia_vencimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 4 }),
    __metadata("design:type", String)
], CartaoEntity.prototype, "final_numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], CartaoEntity.prototype, "obs", void 0);
CartaoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'cartoes', synchronize: false })
], CartaoEntity);
exports.CartaoEntity = CartaoEntity;
//# sourceMappingURL=cartao.entity.js.map