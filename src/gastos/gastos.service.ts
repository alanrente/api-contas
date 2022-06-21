import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateGastoDto } from './dto/create-gasto.dto';
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
    return this.gastosRepository.query(`call contas2.create_many_gastos('${JSON.stringify(createManyGastoDto)}')`);
  }

  findAll() {
    const data = new Date();
    console.log(data.getUTCDay());
    return this.gastosRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gasto`;
  }

  update(id: number, updateGastoDto: UpdateGastoDto) {
    return `This action updates a #${id} gasto`;
  }

  remove(id: number) {
    return `This action removes a #${id} gasto`;
  }
}
