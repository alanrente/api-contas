import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { Fatura } from './dto/fatura.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { GastosEntity } from './entities/gasto.entity';

@Injectable()
export class GastosService {
  constructor(@InjectRepository(GastosEntity) private gastosRepository: Repository<GastosEntity>) {}

  create(createGastoDto: CreateGastoDto) {
    if (Array.isArray(createGastoDto)) throw Error('createGastoDto must be an object');
    validate(createGastoDto).catch((error) => {
      throw new Error(error.message);
    });
    return this.gastosRepository.save(createGastoDto);
  }

  createMany(createManyGastoDto: CreateGastoDto[]) {
    return this.gastosRepository.query(
      `call ${process.env.DB_SCHEMA}.create_many_gastos('${JSON.stringify(createManyGastoDto)}')`,
    );
  }

  findAll() {
    const data = new Date();
    console.log(data.getUTCDay());
    return this.gastosRepository.find();
  }

  async findAllCurrentInvoice() {
    const fatura_mes: Fatura[] = await this.gastosRepository.query(`select * from ${process.env.DB_SCHEMA}.fatura_mes`);

    return fatura_mes.map((gasto) => ({ ...gasto, valor: Number(gasto.valor) }));
  }

  async findOne(id: number) {
    const user = await this.gastosRepository.findOne({ where: { id: id } });

    if (!user) throw new NotFoundException('Nenhum gasto encontrado');

    return user;
  }

  update(id: number, updateGastoDto: UpdateGastoDto) {
    return `This action updates a #${id} gasto`;
  }

  remove(id: number) {
    return `This action removes a #${id} gasto`;
  }
}
