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
exports.PublicController = void 0;
const common_1 = require("@nestjs/common");
let PublicController = class PublicController {
    getPublicKeyPagueSeguro(res) {
        return res.send({
            public_key: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAymEwdREwpI86axMTFPgfS86KiClK96AOeRBZvBvivJ1WmMyCDxulkQmDcVY2rtKUqP3mIIcezUNiL/gLP/FFzkMok4CsTRylpmz/KCHlcwnBwQKYrDQCxGEiVqmxxDnTv4h/680c5Tia5Cm6h4aJGHT5Qt8UNf1fOUK6lrjieCfJaVZzs2Vin1UwNqBSBAKXKpvl8cbtrTNrPObuPu/inyr96ztF05mfS/onD07+L5sqY7CIG0IV5dwwzczCoxhSYQlS2qfyJaw3H6Y80txy4TZCDZ0i+gLjm3S1sY9Wfmeu6TVpb/9lWbf14eoqEq8XuGpWmLnJ7p2K0Y6ovqYAOwIDAQAB',
            created_at: 1721506148783,
        });
    }
};
__decorate([
    (0, common_1.Get)('pagueseguro'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "getPublicKeyPagueSeguro", null);
PublicController = __decorate([
    (0, common_1.Controller)('public')
], PublicController);
exports.PublicController = PublicController;
//# sourceMappingURL=public.controller.js.map