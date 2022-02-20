/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCartoeDto } from './dto/create-cartoe.dto';
import { UpdateCartoeDto } from './dto/update-cartoe.dto';
import { CartaoEntity } from './entities/cartao.entity';

@Injectable()
export class CartoesService {
  constructor(@InjectRepository(CartaoEntity) private repository: Repository<CartaoEntity>) {}
  create(createCartoeDto: CreateCartoeDto) {
    return 'This action adds a new cartoe';
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `SELECT * FROM contas.cartoes WHERE id = ${id}`;
  }

  update(id: number, updateCartoeDto: UpdateCartoeDto) {
    return `This action updates a #${id} cartoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartoe`;
  }
}
