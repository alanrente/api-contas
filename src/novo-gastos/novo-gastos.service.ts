import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GerarRateio } from 'utils/gerarRateio';
import { CreateNovoGastoDto } from './dto/create-novo-gasto.dto';
import { UpdateNovoGastoDto } from './dto/update-novo-gasto.dto';
import { Compra } from './entities/compra.entity';
import { NovoGasto } from './entities/novo-gasto.entity';

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
    this.logger.debug(createNovoGastoDto);

    return await this.compraRepository.manager.transaction(async () => {
      const compra = await this.compraRepository.save({
        parcelas: createNovoGastoDto.parcela,
        valor: createNovoGastoDto.valor,
      });

      const gerarRateio = new GerarRateio(createNovoGastoDto.valor, createNovoGastoDto.parcela);
      const rateios = gerarRateio.gerarRateio();

      const parcelaComIDCompra = rateios.map((valor) => ({ valor, idCompra: compra.id }));

      const novoGasto = await this.novoGastosRepository.save(parcelaComIDCompra);

      return { compra, novoGasto };
    });
  }

  async findAll() {
    this.logger.debug('findAll');
    return await this.novoGastosRepository.find();
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
