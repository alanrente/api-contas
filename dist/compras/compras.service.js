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
exports.CompraService = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("@nestjs/common/services");
const typeorm_1 = require("@nestjs/typeorm");
const moment_1 = require("../config/moment");
const types_1 = require("../types");
const typeorm_2 = require("typeorm");
const gerarRateio_1 = require("../utils/gerarRateio");
const compra_entity_1 = require("./entities/compra.entity");
const lancamentos_entity_1 = require("./entities/lancamentos.entity");
const messageResponse_1 = require("../utils/messageResponse");
const cartao_entity_1 = require("../cartoes/entities/cartao.entity");
const pessoa_entity_1 = require("../pessoas/entities/pessoa.entity");
let CompraService = class CompraService {
    constructor(novoGastosRepository, compraRepository) {
        this.novoGastosRepository = novoGastosRepository;
        this.compraRepository = compraRepository;
        this.logger = new services_1.Logger('NovoGastosService');
    }
    async create(createNovoGastoDto) {
        this.logger.debug(`[create]: ${JSON.stringify(createNovoGastoDto)}`);
        return await this.compraRepository.manager
            .transaction(async () => {
            const cartao = await this.novoGastosRepository.manager
                .getRepository(cartao_entity_1.CartaoEntity)
                .findOne({ where: { id: createNovoGastoDto.cartaoId } });
            const pessoa = await this.novoGastosRepository.manager
                .getRepository(pessoa_entity_1.PessoaEntity)
                .findOne({ where: { id: createNovoGastoDto.pessoaId } });
            const compra = await this.compraRepository.save(Object.assign(Object.assign({}, createNovoGastoDto), { cartao: cartao, pessoa: pessoa, parcelas: createNovoGastoDto.parcelas || 1 }));
            const gerarRateio = new gerarRateio_1.GerarRateio(compra.valor, compra.parcelas);
            const rateios = gerarRateio.gerarRateio();
            const rateioCompleto = rateios.map((valor, i) => ({
                valor,
                idCompra: compra.id,
                dataLancamento: (0, moment_1.momentJs)(compra.data_compra)
                    .add(i + 1, 'months')
                    .set('date', 1)
                    .format(types_1.DATES_FORMAT.DB),
            }));
            const novoGasto = await this.novoGastosRepository.save(rateioCompleto);
            return { id_compra: compra.id, valor: compra.valor, data_compra: compra.data_compra, parcelas: novoGasto };
        })
            .then((res) => new messageResponse_1.default(res).success(201))
            .catch((err) => new messageResponse_1.default(err.message).internalError());
    }
    async findAllBuys() {
        const compras = await this.compraRepository.find({
            relations: { pessoa: true, cartao: true },
            select: {
                pessoa: {
                    nome: true,
                },
                cartao: {
                    nome: true,
                    final_numero: true,
                },
            },
        });
        return compras.map(({ cartao, data_compra, id, parcelas, pessoa, valor }) => ({
            id,
            valor: +valor,
            parcelas,
            data_compra,
            pessoa: pessoa.nome,
            cartao: cartao.nome,
            numero: cartao.final_numero,
        }));
    }
    async findAll() {
        const novosGastos = await this.novoGastosRepository.find();
        return novosGastos.map((gasto) => (Object.assign(Object.assign({}, gasto), { valor: +gasto.valor })));
    }
    findOne(id) {
        return `This action returns a #${id} novoGasto`;
    }
    update(id, updateNovoGastoDto) {
        return `This action updates a #${updateNovoGastoDto} novoGasto`;
    }
    remove(id) {
        return `This action removes a #${id} novoGasto`;
    }
    async faturaMes(anoMes) {
        const dataQuery = (0, moment_1.momentJs)(anoMes);
        const dataInicio = dataQuery.startOf('month').format(types_1.DATES_FORMAT.DB);
        const dataFim = dataQuery.endOf('month').format(types_1.DATES_FORMAT.DB);
        const sumGastos = await this.novoGastosRepository
            .createQueryBuilder('sumGastos')
            .where(`sumGastos.DATA_LANCAMENTO BETWEEN :dataInicio AND :dataFim`, { dataInicio, dataFim })
            .select('SUM(sumGastos.VALOR_MES)', 'soma')
            .getRawOne();
        return new messageResponse_1.default({
            anoMes: dataQuery.format(types_1.DATES_FORMAT.BRL.ANO_MES),
            lancamentos: +(sumGastos === null || sumGastos === void 0 ? void 0 : sumGastos.soma),
        }).success();
    }
};
CompraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lancamentos_entity_1.Lancamentos)),
    __param(1, (0, typeorm_1.InjectRepository)(compra_entity_1.Compra)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CompraService);
exports.CompraService = CompraService;
//# sourceMappingURL=compras.service.js.map