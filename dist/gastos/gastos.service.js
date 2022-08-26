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
exports.GastosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_validator_1 = require("class-validator");
const typeorm_2 = require("typeorm");
const gasto_entity_1 = require("./entities/gasto.entity");
let GastosService = class GastosService {
    constructor(gastosRepository, dataSource) {
        this.gastosRepository = gastosRepository;
        this.dataSource = dataSource;
    }
    create(createGastoDto) {
        if (Array.isArray(createGastoDto))
            throw Error('createGastoDto must be an object');
        (0, class_validator_1.validate)(createGastoDto).catch((error) => {
            throw new Error(error.message);
        });
        return this.gastosRepository.save(createGastoDto);
    }
    createMany(createManyGastoDto) {
        return this.gastosRepository.query(`call ${process.env.DB_SCHEMA}.create_many_gastos('${JSON.stringify(createManyGastoDto)}')`);
    }
    async findAll() {
        return await this.dataSource
            .getRepository(gasto_entity_1.GastosEntity)
            .createQueryBuilder('gasto')
            .select(['gasto', 'pessoa.nome', 'cartao.nome', 'cartao.id'])
            .leftJoin('gasto.pessoa_id', 'pessoa')
            .leftJoin('gasto.cartao_id', 'cartao')
            .getMany();
    }
    async findAllCurrentInvoice() {
        const fatura_mes = await this.gastosRepository.query(`select * from ${process.env.DB_SCHEMA}.fatura_mes`);
        return fatura_mes.map((gasto) => (Object.assign(Object.assign({}, gasto), { valor: Number(gasto.valor) })));
    }
    async findOne(id) {
        const user = await this.gastosRepository.findOne({ where: { id: id } });
        if (!user)
            throw new common_1.NotFoundException('Nenhum gasto encontrado');
        return user;
    }
    update(id, updateGastoDto) {
        return `This action updates a #${id} gasto`;
    }
    remove(id) {
        return `This action removes a #${id} gasto`;
    }
};
GastosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(gasto_entity_1.GastosEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], GastosService);
exports.GastosService = GastosService;
//# sourceMappingURL=gastos.service.js.map