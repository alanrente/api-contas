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
exports.Lancamentos = void 0;
const typeorm_1 = require("typeorm");
let Lancamentos = class Lancamentos {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ generated: 'increment', name: 'ID_LANCAMENTO' }),
    __metadata("design:type", Number)
], Lancamentos.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'VALOR_MES', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Lancamentos.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'FK_ID_COMPRA', type: 'integer' }),
    __metadata("design:type", Number)
], Lancamentos.prototype, "idCompra", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', name: 'DATA_LANCAMENTO' }),
    __metadata("design:type", String)
], Lancamentos.prototype, "dataLancamento", void 0);
Lancamentos = __decorate([
    (0, typeorm_1.Entity)({ name: 'LANCAMENTOS', synchronize: true })
], Lancamentos);
exports.Lancamentos = Lancamentos;
//# sourceMappingURL=lancamentos.entity.js.map