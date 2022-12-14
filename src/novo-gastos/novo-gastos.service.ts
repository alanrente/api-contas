import { Injectable } from '@nestjs/common';
import { CreateNovoGastoDto } from './dto/create-novo-gasto.dto';
import { UpdateNovoGastoDto } from './dto/update-novo-gasto.dto';

@Injectable()
export class NovoGastosService {
  create(createNovoGastoDto: CreateNovoGastoDto) {
    return 'This action adds a new novoGasto';
  }

  findAll() {
    return `This action returns all novoGastos`;
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
