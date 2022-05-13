import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoaEntity } from './entities/pessoa.entity';

@Injectable()
export class PessoasService {
  constructor(@InjectRepository(PessoaEntity) private repository: Repository<PessoaEntity>) {}

  async create(createPessoaDto: CreatePessoaDto) {
    return `This action add an pessoa ${JSON.stringify(createPessoaDto)}`;
  }

  async findAll() {
    return await this.repository.find({ select: ['id', 'nome', 'apelido'] });
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id: id } });
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return await this.repository.update(id, updatePessoaDto);
  }

  remove(id: number) {
    return `This action removes a #${id} pessoa`;
  }
}
