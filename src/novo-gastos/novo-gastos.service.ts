import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GerarRateio } from 'utils/gerarRateio';
import { CreateNovoGastoDto } from './dto/create-novo-gasto.dto';
import { UpdateNovoGastoDto } from './dto/update-novo-gasto.dto';
import { NovoGasto } from './entities/novo-gasto.entity';

@Injectable()
export class NovoGastosService {
  private logger: Logger;
  constructor(@InjectRepository(NovoGasto) private novoGastosRepository: Repository<NovoGasto>) {
    this.logger = new Logger('NovoGastosService');
  }
  async create(createNovoGastoDto: CreateNovoGastoDto) {
    this.logger.debug(createNovoGastoDto);

    if (createNovoGastoDto.parcela > 0) {
      const gerarRateio = new GerarRateio(createNovoGastoDto.valor, createNovoGastoDto.parcela);
      const rateios = gerarRateio.gerarRateio();

      return await this.novoGastosRepository.insert(rateios.map((item) => ({ valor: item })));
    }

    return await this.novoGastosRepository.insert({ valor: createNovoGastoDto.valor });
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
