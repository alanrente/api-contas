import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { momentJs } from 'config/moment';
import { DATES_FORMAT } from 'types';
import { Repository } from 'typeorm';
import { GerarRateio } from 'utils/gerarRateio';
import { CreateNovoGastoDto } from './dto/create-novo-gasto.dto';
import { UpdateNovoGastoDto } from './dto/update-novo-gasto.dto';
import { Compra } from './entities/compra.entity';
import { NovoGasto } from './entities/novo-gasto.entity';
import MessageResponse from 'utils/messageResponse';

@Injectable()
export class NovoGastosService {
  private logger: Logger;

  constructor(
    @InjectRepository(NovoGasto) private novoGastosRepository: Repository<NovoGasto>,
    @InjectRepository(Compra) private compraRepository: Repository<Compra>,
  ) {
    this.logger = new Logger('NovoGastosService');
  }
  async create(createNovoGastoDto: CreateNovoGastoDto) {
    this.logger.debug(`[create]: ${JSON.stringify(createNovoGastoDto)}`);

    return await this.compraRepository.manager
      .transaction(async () => {
        this.logger.debug('[create]: >>>> Iniciando transaction');
        const compra = await this.compraRepository.save({
          ...createNovoGastoDto,
          parcelas: createNovoGastoDto.parcelas,
        });

        const gerarRateio = new GerarRateio(createNovoGastoDto.valor, createNovoGastoDto.parcelas);
        const rateios = gerarRateio.gerarRateio();

        const rateioCompleto = rateios.map((valor, i) => ({
          valor,
          idCompra: compra.id,
          dataLancamento: momentJs(compra.data_compra)
            .add(i + 1, 'months')
            .set('date', 1)
            .format(DATES_FORMAT.DB),
        }));

        const novoGasto = await this.novoGastosRepository.save(rateioCompleto);

        return { compra, novoGasto };
      })
      .then((res) => new MessageResponse(res).success(201))
      .catch((err) => new MessageResponse(err.message).internalError());
  }

  async findAll() {
    const novosGastos = await this.novoGastosRepository.find();
    return novosGastos.map((gasto, i) => ({
      ...gasto,
      dataMovimento: momentJs(gasto.dataLancamento)
        .add(i + 1, 'months')
        .format(DATES_FORMAT.BRL_FORMAT),
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} novoGasto`;
  }

  update(id: number, updateNovoGastoDto: UpdateNovoGastoDto) {
    return `This action updates a #${id} novoGasto`;
  }

  remove(id: number) {
    return `This action removes a #${id} novoGasto`;
  }
}
